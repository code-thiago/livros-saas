import { compareSync } from 'bcrypt-ts';
import db from './db';
type User = {
  email: string;
  name: string;
  password?: string;
};

export async function findUserbyCredentials(
  email:string, 
  password:string
): Promise<User | null> {
  // Procurando o usuário no banco
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

   // Se o usuário não existir ou não tiver senha, retorna null
  if (!user || !user.password) {
    return null;
  }
  // Verifica se a senha fornecida corresponde à armazenada
  const passwordMatch = compareSync(password, user.password);

  if (passwordMatch) {
     // Retorna o objeto com email e nome do usuário
    return { email: user.email, name: user.name};
  }
  return null;
}
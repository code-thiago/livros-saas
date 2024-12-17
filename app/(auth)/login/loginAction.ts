'use server';

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      redirect: true,
      redirectTo: '/dashboard'
    }); 
    //1:34
  } catch (e: any) {
    if (isRedirectError(e)) {
      throw e;
    }

    if (e.type === 'CredentialsSignIn') {
      return { success: false, message: 'Dados de login incorretos'};
    }
    return { success: false, message: 'Ops, algum erro aconteceu!'};
  }
}
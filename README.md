# Plataforma de Ebooks por Assinatura 📚  

> Uma aplicação moderna para leitura e assinatura de ebooks, oferecendo uma experiência simples, eficiente e segura.  

## 🚀 Funcionalidades  

- **Homepage:**
  - Apresentação da plataforma com informações sobre o serviço e seus benefícios.
  - Design responsivo e moderno.  

- **Dashboard:**
  - Listagem dos livros disponíveis na biblioteca.
  - Sistema de busca e filtro para encontrar livros rapidamente.
  - Leitura online diretamente na plataforma.

- **Sistema de Assinaturas:**
  - Gerenciamento completo de assinaturas usando Stripe.
  - Diferentes planos de assinatura, incluindo mensal e anual.
  - Controle de status do pagamento diretamente no painel.  

- **Autenticação Segura:**
  - Registro e login utilizando **NextAuth**.
  - Suporte a recuperação de senha.
  - Armazenamento seguro de dados com **Bcrypt**.  

- **Banco de Dados e Integração:**
  - Utilização de **Turso** e **SQLite** para um banco de dados leve e eficiente.
  - Interações otimizadas com o banco de dados usando **Prisma**.

---

## 💻 Tecnologias  

- **Next.js:** Para a criação de uma aplicação moderna e server-side rendering.
- **TypeScript:** Para um desenvolvimento mais confiável e escalável.
- **NextAuth:** Gerenciamento de autenticação simples e integrado.
- **Stripe:** Sistema de pagamentos e assinaturas seguro.
- **Turso e SQLite:** Gerenciamento de banco de dados rápido e eficiente.
- **Prisma:** ORM para interagir com o banco de dados com facilidade.
- **Bcrypt:** Segurança no armazenamento de senhas.  

---

## 🛠️ Instalação  

Siga as instruções abaixo para rodar o projeto localmente:  

```bash
# Clone este repositório
git clone https://github.com/seu-usuario/plataforma-ebooks.git
cd plataforma-ebooks
# Instale as dependências
npm install
# Configure as variáveis de ambiente no arquivo .env:
# STRIPE_PUBLIC_KEY=SuaChavePublica
# STRIPE_SECRET_KEY=SuaChaveSecreta
# DATABASE_URL=SuaURLDoBanco
# NEXTAUTH_SECRET=SeuSegredo
# NEXTAUTH_URL=SuaURL
# Execute as migrações do banco de dados
npx prisma migrate dev
# Inicie o servidor de desenvolvimento
npm run dev
# Acesse no navegador
http://localhost:3000
## 🖼️ Capturas de Tela  

**Homepage:**  
*(Adicione uma imagem aqui mostrando a página inicial do projeto)*  

**Dashboard:**  
*(Adicione uma imagem aqui mostrando o dashboard com os ebooks)*  

**Página de Assinaturas:**  
*(Adicione uma imagem aqui mostrando o processo de assinatura)*  

---

## 🚧 Roadmap  

Funcionalidades futuras que serão implementadas:  

- Sistema de recomendação de livros com base no histórico do usuário.  
- Feedback de usuários nos livros (comentários e avaliações).  
- Suporte a notificações por email para lembretes de assinatura.  
- Adicionar integração com IA para sugestões personalizadas.  
## 🎨 Design do Projeto

O layout está no Figma e já está implementado no projeto. 

### Figma

🔗 [Link do design](https://www.figma.com/community/file/1431066927390390144/mini-projeto-saas-autenticacao-com-nextauth-prisma-e-next-js-15)

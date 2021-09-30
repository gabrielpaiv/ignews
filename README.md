# Ignews

&nbsp;

<img src="https://raw.githubusercontent.com/gabrielpaiv/gabrielpaiv/c6075a5d7c8c601a336dbee727028df45f4f3130/.github/images/Projects/ignews.svg" width="100%"/>

&nbsp;


## 🚧 Informações sobre o projeto

* Esse projeto foi desenvolvido na parte de NextJs no capitulo III da Trilha de React. A ideia era ter um blog pago onde o usuário entra pelo GitHub e paga sua inscrição com o Stripe como plataforma de pagamentos. Os usuários que não possuem a inscrição, só conseguem ver o conteúdo inicial da postagem, orefecendo a sugestão de inscrição logo abaixo.

&nbsp;

## 💻 O que tem no projeto?

* Integração com o Prismic CMS, gerenciando o sistema de postagens do blog.
* Integração com o Stripe para a realizar o pagamento das inscrições.
* Integração com o NextAuth para autenticação com o Github.
* Sistema de verificação de assinatura, o conteúdo completo só é exibido com uma assinatura paga.
* Banco de dados NoSQL FaunaDB para persistir os dados de usuário e pagamento.
* Uso do sistema estático do Next.js, onde os posts são gerados por servidor e servidos por CDN para um melhor carregamento.

&nbsp;

<img src="https://raw.githubusercontent.com/gabrielpaiv/gabrielpaiv/main/.github/images/Projects/Ignews-example.jpg" width="100%"/>

&nbsp;

## 🛠️ Tecnologias/Ferramentas ultilizadas

* [React](https://pt-br.reactjs.org/E)
* [Next.js](https://nextjs.org/)
* [NextAuth](https://next-auth.js.org/)
* [Prismic CMS](https://prismic.io/)
* [Stripe](https://stripe.com/en-br)
* [FaunaDB](https://fauna.com/)

&nbsp;

## ⚙️ Instalação
```
# Supondo que seu terminal seja Unix
# Abra um terminal e copie este repositório com o comando
$ git clone https://github.com/gabrielpaiv/ignews.git
```

```
# Acesse a pasta da aplicação
$ cd ignews

# Crie um arquivo .env.local e coloque as variaveis
# de ambiente baseado no arquivo .env.example

# Instale as dependências
$ yarn

# Inicie a aplicação
$ yarn dev

```

&nbsp;

<p align="center">Feito com 🦆 por Gabriel Paiva</p>


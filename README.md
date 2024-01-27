## Team Discord App

This is a repository of a community server app having functionality similar to discord.

Tech stack used is: NextJS, Typescript, NextAuth, Socket.io, Prisma (MongoDB), ShadcnUI.

Live: https://teamdiscord.up.railway.app/

### Prerequisites

**Node version 18.x.x**

### Cloning the repository

```shell
git clone https://github.com/AryanDhiman10/TeamDiscord.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
GITHUB_ID=
GITHUB_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=
NEXTAUTH_URL_INTERNAL=

UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

DATABASE_URL=

LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=
NEXT_PUBLIC_LIVEKIT_URL=
```

### Setup Prisma

Add MongoDB Atlas Database

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```


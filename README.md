## ReviewurCode

ReviewurCode is an online platform where programmers can review code and submit feedback to make your code more futuristic.

### Setting up locally

Clone the repo:

```bash
  git clone https://github.com/listentothefrog/reviewurcode.git
```

Install all of the dependencies:

```bash
  cd reviewurcode
  npm install
```

Start running locally:

```bash
   npm run dev
```

### Setting up the backend

Make sure you create a [Firebase Project](https://firebase.google.com/). After your project is ready, go to your Github profile and create a Github OAuth app, you can follow the [documentation](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) for setting an Oauth app.

When done setting up the backend and your Github Oauth app, please read the [Workflow](https://github.com/listentothefrog/reviewurcode/blob/dev/WORKFLOWS.md) so that you can understand the logic that we are using in the backend.

### Built Using

- [NextJS](https://github.com/vercel/next.js)
- [React](https://github.com/facebook/react)
- [Typescript](https://github.com/microsoft/typescript)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Firebase](https://github.com/firebase)

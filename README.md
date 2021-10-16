## ReviewurCode

A platform for programmers to review your code and minimize bugs and make your code less DRY.

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

**Setting up the backend**

Make sure you create a Firebase Project you can follow this [video](https://youtu.be/rQvOAnNvcNQ) made by the Firebase team. After your project is ready, go to your Github profile and create a Github OAuth app you can follow this [video](https://youtu.be/MG3ZTfdxODA?t=722) made by Daily Web Coding. 

> **Note**: The video made by Daily Web Coding was using Firebase before tree shaking was released. We recommend reading the docs for setting up Github authentication.
> - [Setting up Github Auth](https://firebase.google.com/docs/auth/web/github-auth)

After you are done setting up the backend please read the [Workflow](https://github.com/listentothefrog/reviewurcode/blob/dev/WORKFLOWS.md) so that you can understand the logic that we are using in the backend. 


### Built Using

- [NextJS](https://github.com/vercel/next.js)
- [React](https://github.com/facebook/react)
- [Typescript](https://github.com/microsoft/typescript)
- [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss)
- [Firebase](https://github.com/firebase)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

## Overview : Indonesia eVoting platform

This platform has been created to allow users to register, login and cast a vote for their desired candidate in the 2024 presidential elections.
Requirements

- Visual studio code
- Chrome
- Next/font

## Project structure and Stack: This project makes use of the following structure:

- Typescript
- Next.js
- React
- Firebase Firestore

## How to run: To run the project locally, follow the steps below:

1. Clone the repository on your local machine
2. Install the dependencies- npm install
3. Configure firebase- this is done by first creating a firebase project in Firebase Console and then taking the Firebase configuration and placing it in the project’s Firebase Initialization file (‘firebase.ts’)
4. Run the application- npm run dev. From this command, you will be given a link that you can use to navigate to ‘http://localhost:3000’

## Usability

- Register: users can register making use of their information in order to be eligible to vote
- Log in: registered users are able to log in using their email and password credentials so that they can proceed to the voting page
- Cast votes: users are able to cast their votes for their desired presidential candidates, or they are able to abstain from voting
- Results: the votes made are recorded and used to update the current results figures

## Navigation

Upon arrival on the page, the user can see the different presidential candidates and their respective manifestos as a guest on the platform. Additionally, they can view the current results of the election before deciding whether they would like to register to cast their own vote.
If the user decided to register, they are prompted by the register button to a different webpage where they can fill in their required details. From there, once they have successfully registered, they are redirected to the ballot page where they are able to cast their vote. They are given the option to either vote for a specific candidate or to abstain. Once they have done so, they are able to logout, or return to the homepage. The user is not allowed to cast more than one vote. Similarly, if a user already has an account, they are able to make use of the login function so that they can go and cast their vote on the ballot page.

## Version Control

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

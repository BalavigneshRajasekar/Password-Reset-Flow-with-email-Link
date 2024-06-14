# Reset Password with Email verification

The React coponent that allows users to reset their passwords securely. This functionality ensures that only authorized users can reset their passwords by verifying their email addresses. The implementation will involve a client-side application using React and a server-side application using Node.js with Express.

### Features

#### 1. User Interface for Password Reset Request:

        * A form for users to enter their registered email address to request a password reset.
        * Informative messages to guide the user through the process.

#### 2. Email Verification code:

       * Sending an verification code throught the registered mail
       * The backend API endpoint will take care of the sending mail's

#### 3.Reset Password Link:

       * Once user's verification code verified Another mail send to the user which has the Reset Password Link

#### 4. Password Reset Form:

        * Once user Click on the Reset Link It navigates to Reset Password Form
        * It takes the value and add the verified Password Into DB

#### 5. backend API :

        * Endpoints to handle password reset requests,Verication code generation, and verification.
        * handle the Register and Login
        * Updating the user's password in the database after verification.

#### API Documentation :

     POSTMAN : https://documenter.getpostman.com/view/35282596/2sA3XQg1c4




## Demo

Live : https://password-reset-flow-with-email-link.vercel.app/

API : https://password-reset-flow-with-email-link.onrender.com

## Run Locally

Clone the project

### FrontEnd

```bash
  git clone https://github.com/BalavigneshRajasekar/Password-Reset-Flow-with-email-Link.git
```

Go to the project directory

```bash
  cd Frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

### Backend

Go to the project directory

```bash
  cd Backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  node server.js
```

## Tech Stack

**Client:** React,Bootstrap

**Server:** Node, Express ,MongDB

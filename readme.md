## Dummy auth api

A dummy auth api for testing purposes.

### Endpoints:

- `/` - Root endpoint for testing the app is running.
- `/auth/login` - Login with email and password to get token
- `/auth/user` - Get user info with token
- `/protected` - Get protected data with token

### Credential

```bash
{
    "email": "example@example.com",
    "password: "password"
}
```

## Installation

```bash
npm install
npm run dev

// -> serve: http://localhost:5000
```

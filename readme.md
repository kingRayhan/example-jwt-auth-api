## Dummy auth api

A dummy auth api for testing purposes.

### Endpoints:

- `/` - Root endpoint for testing the app is running.
- `/auth/login` - Login with email and password to get token
- `/auth/user` - Get user info with token
- `/protected` - Get protected data with token

### POST /auth/login

```
=> payload
{
    "email": "example@example.com",
    "password": "password"
}

=> Response: 200 OK
{
    "message": "Login Successful",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWM5MDRmYjc0NzU1MTdhYWQzOTA2MzAiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJhdmF0YXIiOiJodHRwczovL2F2YXRhcnMuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3UvNzYxMTc0Nj92PTQiLCJpYXQiOjE2NTg1ODc0NDl9.8OAg1IeWRbHkF_3xKmJo6JKEkxXZ6gRwmqCB1ZtJYKE"
}

=> Response: 401 Unauthorized
{
    "message": "Invalid credentials"
}
```

## Installation

```bash
npm install
npm run dev

// -> serve: http://localhost:5000
```

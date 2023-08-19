# Google OAuth Consent URL Generator

This project is a simple Express application that generates a Google OAuth consent URL. When the user grants consent, an authorization code is sent to the specified callback URL.

## Getting Started

### Prerequisites

- Node.js
- npm
- A registered application in the [Google Cloud Console](https://console.cloud.google.com/), with the OAuth consent screen configured.

### Usage

1. Start the server by running the application.
2. The Google consent URL will be printed to the console.
3. Navigate to the printed URL in your browser to access the Google consent page.
4. Grant consent, and the authorization code will be sent to `http://localhost:3000`.
5. The server will log the authorization code to the console and respond with "Code sent."


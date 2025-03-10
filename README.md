# Storify - Cloud Storage App

Storify is a modern cloud storage application built to provide seamless, secure file management and sharing. With its intuitive user interface and powerful backend, Storify allows users to store, organize, and share their files across devices with ease.

## Tech Stack

- **Frontend**: React, Next.js
- **Backend**: Appwrite (for authentication, storage, and database management)
- **Styling**: Tailwind CSS

## Features

- **User Authentication**: Secure login and registration using Appwrite's authentication system.
- **File Management**: Upload, organize, and manage files easily with cloud storage.
- **Sharing**: Securely share files with others via links.
- **Cross-Platform Support**: Access your files from desktop, mobile, or tablet, synchronized across all devices.

## Installation

### Prerequisites

Make sure you have the following installed:

- Node.js (version >= 14.x)
- npm or yarn
- Appwrite account (to connect backend)

### Steps to Set Up

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/storify.git
   cd storify
   ```

2. **Install Dependencies**

   Install all the required dependencies for the frontend:

   ```bash
   npm install
   ```

   Or if you use Yarn:

   ```bash
   yarn install
   ```

3. **Set Up Appwrite**

   - Create an account on [Appwrite](https://appwrite.io).
   - Set up a new project in your Appwrite console.
   - Create necessary collections (for user data, files, etc.).
   - Note your **Appwrite endpoint** and **Project ID**.
   
4. **Configure Appwrite**

   Create a `.env.local` file in the root of your project and add your Appwrite credentials:

   ```bash
   NEXT_PUBLIC_APPWRITE_ENDPOINT=<your_appwrite_endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your_project_id>
   ```

5. **Run the Development Server**

   Once everything is set up, you can run the development server:

   ```bash
   npm run dev
   ```

   Or with Yarn:

   ```bash
   yarn dev
   ```

   The app should now be running on [http://localhost:3000](http://localhost:3000).

## Deployment

You can deploy the app to various platforms such as Vercel, Netlify, or your preferred hosting provider. Simply follow the respective platform’s deployment instructions and make sure to set your environment variables.

### Vercel Deployment

1. Push your project to GitHub.
2. Go to [Vercel](https://vercel.com) and sign in with your GitHub account.
3. Import the project and deploy.
4. Add your environment variables (`NEXT_PUBLIC_APPWRITE_ENDPOINT` and `NEXT_PUBLIC_APPWRITE_PROJECT_ID`) in Vercel's settings.

## Technologies Used

- **React**: For building the interactive UI.
- **Next.js**: Server-side rendering and routing.
- **Appwrite**: Provides cloud backend services for authentication, file storage, and databases.
- **Tailwind CSS**: Utility-first CSS framework for styling the app's UI.

## Contributing

We welcome contributions! If you have ideas, bug fixes, or feature requests, feel free to fork the repository and create a pull request. Please ensure that your code adheres to our coding style and includes necessary tests.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-branch`.
5. Create a pull request.

## License

Distributed under the MIT License. See `LICENSE` for more information.

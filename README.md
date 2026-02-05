# Phulkeshwar Mahto - Portfolio

A modern, responsive, and full-stack portfolio website built with the MERN stack (MongoDB, Express, React, Node.js). This project showcases my skills, projects, and professional background with a sleek, dark-mode-enabled interface.

## 🚀 Features

*   **Responsive Design**: Fully adaptive UI for mobile, tablet, and desktop devices.
*   **Global Dark Mode**: Integrated dark/light theme with persistent preference.
*   **Dynamic Content**: Admin dashboard to manage Projects and Skills dynamically.
*   **Interactive UI**: 3D Star Field background (Three.js), smooth transitions, and glassmorphism effects.
*   **Secure Admin Area**: Protected routes for content management (CRUD operations).
*   **Contact Form**: Functional contact form with message management in the dashboard.

## 🛠️ Tech Stack

### Frontend
*   **React (Vite)**: Fast and modern frontend framework.
*   **Tailwind CSS**: Utility-first styling for rapid and responsive design.
*   **React Router**: Seamless client-side routing.
*   **React Three Fiber / Drei**: 3D graphics and animations.
*   **React Icons**: Comprehensive icon library.
*   **Axios**: HTTP client for API requests.

### Backend
*   **Node.js & Express**: Robust server-side runtime and framework.
*   **MongoDB & Mongoose**: NoSQL database for flexible data storage.
*   **JWT (JSON Web Tokens)**: Secure authentication for the admin dashboard.

## 📂 Project Structure

```bash
MyPortfolio/
├── client/           # React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── pages/       # Route pages (Home, About, Skills, Dashboard...)
│   │   ├── context/     # Auth and Theme contexts
│   └── ...
├── server/           # Express Backend
│   ├── models/       # Mongoose Schemas (Project, Skill, Message)
│   ├── routes/       # API Routes
│   ├── controllers/  # Request handlers
│   └── ...
└── ...
```

## 🔧 Setup & Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install Dependencies**
    *   **Client**:
        ```bash
        cd client
        npm install
        ```
    *   **Server**:
        ```bash
        cd ../server
        npm install
        ```

3.  **Environment Variables**
    Create a `.env` file in the `server` directory with the following:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Run the Application**
    *   **Client** (Terminal 1):
        ```bash
        cd client
        npm run dev
        ```
    *   **Server** (Terminal 2):
        ```bash
        cd server
        npm run dev
        ```

5.  **Access the App**
    *   Frontend: `http://localhost:5173`
    *   Backend API: `http://localhost:5000`

## 🛡️ Admin Access
To access the dashboard, navigate to `/login`. You will need to create an initial admin user directly in the database or via a registration endpoint (if enabled during development).

## 📄 License
This project is open source and available under the [MIT License](LICENSE).

---
*Built with ❤️ by Phulkeshwar Mahto*

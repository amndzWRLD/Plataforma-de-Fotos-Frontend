import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegistroForm from "./components/RegistroForm";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistroForm />} />
          <Route path="/" element={<h1>Bienvenido a la Plataforma</h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

// src/App.jsx
export default function App() {
  return (
    <div>
      <h1>Frontend funcionando ✅</h1>
    </div>
  );
}


import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import ProfilePage from "./pages/ProfilePage";
import { ProtectedRoute } from "./ProtectedRoute";
import { Navbar } from "./components/navbar";
import { Profesores } from "./pages/Profesores";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profe" element={<Profesores />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

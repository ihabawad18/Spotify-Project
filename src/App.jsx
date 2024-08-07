import "./App.css";
import AuthRoutes from "./routes/authRoutes";
import { Routes, Route, Navigate } from "react-router-dom";
import UserRoutes from "./routes/userRoutes";

function App() {
  return (
    <>
      <Routes>
        {AuthRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        {UserRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;

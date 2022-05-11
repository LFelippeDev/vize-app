import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Auth } from './pages/Auth';
import { Register } from './pages/Register';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles/themes';
import './styles/App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './hooks/useProtectedRoute';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Register />} />
          <Route path="/users" element={<ProtectedRoute />} />
          <Route path="*" element={<Auth />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

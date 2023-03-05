import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import Features from './components/Features';
import Pricing from './components/Pricing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// npx browserslist@latest --update-db
function App() {
  const [theme, setTheme] = useState({ bg: "dark", text: "light" });
  const [alert, setAlert] = useState(null);

  const showAlert = (type, msg) => {
    setAlert({ type, msg })
    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  const toggleTheme = () => {
    if (theme.bg === "dark") {
      setTheme({ bg: "light", text: "dark" });
      document.body.classList.replace("bg-dark", "bg-light")
      showAlert("success", "Light mode has been enabled")
    }
    else {
      setTheme({ bg: "dark", text: "light" });
      document.body.classList.replace("bg-light", "bg-dark")
      showAlert("success", "Dark mode has been enabled")
    }
  }

  return (
    <>
      <Router>
        <NavBar theme={theme} toggleTheme={toggleTheme} alert={alert} />
        <Alert alert={alert} />
        <Routes>
          <Route path='/*' element={<TextForm theme={theme} alert={alert} showAlert={showAlert} />} />
          <Route path="/features" element={<Features title="Features" theme={theme} alert={alert} />} />
          <Route path="/pricing" element={<Pricing title="Pricing" theme={theme} alert={alert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

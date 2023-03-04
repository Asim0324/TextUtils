import { useState } from "react";

export default function Javascript() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = (cls) => {
    removeAllClasses();
    document.body.classList.add('bg-' + cls);
    if (theme === false) {
      setTheme(true);
      document.body.style.backgroundColor = "rgb(212, 205, 141)";
      toggleAlert("Light Theme has been enabled", "success");
    } else {
      setTheme(false);
      document.body.style.backgroundColor = "#02142e";
      toggleAlert("Dark Theme has been enabled", "success");
    }
  };
  const removeAllClasses = ()=>{
    document.body.classList.remove('bg-primary');
  };

  const [alert, setAlert] = useState(null);
  const toggleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 800);
  };

  return { theme, toggleTheme, alert, toggleAlert };
}
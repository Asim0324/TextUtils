import { useState } from "react";

export default function Javascript() {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    if (theme === false) {
      setTheme(true);
      document.body.style.backgroundColor = "lemonchiffon";
      toggleAlert("Light Theme has been enabled", "success");
    } else {
      setTheme(false);
      document.body.style.backgroundColor = "#262234";
      toggleAlert("Dark Theme has been enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const toggleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1200);
  };

  return { theme, toggleTheme, alert, toggleAlert };
}

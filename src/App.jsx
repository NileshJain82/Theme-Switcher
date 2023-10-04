import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/Theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

export default function App() {
  
  const [theme, setTheme] = useState('light');
  const [background, setBackground] = useState('#FFFFFF');

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light')

    document.querySelector('html').classList.add(theme)
    document.querySelector('body').style.backgroundColor = background
  },[theme,background])
  return (
    <ThemeProvider value={{ theme, background,setTheme,setBackground }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

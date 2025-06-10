import { useEffect, useState } from "react";
import { Box } from "./box";
import { ThemeToggle } from "./ThemeSwitcher";
import { useTheme } from "next-themes";

function Time() {
    const {theme} = useTheme()
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const Interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(Interval);
    };
  }, [time]);

  function GetTime() {
    const hour = time.getHours();
    const minutes = time.getMinutes();

    // Pad hour and minutes with leading zeros
    const paddedHour = hour.toString().padStart(2, "0");
    const paddedMinutes = minutes.toString().padStart(2, "0");

    return `${paddedHour}:${paddedMinutes}`;
  }

  return (
    <Box>
      <ThemeToggle>
        <div className="flex items-center justify-center w-[24px] h-[24px] relative">
          <img src="/Sun.png" alt="" />
        </div>
      </ThemeToggle>
      <span className={`p-3.5  ${
        theme === "dark" ? "text-stone-800" : "text-white"
      }`}>{GetTime()}</span>
    </Box>
  );
}

export default Time;

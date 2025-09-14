"use client";

import { MoonIcon, SunIcon } from "@/component/icons";
import { Button } from "@/component/ui/button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="relative rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {/* Sun icon */}
      <SunIcon
        className="h-5 w-5 transition-all duration-300 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"
      />

      {/* Moon icon */}
      <MoonIcon
        className="absolute h-5 w-5 transition-all duration-300 rotate-90 scale-0 dark:rotate-0 dark:scale-100"
      />
    </Button>
  );
}

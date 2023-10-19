"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="mx-auto"
    >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}

function testToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
      className="mx-auto"
    >
      <a href="#">
        <p>{theme === "dark" ? "Light" : "Dark"}</p>
      </a>
    </div>
  );
}

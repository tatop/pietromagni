"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import useScroll from "@/lib/use-scroll";

interface Props {
  title?: string;
}

export function Navbar({ title }: Props) {
  const scrolled = useScroll(100);

  return (
    <div
      className={`flex flex-row items-center text-transparent justify-between px-2 py-2 mb-5 bg-gray-600/10 backdrop-blur-md rounded-xl
    ${
      scrolled
        ? "md:fixed top-5 w-3/5 items-center md:text-white mx-auto left-0 right-0 z-50"
        : ""
    }`}
    >
      <div className="flex flex-row items-center gap-2">
        <Link href={"/"}>
          <Avatar>
            <AvatarImage src="/icon.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
        {title ? (
          <div className="flex flex-col">
            <h1 className="text-md font-bold">{title}</h1>
          </div>
        ) : null}
      </div>
      <div>
        <div className="flex flex-row gap-3 items-center">
          <Link href={"/about"}>
            <Button variant="secondary" size="icon" className="rounded-xl">
              <PersonIcon />
            </Button>
          </Link>
          <Link href={"/blog"}>
            <Button variant={"secondary"} size="icon" className="rounded-xl">
              <ChatBubbleIcon />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

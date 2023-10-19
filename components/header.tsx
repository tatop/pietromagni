import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Headear() {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between w-full">
      <div className="flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src="./icon.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-md font-bold">0x23u</h1>
          <p className="text-sm text-gray-500">Engeneering student</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Link href={"/"}>
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
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import { ChatBubbleIcon, PersonIcon } from "@radix-ui/react-icons";

export default function Headear() {
  return (
    <div className="flex flex-row items-center justify-between w-full">
      <div className="flex flex-row gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h1 className="text-md font-bold">Pietro Magni</h1>
          <p className="text-sm text-gray-500">Engeneering student</p>
        </div>
      </div>
      <div className="flex flex-row gap-3 items-center">
        <Button variant="secondary" size="icon">
          <PersonIcon />
        </Button>
        <Button variant={"secondary"} size="icon">
          <ChatBubbleIcon />
        </Button>
      </div>
    </div>
  );
}

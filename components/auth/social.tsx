"use client";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="flex items-center gap-x-2 w-full">
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
        size={"lg"}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
        size={"lg"}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default Social;

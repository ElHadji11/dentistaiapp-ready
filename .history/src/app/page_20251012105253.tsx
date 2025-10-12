import { Button } from "@/components/ui/button";
import { SignIn, SignInButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <Button >
        Clis
      </Button>
      <SignInButton mode="modal" />
    </div>
  );
}


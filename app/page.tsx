import LoginButton from "@/components/auth/login-btn";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full justify-center items-center flex-col bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#22c1c3] to-[#fdbb2d]">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-bold drop-shadow-md text-white",
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">A simple Authentication services</p>
        <div>
          <LoginButton>
            <Button variant={"secondary"} size={"lg"}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}

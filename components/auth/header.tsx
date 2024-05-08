import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

type Props = {
  label: string;
};

const font = Poppins({
    weight: ["600"],
    subsets: ["latin"],
})
const Header = ({ label }: Props) => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-4">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐 Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;

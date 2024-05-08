import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  href: string;
  label: string;
};
const BackButton = ({ label, href }: Props) => {
  return (
    <Button variant={"link"} size={"sm"} className="font-normal w-full">
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;

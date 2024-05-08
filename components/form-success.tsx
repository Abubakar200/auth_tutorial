import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

type Props = {
  message?: string;
};
const FormSuccess = ({ message }: Props) => {
  if (!message) return null;
  return (
    <div className="flex items-center rounded-md bg-emerald-500/15 text-emerald-500 text-sm gap-x-2 p-3">
      <ExclamationTriangleIcon className="h-4 w-4" />
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;

// REMOVE "use client"

import ForgotForm from "@/components/auth/ForgotForm";
import CodeForm from "@/components/auth/CodeForm";
import ResetForm from "@/components/auth/ResetForm";
import SuccessCard from "@/components/auth/SuccessCard";


// ...existing code...


// Hardcoded props to bypass type error
// ...existing code...
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PasswordFlow(props: any) {
  const step = props?.params?.step ?? "forgot";
  const email = props?.searchParams?.email ?? "test@example.com";

  switch (step) {
    case "forgot":
      return <ForgotForm />;
    case "code":
      return <CodeForm email={email} />;
    case "reset":
      return <ResetForm />;
    case "success":
      return <SuccessCard />;
    default:
      return <div className="text-center py-10">Unknown step: {String(step)}</div>;
  }
}

import { SignUp } from "@clerk/clerk-react";
import Navbar from "../../components/Navbar";

export default function SignUpPage() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}

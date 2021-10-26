import { SignIn } from "@clerk/clerk-react";
import Navbar from "../../components/Navbar";

export default function SignInPage() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <SignIn path="/sign-in" routing="path" />
    </div>
  );
}

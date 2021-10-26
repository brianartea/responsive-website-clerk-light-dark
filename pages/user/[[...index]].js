import { UserProfile } from "@clerk/clerk-react";
import Navbar from "../../components/Navbar";

export default function UserProfilePage() {
  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <UserProfile path="/user" routing="path" />
    </div>
  );
}

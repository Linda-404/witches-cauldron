import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  const handleSignin = (e) => {
    e.preventDefault();
    signIn("github", { callbackUrl: "http://localhost:3000/admin" });
  };

  const handleSignout = (e) => {
    e.preventDefault();
    signOut({ callbackUrl: "http://localhost:3000/" });
  };

  return (
    <div className="login">
      {session && (
        <a href="#" onClick={handleSignout} className="link">
          Log out
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignin} className="link">
          Log in
        </a>
      )}
    </div>
  );
}

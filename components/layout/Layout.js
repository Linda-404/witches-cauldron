import Link from "next/link";
import { useRouter } from "next/router";
import Login from "../Login";
import { useSession } from "next-auth/react";
import Nav from "../Nav";

export default function Layout({ children }) {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <Nav />

      <div className="container">{children}</div>
    </>
  );
}

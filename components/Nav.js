import Link from "next/link";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Login from "./Login";

export default function Nav() {
  const router = useRouter();
  //   const { data: session } = useSession();

  return (
    <nav>
      <ul>
        <li className={router.pathname == "/" ? "active" : ""}>
          <Link href="/" className="link">
            Home
          </Link>
        </li>
        <li className={router.pathname == "/contact" ? "active" : ""}>
          <Link href="/contact" className="link">
            Contact
          </Link>
        </li>
        <li className={router.pathname == "/favorites" ? "active" : ""}>
          <Link href="/favorites" className="link">
            Favorites
          </Link>
        </li>
        {/* {session && (
          <li className={router.pathname == "/admin" ? "active" : ""}>
            <Link href="/admin">Admin</Link>
          </li>
        )} */}
      </ul>
      {/* <Login /> */}
    </nav>
  );
}

import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import { useSession } from "next-auth/react";

export default function Admin() {
  const { data: session } = useSession();

  return (
    <Layout>
      <Head title="Admin" />

      {session && (
        <div className="container">
          <Heading title="Admin page" />
        </div>
      )}
      {!session && (
        <div className="container">
          <Heading title="Admin page" />
          <h2>Access denied, please try log in</h2>
        </div>
      )}
    </Layout>
  );
}

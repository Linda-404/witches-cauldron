import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";

export default function Login() {
  return (
    <Layout>
      <Head title="Login" />

      <div className="container">
        <Heading title="Log in" />
      </div>
    </Layout>
  );
}

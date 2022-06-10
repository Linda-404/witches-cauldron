import Head from "../components/layout/Head";
import Layout from "../components/layout/Layout";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";

export default function contact() {
  return (
    <Layout>
      <Head title="contact" />

      <div className="container">
        <Heading title="Contact us" />
        <ContactForm />
      </div>
    </Layout>
  );
}

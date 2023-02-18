import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { Intro } from "../components/intro/intro";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro />
        <p>Main</p>
      </Layout>
    </>
  );
}

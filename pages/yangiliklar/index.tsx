import { Intro } from "../../components/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";

export default function YangiliklarPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant={"primary"} location={"Yangiliklar"} />
      </Layout>
    </>
  );
}

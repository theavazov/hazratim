import { Intro } from "../../components/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";

export default function MerosPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant={"primary"} location={"Meros"} />
      </Layout>
    </>
  );
}

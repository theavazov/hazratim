import { Intro } from "../../components/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";

export default function TarjimaiholPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant={"primary"} location={"Tarjimai holi"} />
      </Layout>
    </>
  );
}

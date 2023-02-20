import { Intro } from "../../components/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";

export default function MerosPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro
          variant={"secondary"}
          description={
            "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir. U Oʻzbekistondagi eng koʻp kitob yozadigan ulamolardan biri edi"
          }
          parent={{ title: "Meros", path: "/meros" }}
          location={"Kitoblar"}
        />
      </Layout>
    </>
  );
}

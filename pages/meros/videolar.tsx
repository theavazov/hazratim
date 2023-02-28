import { CustomHead } from "../../components/utils/head";
import { Intro } from "../../components/utils/intro/intro";
import { Layout } from "../../components/utils/layout";

export default function KitoblarPage() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro
          variant="secondary"
          location={"Videolar"}
          description={
            "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir. U Oʻzbekistondagi eng koʻp kitob yozadigan ulamolardan biri edi"
          }
          parent={{ title: "Meros", path: "/meros" }}
        />
      </Layout>
    </>
  );
}

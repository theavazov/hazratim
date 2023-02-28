import { CustomHead } from "../../components/utils/head";
import { Intro } from "../../components/utils/intro/intro";
import { Layout } from "../../components/utils/layout";

export default function TalimMaskanlari() {
  return (
    <>
      <CustomHead />
      <Layout>
        <Intro
          variant="secondary"
          location={"Ta’lim maskanlari"}
          description={
            "Nunc ornare risus ultrices velit. Ultrices sodales vel, magna id condimentum tortor, tempor, sed. Tellus turpis dui sociis massa pharetra, pharetra. Varius id commodo nulla habitant orci nisi quis. Felis iaculis."
          }
          parent={{ title: "Tarjimai holi", path: "/tarjimaihol" }}
        />
      </Layout>
    </>
  );
}

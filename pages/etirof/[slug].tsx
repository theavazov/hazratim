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
            "Nunc ornare risus ultrices velit. Ultrices sodales vel, magna id condimentum tortor, tempor, sed. Tellus turpis dui sociis massa pharetra, pharetra. Varius id commodo nulla habitant orci nisi quis. Felis iaculis."
          }
          parent={{ title: "E’tirof", path: "/etirof" }}
          location={"Ulamolarning fikrlari"}
        />
      </Layout>
    </>
  );
}

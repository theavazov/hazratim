import { MainHero } from "../components/home/hero/hero";
import { CustomHead } from "../components/utils/head";
import { Layout } from "../components/utils/layout";
import { SectionInfo } from "../components/utils/sectioninfo/sectioninfo";

export default function Home() {
  return (
    <>
      <CustomHead />
      <Layout>
        {/* <div className="box hero">
          <p className="t">SHAYX MUHAMMAD SODIQ MUHAMMAD YUSUF</p>
        </div> */}
        <MainHero />
        <section className="section">
          <div className="box section_inner">
            <SectionInfo
              title={"Kitoblar"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus amet quis scelerisque at"
              }
              path="/meros/kitoblar"
            />
          </div>
        </section>
      </Layout>
    </>
  );
}

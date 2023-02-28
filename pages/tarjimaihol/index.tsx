import { Intro } from "../../components/utils/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { ParentCard } from "../../components/universal/card/card";

export default function TarjimaiholPage() {
  const contents = [
    {
      title: "Ustozlari",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "ustozlari",
      parentSlug: "tarjimaihol",
    },
    {
      title: "Ta’lim maskanlari",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "talim-maskanlari",
      parentSlug: "tarjimaihol",
    },
  ];

  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant={"primary"} location={"Tarjimai holi"} />
        <section className="main_section">
          <div className="box card_container">
            {contents.map((content: any, i: number) => {
              return <ParentCard key={i} content={content} />;
            })}
          </div>
        </section>
      </Layout>
    </>
  );
}

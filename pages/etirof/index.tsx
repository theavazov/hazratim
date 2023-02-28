import { Intro } from "../../components/utils/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { ParentCard } from "../../components/universal/card/card";

export default function EtirofPage() {
  const contents = [
    {
      title: "Ulamolarning fikrlari",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "ulamolarning-fikrlari",
      parentSlug: "etirof",
    },
    {
      title: "Sovrinlar",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "sovrinlar",
      parentSlug: "etirof",
    },
    {
      title: "Ilmiy ishlar",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "ilmiy-ishlar",
      parentSlug: "etirof",
    },
    {
      title: "A'zo tashkilotlari",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "azo-tashkilotlari",
      parentSlug: "etirof",
    },
    {
      title: "Anjumanlardagi ishtiroklari",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "anjumanlardagi-ishtiroklari",
      parentSlug: "etirof",
    },
    {
      title: "Masjidlar",
      desc: "Turpis urna vestibulum egestas condimentum. Elit ac sed et felis, est etiam ullamcorper. Velit morbi magna nibh dolor. Laoreet sed consur...",
      icon: "",
      slug: "masjidlar",
      parentSlug: "etirof",
    },
  ];

  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant={"primary"} location={"E’tirof"} />
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

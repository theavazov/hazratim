import { Intro } from "../../components/utils/intro/intro";
import { CustomHead } from "../../components/utils/head";
import { Layout } from "../../components/utils/layout";
import { ParentCard } from "../../components/universal/card/card";

export default function MerosPage() {
  const contents = [
    {
      title: "Kitoblar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "kitoblar",
      parentSlug: "meros",
    },
    {
      title: "Audiolar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "audiolar",
      parentSlug: "meros",
    },
    {
      title: "Videolar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "videolar",
      parentSlug: "meros",
    },
    {
      title: "Fotolar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "fotolar",
      parentSlug: "meros",
    },
    {
      title: "Maqolalar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "maqolalar",
      parentSlug: "meros",
    },
    {
      title: "Loyihalar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "loyihalar",
      parentSlug: "meros",
    },
    {
      title: "Fatvolar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "fatvolar",
      parentSlug: "meros",
    },
    {
      title: "Shogirdlar",
      desc: "Shayx Muhammad Sodiq Muhammad Yusuf kitoblari mazmuni jihatidan asosan diniy adabiyotlar majmuasidir.",
      icon: "",
      slug: "shogirdlar",
      parentSlug: "meros",
    },
  ];

  return (
    <>
      <CustomHead />
      <Layout>
        <Intro variant="primary" location={"Meros"} />
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

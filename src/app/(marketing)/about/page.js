import PageHeader from "@/components/about/PageHeader"
import WhoWeAre from "@/components/about/WhoWeAre";
import { aboutData } from "@/data/AboutData"


export const metadata = {
  title: "About Us",

  description:
    "Learn about VN Prime Capital, our mission, values, and commitment to helping businesses and professionals access trusted financing solutions across India.",
};
const AboutPage = () => {
  return (
    <main className="bg-red-500">
      <PageHeader
        badge={aboutData.hero.badge}
        title={aboutData.hero.title}
        description={aboutData.hero.description}
      />
      <WhoWeAre
        title={aboutData.whoWeAre.title}
        paragraphs={aboutData.whoWeAre.paragraphs}
        stats={aboutData.stats}
      />
    </main>
  );
}
export default AboutPage
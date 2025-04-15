import FAQ from "@/components/page-components/services/faq/FAQ";
import ServiceHero from "@/components/page-components/services/hero/ServiceHero";
import OnlineConsultation from "@/components/page-components/services/online-consultation/OnlineConsultation";
import OurServices from "@/components/page-components/services/our-services/OurServices";
import LearnMore from "@/components/page-components/services/service-context/LearnMore";
import ServiceContext from "@/components/page-components/services/service-context/ServiceContext";
import React from "react";

export default function page() {
  return (
    <main>
      <div>
        <ServiceHero />
        <OurServices />
        <ServiceContext />
        <LearnMore />
        <OnlineConsultation />
        <FAQ />
      </div>
    </main>
  );
}

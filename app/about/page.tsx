import FounderSection from "@/components/page-components/about/leadership/FounderSection";
import OurMissionVision from "@/components/page-components/about/mission-vision/OurMissionVision";
import OurTeam from "@/components/page-components/about/our-team/OurTeam";
import WhoWeAre from "@/components/page-components/about/whoweare/WhoWeAre";

export default function AboutUs() {
  return (
    <main>
      <div className={`about`}>
        <div className={`about-hero`}>
          <div>
            <h1>Welcome to Dr. Reach</h1>
            <p>Revolutionizing healthcare management for a better tomorrow</p>
          </div>
        </div>
      </div>
      {/* stacked about components */}
      <div>
        <WhoWeAre />
        <OurMissionVision />
        <FounderSection />
        <OurTeam />
      </div>
    </main>
  );
}

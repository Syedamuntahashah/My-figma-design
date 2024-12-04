import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkManagment from "@/components/WorkManagement";
import Work from "@/components/Work";
import YourNeeds from "@/components/YourNeeds";
import Needs from "@/components/Needs";
import YourWork from "@/components/YourWork";
import OurSponsors from "@/components/OurSponsors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WorkManagment />
      <Work />
      <YourNeeds />
      <Needs />
      <YourWork />
      <OurSponsors />
      <Footer />
    </div>
  );
}

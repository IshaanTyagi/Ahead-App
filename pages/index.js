import Navbar from '../components/Navbar/Navbar';
import About from '../components/About/About';
import Hero from '../components/Hero/Hero';
import GetStarted from '../components/GetStarted/GetStarted';
import WhatsNew from '../components/WhatsNew/WhatsNew';
import Insights from '../components/Insights/Insights';
import OpenVac from '../components/OpenVac/OpenVac';
import Footer from '../components/Footer/Footer';

const Page = () => (
  <div className="bg-white overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"></div>
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0"></div>
      <WhatsNew />
    </div>
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0"></div>
    </div>
    <OpenVac />
    <Footer />
  </div>
);

export default Page;

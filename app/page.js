/* eslint-disable react/self-closing-comp */
import { Navbar } from '../components';
import { About, GetStarted, Hero, WhatsNew, Insights } from '../sections';

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
    <Insights />
  </div>
);

export default Page;

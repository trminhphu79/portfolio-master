import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LogoMe from '/public/images/logos/me.jpg';
import DownloadCV from '@/components/general/DownloadCV';
import { UserRoundCheck } from 'lucide-react';

const SUMMARY = `I am a Frontend Engineer with nearly 4 years of experience in web development. Driven by a passion for
continuous learning and improvement, I actively stay updated on the latest industry trends.
My goal is to leverage my technical expertise to develop innovative solutions that meet the ever-changing
demands of the tech landscape`;

const TITLE = `Hi, I'm Phu`

const AboutSection = () => {
  return (
    <Container id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16">
        <div className="order-2 md:order-1 col-span-2">
          <h1 className="font-bold text-3xl pb-5 text-center md:text-left">{TITLE}</h1>
          <p className="text-center md:text-left">{SUMMARY}</p>
          <br />
          <div className="w-full flex justify-center md:block ">
            <DownloadCV className="z-1" />
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 mb-3 w-full">
          <div className="flex justify-center mb-3 h-52 w-52 m-auto rounded-full bg-gray-300 bg-opacity-50">
            <ImageWrapper
              src={LogoMe}
              alt="Trần Minh Phú"
              className="transition-transform duration-300 md:hover:scale-110 rounded-full object-cover w-full h-full"
            />
          </div>
          {/* <div className="flex justify-center items-center gap-2"><UserRoundCheck /><span className="text-lg">2000</span></div> */}
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;

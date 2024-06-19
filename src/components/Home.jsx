import { background, curve, headshot, headshotnew, homeBackground } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Home";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import ChatBubbleWing from "./../assets/svg/ChatBubbleWing";
import {TechStackLogos} from "./TechStackLogos";
// import { CompanyLogos } from "./CompanyLogos";

const Home = () => {
  const parallaxRef = useRef(null);
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] pb-10"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="home"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-10 lg:mb-[5rem]">
          <h1 className="h1 mb-6">
            Welcome to my website! My&nbsp;name is&nbsp;Phoebe and&nbsp;I&nbsp;am&nbsp;a{"\n"}{` `}
            <span className="inline-block relative">
                Software Developer{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto text-n-2 pt-7">
            Please check out my projects, skills and experience below.
          </p>
          {/* <Button href="#projects">
            See More!
          </Button> */}
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={headshotnew}
                  // className="w-full scale-[1] translate-y-[8%] md:scale-[0.7] lg:scale-[0.5] xl:scale-[0.5] md:-translate-y-[15%] lg:-translate-y-[26%]"
                  className="w-full scale-[2.3] translate-y-[20%] md:scale-[1.25] lg:scale-[1] xl:scale-[1] md:-translate-y-[5%] lg:-translate-y-[26%]"
                  width={524}
                  height={490}
                  alt="headshot"
                />

                {/* <ScrollParallax isAbsolutelyPositioned>
                    <div className="hidden sm:absolute xl:-left-[3.5rem] lg:-left-[3.5rem] md:-left-[2.5rem] sm:-left-[8rem] md:bottom-[12rem] bottom-[17rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex-1 sm:flex">
                        <p className="mb-1 mt-1 font-semibold text-base max-w-40 mx-auto text-center">
                        I create products to solve real world problems, from ideas to development and deployment.
                        </p>
                    </div>
                </ScrollParallax> */}

                {/* <ScrollParallax isAbsolutelyPositioned>
                    <div className="hidden sm:absolute xl:-right-[3.5rem] lg:-right-[5.5rem] md:-right-[2.5rem] sm:-right-[8rem] md:bottom-[10rem] bottom-[15rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl flex-1 sm:flex">
                        <p className="mb-1 mt-1 font-semibold text-base max-w-40 mx-auto text-center">
                        My goal is to be a part of a great team of people who produce creative and intelligent solutions using coding and software.
                        </p>
                    </div>
                </ScrollParallax> */}
                <ScrollParallax isAbsolutelyPositioned>
                  <div className="absolute sm:block hidden xl:right-4 lg:right-4 md:right-5 sm:-right-[9rem] md:bottom-[10rem] bottom-[6rem] xl:max-w-56 lg:max-w-52 md:max-w-48 sm:max-w-44 pr-4 py-3 pl-5 lg:pr-5 lg:py-6 lg:pl-8 bg-n-6 bg-opacity-90 lg:rounded-t-xl lg:rounded-br-xl rounded-t-lg rounded-br-lg font-code text-base">
                  My goal is to be a part of a great team of people who produce creative and intelligent solutions using coding and software.
                    <ChatBubbleWing className="sm:absolute right-full bottom-0 -scale-x-100" colour="#252134"/>
                  </div>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <div className="absolute sm:block hidden xl:left-4 lg:left-4 md:left-5 sm:-left-[9rem] md:bottom-[10rem] bottom-[6rem] xl:max-w-56 lg:max-w-52 md:max-w-48 sm:max-w-44 pr-3 py-3 pl-5 lg:pr-5 lg:py-6 lg:pl-8 bg-n-6 bg-opacity-90 lg:rounded-t-xl lg:rounded-bl-xl rounded-t-lg rounded-bl-lg font-code text-base">
                  I create products to solve real world problems, from ideas to development and deployment.
                    <ChatBubbleWing className="sm:absolute left-full bottom-0 " colour="#252134"/>
                </div>
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <img
              src={homeBackground}
              className="w-full"
              width={1440}
              height={1800}
              alt="home"
            />
          </div>
          <BackgroundCircles />
        </div>
        {/* <CompanyLogos className="relative z-10 mt-20 block" /> */}
        <TechStackLogos className="relative z-10 mt-20 block" />

      </div>

      {/* <BottomLine /> */}
    </Section>
  );
};

export default Home;
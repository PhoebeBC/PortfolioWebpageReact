import Heading from "./Heading";
import Section from "./Section";
import { about } from "../constants/index.jsx";
import { grid } from "../assets/index.jsx";
import { GradientLightRT} from "./design/GradientsRightTopAbout";
import { GradientLightLB } from './design/GradientsLeftBottomAbout';

const About = () => (
  <Section className="overflow-hidden" id="about">
    <div className="container md:py-10 lg:mt-0 lg:pt-0">
      <Heading title="More About Me" />

      <div className="relative lg:px-10 grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {about.map((item) => {
          return (
            <div
              className={`md:flex even:md:translate-y-[7rem] p-0.5 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  {/* <div className="flex items-center justify-between max-w-[30rem] -mb-8 md:-mb-15"> */}
                    <Heading cv={item.question}/>

                  <div className="-my-15 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={400}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h5 mt-10 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-3">{item.text}</p>
                </div>
              </div>
              {item.lightLeftBottom && <GradientLightLB/>}
              {item.lightRightTop && <GradientLightRT/>}
            </div>
          );
        })}
      </div>
    </div>
  </Section>
);

export default About;

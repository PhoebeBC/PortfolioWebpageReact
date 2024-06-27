import Section from "./Section";
import {stars} from "../assets/index.jsx";
import Heading from "./Heading";
import ExperienceList from "./ExperienceList";
import { LeftLine, RightLine } from "./design/Experience";
import { CV } from "../assets/index.jsx";
import { BottomLine } from './design/Experience';
import Button from "./Button";

const Experience = () => {
  return (
    <Section crosses id="experience" className="xl:pt-20">
      <div className="container relative">
        <div className="hidden relative justify-center mb-[6.5rem] md:flex">
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          title="Checkout My Experience"
        />

        <div className=" lg:min-h-96">
          <ExperienceList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="flex h-0 pb-10 justify-center mt-10">
          <a
            href={CV}
            download
          >
            <Button
            className="w-full mb-6 2xl:mt-10"
            href={CV}
            >
                <h5 className="h5 tracking-wider font-medium hover:text-[#0097eb]">
                    Download CV
                </h5>
            </Button>
          </a>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Experience;
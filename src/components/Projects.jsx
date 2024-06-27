import React from 'react';
import { projects } from "../constants/index.jsx";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { check2, loading1 } from "../assets/index.jsx";
import { GradientLightRT} from "./design/GradientsRightTop";
import { GradientLightLB } from './design/GradientsLeftBottom';
import ClipPath from "../assets/svg/ClipPath";
import { BottomLine } from './design/Projects';

const Projects = () => {
    const getIcons = (iconList) => {
        for (var icon of iconList) {
            <img
                src={icon}
                width={48}
                height={48}
                alt={"icon"}
            />
        }
    }
    return (
        <Section 
            id="projects"
            crosses>
            <div className="container relative z-2">
                <Heading
                className="md:max-w-md lg:max-w-2xl -mt-10"
                title="View My Projects Below"
                />
                <div className="flex flex-wrap gap-10 mb-10 justify-center w-full">
                    {projects.map((item) => (

                    <div
                        className="group block relative bg-no-repeat bg-[length:100%_100%] p-0.5 md:max-w-[24rem]"
                        style={{ 
                            backgroundImage: `url(${item.backgroundUrl})`,
                        }}
                        key={item.id}
                    >
                        <div
                        className="absolute inset-0.5 bg-n-8 opacity-0 transition-opacity group-hover:opacity-50"
                        style={{ clipPath: "url(#benefits)" }}
                    >
                            <div className="absolute inset-0">
                            {item.imageUrl && (
                                <img
                                src={item.imageUrl}
                                width={380}
                                height={362}
                                alt={item.title}
                                className="w-full h-full object-cover"
                                />
                            )}
                            </div>
                        </div>
                        
                        <div className="relative flex flex-col min-h-[22rem] px-[2.4rem] pt-[2.4rem] pb-[2rem]">
                            <h5 className="h5 mb-5">{item.title}</h5>
                            <div className="body-2 mb-6 text-n-3 group-hover:opacity-0">{item.text}</div>
                            <div className="flex items-center mt-auto ">
                            <div className='flex-wrap items-start group-hover:opacity-0'>
                            <img
                                src={item.iconUrl}
                                width={32}
                                height={32}
                                alt={item.title}
                                className='m-auto'
                            />
                            <p className='text-xs text-n-2 font-light'>{item.status}</p>
                            </div>
                            <a href={item.href} target="_blank" className="ml-auto font-code text-xs group-hover:text-base group-hover:underline font-bold text-n-1 uppercase tracking-wider">
                                    Explore more
                            </a>
                            <Arrow />
                            </div>
                        </div>
                    
                        {item.lightLeftBottom && <GradientLightLB/>}
                        {item.lightRightTop && <GradientLightRT/>}
                    
                    {/* sotps background image going over container boundry */}
                    <ClipPath />
                    </div>
                    
                ))}
                </div>
            </div>
          {/* <BottomLine /> */}
        </Section>
      );
    };

export default Projects

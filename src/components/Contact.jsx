import { contactsvg, check } from "../assets";
import { contactApps, contactContent, contactMessage } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Contact";

const Contact = () => {
  return (
    <Section crosses id="contact">
      <div className="container lg:flex">
            <div className="lg:max-w-[25rem]">
                <h2 className="h2 mb-4 md:mb-8">
                Want to know more about me or my projects? 
                </h2>  
                <h2 className="h1 mb-4 md:mb-8 tracking-wider">Get&nbsp;in&nbsp;touch!</h2>
          
                <ul className="lg:max-w-[25rem] mb-10">
                    {contactContent.map((item) => (
                    <li className="py-3 mb-3" key={item.id}>
                        <div className="flex items-centre">
                        <img src={check} width={24} height={24} alt="check" />
                        <h6 className="body-1 ml-5">{item.title}</h6>
                        </div>
                        {item.text && (
                        <p className="body-2 mt-3 text-n-4">{item.text}</p>
                        )}
                    </li>
                    ))}
                </ul>

                <Button className="">Let's Connect</Button>
            </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto lg:text-left text-center">
            {contactMessage}
          </p>
            
        {/* outer circle */}
          <div className="relative mt-52 left-1/2 flex w-[25rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            {/* Inner circle */}
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full bg-conic-gradient">
                {/* circle around conact icon bg-conic-gradient*/}
              <div className="w-[20rem] aspect-square m-auto p-[0.2rem] rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={contactsvg}
                    width={120}
                    height={120}
                    alt="contacts"
                  />
                </div>
              </div>
            </div>

            <ul>
              {contactApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[2.5rem] origin-bottom rotate-${
                    app.rotation * 45
                  }`}
                >
                  <div
                    className={`relative -top-[2.5rem] flex w-[5rem] h-[5rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      app.rotation * 45
                    }`} 
                  >
                    <a className="m-auto" href={app.url} target="_blank"><img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve className="mt-20"/>
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
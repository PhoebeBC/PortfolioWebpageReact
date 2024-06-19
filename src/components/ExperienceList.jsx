import { check } from "../assets";
import { experience } from "../constants";
import BulletPointSvg from "../assets/svg/BulletPointSvg";

const ExperienceList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {experience.map((item) => (
        <div
          key={item.id}
        //   even:py-14 odd:py-8 odd:my-4
          className="max-lg:w-full min-w-80 xl:h-auto h-full px-6 bg-n-7 z-2 border border-n-6 rounded-[2rem] py-8 [&>h4]:first:text-color-4 [&>h4]:even:text-color-7 [&>h4]:last:text-color-1"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.location}
          </p>

          {/* <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            //!! means not so below means white if item.price is flase
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button> */}

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-5"
              >
                <img src={item.check} width={24} height={24} alt="Check" />
                {/* <BulletPointSvg colour={item.check} /> */}
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
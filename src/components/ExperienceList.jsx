import { check } from "../assets/index.jsx";
import { experience } from "../constants/index.jsx";
import BulletPointSvg from "../assets/svg/BulletPointSvg";

const ExperienceList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap lg:px-5">
      {experience.map((item) => (
        <div
          key={item.id}
        //   even:py-14 odd:py-8 odd:my-4
          className="max-lg:w-full min-w-72 xl:first:min-w-80 lg:first:min-w-64 xl:h-auto h-full px-6 bg-n-7 z-2 border border-n-6 rounded-[2rem] py-8 [&>h4]:first:text-color-4 [&>h4]:even:text-color-7 [&>h4]:last:text-color-1"
        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <ul className="lg:min-h-[4rem] mb-3 xl:-mr-2">
            {item.location.map((feature, index) => (
              <li
                key={index}
              >
                <p className="body-2 text-n-1/50">{feature}</p>
              </li>
            ))}
          </ul>
          {/* <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.location}
          </p> */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-5"
              >
                <img src={item.check} width={24} height={24} alt="Check" />
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
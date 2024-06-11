import {
    accountsformatter,
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    email,
    facebook,
    figma,
    file02,
    flask, 
    framer,
    github, 
    homeSmile,
    html,
    instagram,
    javascript,
    keras,
    linkedin,
    location,
    nodejs,
    notification2,
    notification3,
    notification4,
    notion,
    pandas,
    photoshop,
    phone,
    plusSquare,
    postgresql,
    protopie,
    python,
    raindrop,
    react,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    salarycalculator,
    searchMd,
    slack,
    sliders04,
    storm,
    sqlite,
    tailwind,
    telegram,
    twitter,
    whatsapp,
    yourlogo,
  } from "../../src/assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Home",
      url: "#home",
    },
    {
      id: "1",
      title: "Projects",
      url: "#projects",
    },
    {
      id: "2",
      title: "Experience",
      url: "#experience",
    },
    {
      id: "3",
      title: "Extras",
      url: "#extras",
    },
    {
      id: "4",
      title: "Contact",
      url: "#contact",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Sign in",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const homeIcons = [homeSmile];
  // , file02, searchMd, plusSquare
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [python, react, github, postgresql, javascript, flask, tailwind, html];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Voice recognition",
      text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gamification",
      text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chatbot customization",
      text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integration with APIs",
      text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const contactMessage =
    "Click on an icon to go to the website or to copy the information.";

  export const contactText0 = "I am always excited to explore new challenges and opportunities.";
  export const contactText1 = "If you think my skills and experiences align with your needs, please feel free to reach out.";
  // export const contactText2 = "";

  export const contactContent = [
    {
      id: "0",
      title: "Eager to take on new challenges",
      text: contactText0,
    },
    {
      id: "1",
      title: "Ready to contribute skills and experience",
      text: contactText1,
    },
    // {
    //   id: "2",
    //   title: "Top-notch Security",
    //   text: contactText2,
    // },
  ];
  
  export const contactApps = [
    {
      id: "0",
      title: "LinkedIn",
      icon: linkedin,
      width: 65,
      height: 65,
      url: "https://www.linkedin.com/in/phoebe-badcock-470165195/",
      link: true,
    },
    {
      id: "1",
      title: "GitHub",
      icon: github,
      width: 50,
      height: 50,
      url: "https://github.com/PhoebeBC",
      link: true,
    },
    {
      id: "2",
      title: "Email",
      icon: email,
      width: 65,
      height: 65,
      url: "phoebe.badcock@mail.com",
      link: false,
    },
    {
      id: "3",
      title: "Phone",
      icon: phone,
      width: 65,
      height: 65,
      url: "+447845733150",
      link: false,
    },
    {
      id: "4",
      title: "Location",
      icon: location,
      width: 50,
      height: 50,
      url: "https://www.google.co.uk/maps/place/Northampton+NN7/@52.2586856,-1.9411493,8.71z/data=!4m6!3m5!1s0x487704236e4aa273:0x99bdac99537a1d8d!8m2!3d52.1669582!4d-0.8477761!16s%2Fg%2F11bytnmdgv?entry=ttu",
      link: true,
    },
    {
      id: "5",
      title: "Whatsapp",
      icon: whatsapp,
      width: 55,
      height: 55,
      url: "https://wa.me/447845733150"
    },
    // {
    //   id: "6",
    //   title: "Framer",
    //   icon: framer,
    //   width: 26,
    //   height: 34,
    // },
    // {
    //   id: "7",
    //   title: "Raindrop",
    //   icon: raindrop,
    //   width: 38,
    //   height: 32,
    // },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Basic",
      description: "AI chatbot, personalized recommendations",
      price: "0",
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
        "An advanced AI chatbot that can understand complex queries",
        "An analytics dashboard to track your conversations",
        "Priority support to solve issues quickly",
      ],
    },
    {
      id: "2",
      title: "Enterprise",
      description: "Custom AI chatbot, advanced analytics, dedicated account",
      price: null,
      features: [
        "An AI chatbot that can understand your queries",
        "Personalized recommendations based on your preferences",
        "Ability to explore the app and its features without any cost",
      ],
    },
  ];
  
  export const projects = [
    {
      id: "0",
      title: "Accounts Formatter",
      text: "Created a Tkinter application for The Tax Departemnt Ltd. Information is parsed, formatted and manipulated into the required outputs, with a database to recognise new clients and a logger for tracking sucess.",
      backgroundUrl: "./src/assets/projects/card-1.svg",
      iconUrl: pandas,
      imageUrl: accountsformatter,
      href: "https://github.com/PhoebeBC/CSV-Parser",
      multiIcon: false,
      lightRightTop: true,
    },
    {
      id: "1",
      title: "Salary Band Estimator",
      text: "Researched machine learning models, tested them aginst my data checking for high accuary scores, created trained and tested the random forest regressoer model then hosted using pythonanywhere.",
      backgroundUrl: "./src/assets/projects/card-2.svg",
      iconUrl: keras,
      imageUrl: salarycalculator,
      href: "https://github.com/PhoebeBC/UK-Salary-Predictor",
    },
    {
      id: "2",
      title: "Storm Team Manager",
      text: "Collaberated to build a website to attract players to our summer league team, Storm. Allows current players to sign in and view match details and the managers to share team sheets, rules and payment information.",
      backgroundUrl: "./src/assets/projects/card-3.svg",
      iconUrl: nodejs,
      href: "https://github.com/PhoebeBC/Storm-Website",
      imageUrl: storm,
      lightRightTop: true
    },
    {
      id: "3",
      title: "Something in JAVA",
      text: "Java backend, get project idea from youtube or dan .",
      backgroundUrl: "./src/assets/projects/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      lightLeftBottom: true,
    },
    {
      id: "4",
      title: "Something in C#",
      text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
      backgroundUrl: "./src/assets/projects/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Something in C++",
      text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
      backgroundUrl: "./src/assets/projects/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      lightLeftBottom: true,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];
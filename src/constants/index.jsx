import {
    accountsformatter,
    aws,
    blueCard,
    purpleCard,
    greenCard,
    check,
    checkb,
    checkg,
    checkp,
    chromecast,
    cogwheel,
    cplusplus,
    csharp,
    css,
    disc02,
    discord,
    discordBlack,
    email,
    facebook,
    figma,
    file02,
    firebase,
    flask, 
    framer,
    github,
    globe,
    goals, 
    homeSmile,
    html,
    instagram,
    javascript,
    java,
    jira,
    keras,
    learning,
    linkedin,
    linux,
    location,
    mealplanner,
    nodejs,
    notification2,
    notification3,
    notification4,
    notion,
    numpy,
    pandas,
    passwordmanager,
    photoshop,
    phone,
    plusSquare,
    postgresql,
    power,
    protopie,
    pycharm,
    python,
    raindrop,
    react,
    recording01,
    recording03,
    about1,
    about2,
    about3,
    about4,
    salarycalculator,
    scikitlearn,
    searchMd,
    selinium,
    slack,
    sliders04,
    sports,
    storm,
    sqlite,
    syncstudio,
    tailwind,
    telegram,
    twitter,
    ubuntu,
    vite,
    vscode,
    whatsapp,
    yourlogo,
    check2,
    loading1,
  } from "../assets/index.jsx";
  
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
      title: "About",
      url: "#about",
    },
    {
      id: "4",
      title: "Contact",
      url: "#contact",
      onlyMobile: true,
    },
  ];
  
  export const homeIcons = [homeSmile];
  // , file02, searchMd, plusSquare
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const techStackLogos = [
    html,  
    css,
    javascript, 
    react, 
    python, 
    // java,
    // cplusplus,
    // csharp,
    github, 
    postgresql, 
    sqlite,
    flask,  
    pandas,
    scikitlearn,
    selinium,
    numpy,
    // aws,
    firebase,
    vite,
    tailwind,
    figma,
    jira,
    // linux,
    // ubuntu,
    pycharm,
    vscode];
  
  export const brainwaveServices = [
    "Photo generating",
    "Photo enhance",
    "Seamless Integration",
  ];
  
  
  export const about = [
    {
      id: "0",
      title: "Learning & Creating",
      text: "After discovering my passion for programming, I decided to independently educate myself and pursue a career in software development. Over the past six months, I have been dedicated to understanding fundamental concepts and building various projects to apply and enhance my skills. One notable accomplishment was developing software for a business, which significantly improved the efficiency of a labor-intensive process.",
      question: "What am I doing Now?",
      imageUrl: learning,
      colorful: true,
    },
    {
      id: "1",
      title: "Career Goals",
      text: "My goal is to join a team of talented individuals who create innovative and intelligent solutions through coding and software. I aim to learn quickly and tackle exciting new challenges, collaborating in areas where I can grow. In a few years, I aspire to become a key contributor, making important decisions based on my knowledge and experience. I want to handle significant responsibilities, develop and deploy effective solutions to business problems.",
      question: "Where do i want to be?",
      imageUrl: goals,
      lightRightTop: true,
    },
    {
      id: "2",
      title: "Life Outside Work",
      text: "I love staying active and regularly participate in a variety of sports, including climbing, swimming, and gym sessions. Additionally, I am a committed member of the Milton Keynes Hockey Club, playing for the women's first team and the mixed hockey team. Being active not only keeps me healthy but also allows me to stay connected with friends and enjoy the camaraderie of team environments.",
      question: "What Else Do I Do?",
      imageUrl: sports,
      lightLeftBottom: true,
    },
    {
      id: "3",
      title: "Journeys & Joys",
      text: "Traveling to various countries has given me valuable insights into different cultures and their values. I enjoy learning during these trips, always finding new perspectives or approaches to incorporate into my own life. I've been following Formula 1 for the past five years, supporting McLaren. I love the drama, unpredictability, and all the factors that need to be considered for the best performance on race weekends. Recently, I started embroidery as a relaxing hobby, which helps me unwind and prevents me from mindlessly scrolling.",
      question: "What else am i interested in?",
      imageUrl: globe,
      colorful: true,
    },
  ];
  
  export const contactMessage =
    "Click on an icon to access the contact information.";

  export const contactText0 = "I am always excited to explore new challenges and opportunities.";
  export const contactText1 = "If you think my skills and experiences could provide value, please feel free to reach out.";
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
      rotation: 1,
      title: "LinkedIn",
      icon: linkedin,
      width: 65,
      height: 65,
      url: "https://www.linkedin.com/in/phoebe-badcock-470165195/",
      link: true,
    },
    {
      id: "1",
      rotation: 0,
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
      rotation: 7,
      icon: email,
      width: 65,
      height: 65,
      url: "#contactform",
      link: false,
    },
    {
      id: "3",
      rotation: 3,
      title: "Phone",
      icon: phone,
      width: 65,
      height: 65,
      url: "#contactform",
      link: false,
    },
    {
      id: "4",
      rotation: 4,
      title: "Location",
      icon: location,
      width: 50,
      height: 50,
      url: "https://www.google.com/maps/place/Northampton/@52.070175,-1.7144943,8.79z/data=!4m6!3m5!1s0x487704236e4aa273:0xcdf495d0d9e86209!8m2!3d52.237065!4d-0.8944421!16zL20vMGgzMF8?entry=ttu",
      link: true,
    },
    {
      id: "5",
      rotation: 5,
      title: "Whatsapp",
      icon: whatsapp,
      width: 55,
      height: 55,
      url: "https://wa.me/447845733150",
      link: true,
    },
  ];
  
  export const experience = [
    {
      id: "0",
      title: "Education",
      location: ["University of Warwick: 2017-2020", "Trent College: 2010-2017"],
      check: checkg,
      features: [
        "Bachelor of Science in Mathematics: First Class with Honors.",
        "Relavent University Modules: Maths by Computer (82%), JAVA Programming for Scientists (75%).",
        "Other modules covered statistics, analysis, algebra, logic and game theory.",
        "A Levels: A*A*AA Further Maths, Maths, Physics, Chemistry",
        "GCSEs: 11 - A*(6), A(5) including Maths and English",
      ],
    },
    {
      id: "1",
      title: "Senior Analyst",
      location: ["Snap Finance: 2023-2024"],
      check: checkb,
      features: [
        "Building MI Dashboard: Constructed the base for new company wide analytics dashboard. Improved data refresh time form every hour to instantly upon page load. Used Flask APIs with a Python backend and embedded SQL queries to access data from the Postgres Database. With Jinja and Bootstrap supporting the frontend for interactive customizable diagrams, graphs and metrics.",
        "Process Optimisation: Improved the efficiency of testing decisioning changes. By implementing Selenium and Webdriver to push test applications through the QA environments, time taken to test each change was reduced from six hours to one. Results were shared and updated via Jira.",
        "Company-wide Automation: Collaborated and led a junior colleague to write python automation scripts using API and SFTP calls. More than 10 were improved, the greatest upgrade reduced a process from two hours to under 30 seconds.",
      ],
    },
    {
      id: "2",
      title: "Analyst",
      location: ["Snap Finance: 2020-2022"],
      check: checkp,
      features: [
        "Customer Outcomes Review: Successfully completed FCA requested review of the full history of the company. This was achieved by constructing insightful data tables within the Postgres Database from researching through all historical data and obtaining retroactive data from the credit bureaus.",
        "CRA Handling: Effectively oversaw credit reporting, including regular testing, checks and the sharing of the files to credit bureaus thereby fostering strong relationships through clear communication.",
        "Weekly Crdit Update: Investigated KPI trends, presented results and recomended solutions to stakeholders every Friday to track company progress.",
      ],
    },
  ];  
  
  export const cardBlue = `url('data:image/svg+xml,<svg preserveAspectRatio="none" width="384" height="366" viewBox="0 0 384 366" fill="%230E0C15" xmlns="http://www.w3.org/2000/svg"><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(%23paint0_linear_333_9188)" stroke-opacity="0.85" stroke-width="2"/><defs><linearGradient id="paint0_linear_333_9188" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse"><stop stop-color="%230097eb"/><stop offset="0.562842" stop-color="%23fFF" stop-opacity="0"/></linearGradient></defs></svg>')`;
  export const cardGreen = `url('data:image/svg+xml,<svg preserveAspectRatio="none" width="384" height="366" viewBox="0 0 384 366" fill="%230E0C15" xmlns="http://www.w3.org/2000/svg"><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(%23paint0_linear_333_9187)" stroke-opacity="0.85" stroke-width="2"/><defs><linearGradient id="paint0_linear_333_9187" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse"><stop stop-color="%237ADB78"/><stop offset="0.562842" stop-color="%23FFF" stop-opacity="0"/></linearGradient></defs></svg>')`;
  export const cardPurple = `url('data:image/svg+xml,<svg preserveAspectRatio="none" width="384" height="366" viewBox="0 0 384 366" fill="%230E0C15" xmlns="http://www.w3.org/2000/svg"><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="white" stroke-opacity="0.15" stroke-width="2"/><path vector-effect="non-scaling-stroke" d="M32 1H319.453C328.037 1 336.238 4.5601 342.1 10.832L374.648 45.6545C380.015 51.3966 383 58.9629 383 66.8225V334C383 351.121 369.121 365 352 365H32C14.8792 365 1 351.121 1 334V32C1 14.8792 14.8792 1 32 1Z" stroke="url(%23paint0_linear_333_9185)" stroke-opacity="0.85" stroke-width="2"/><defs><linearGradient id="paint0_linear_333_9185" x1="192" y1="0" x2="192" y2="366" gradientUnits="userSpaceOnUse"><stop stop-color="%23AC6AFF"/><stop offset="0.562842" stop-color="%23FFF" stop-opacity="0"/></linearGradient></defs></svg>')`;

  
  export const projects = [
    {
      id: "0",
      title: "Accounts Formatter",
      text: "Created a Tkinter application for The Tax Departemnt Ltd. Information is parsed, formatted and manipulated into the required outputs, with a database to recognise new clients and a logger for tracking sucess.",
      backgroundUrl: cardBlue,
      status: "Complete",
      iconUrl: check2,
      imageUrl: accountsformatter,
      href: "https://github.com/PhoebeBC/CSV-Parser",
      lightRightTop: true,
    },
    {
      id: "1",
      title: "Salary Band Estimator",
      text: "Researched machine learning models, tested them aginst my data checking for high accuary scores, created trained and tested the random forest regressoer model then hosted using pythonanywhere.",
      backgroundUrl: cardGreen,
      status: "Complete",
      iconUrl: check2,
      imageUrl: salarycalculator,
      href: "https://github.com/PhoebeBC/UK-Salary-Predictor",
    },
    {
      id: "2",
      title: "Storm Team Manager",
      text: "Collaberated to build a website to attract players to our summer league team, Storm. Allows current players to sign in and view match details and the managers to share team sheets, rules and payment information.",
      backgroundUrl: cardPurple,
      status: "In Progress",
      iconUrl: cogwheel,
      href: "https://github.com/PhoebeBC/Storm-Website",
      imageUrl: storm,
      lightRightTop: true
    },
    {
      id: "3",
      title: "Sync Studio App",
      text: "Creating an android application to combine songs for a playlist. The host will have their own studio which others can join and add songs to. This will connects to the hosts streaming service.",
      backgroundUrl: cardGreen,
      status: "In Progress",
      iconUrl: cogwheel,
      imageUrl: syncstudio,
      lightLeftBottom: true,
    },
    {
      id: "4",
      title: "Meal Planner",
      text: "Removes the pain of having to decisde what to have for dinner each week. Once the user has entered their favourite recipies the app wil suggest their meals for the weeks.",
      backgroundUrl: cardPurple,
      status: "Coming Soon",
      iconUrl: power,
      imageUrl: mealplanner,
    },
    {
      id: "5",
      title: "Password Manager",
      text: "Secure way for users to store passwords and login details. Will include a veriety of incryption and decryption methods.",
      backgroundUrl: cardBlue,
      status: "Coming Soon",
      iconUrl: power,
      imageUrl: passwordmanager,
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
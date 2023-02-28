/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Amin Ben Slimen",
  title: "Hi all, I'm Amin",
  subTitle: emoji(
    'As a highly motivated and skilled full-stack but front-end heavy developer with 3 years of experience in various companies, I bring a wealth of knowledge and expertise to any project. My attention to detail, passion for technology, and ability to work collaboratively make me an asset to any team.'
  ),
  resumeLink:
    "https://drive.google.com/file/d/1o1tdHul127FOXXx4BNE1kK5LZVUeTEgz/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/aminBenSlimen/",
  linkedin: "https://www.linkedin.com/in/amin-benslimen-451421204/",
  gmail: "aminbenslimen00@gmail.com",
  gitlab: "https://gitlab.com/aminBenSlimen",
  facebook: "https://www.facebook.com/100004126395359",
  stackoverflow: "https://stackoverflow.com/users/12828765/aminben-slimen",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL-STACK ( FRONT-END HEAVY ) DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive User Interfaces for your web, mobile and POS applications."
    ),
    emoji("⚡Seamlessly integrate third-party APIs and bots into any ERP/system to optimize functionality, improve efficiency, and streamline operations."),
    emoji(
      "⚡ Design and develop engaging games for various platforms."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "databases",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "unity",
      fontAwesomeClassname: "fab fa-unity"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Bachelor of technology",
      logo: require("./assets/images/1024px-Round_Landmark_School_Icon_-_Transparent.svg.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "january 2018 - january 2019",
      desc: "",
      descBullets: []
    },
    {
      schoolName: "ISET sfax",
      logo: require("./assets/images/sigle iset sfax-fi803493x131.png"),
      subHeader: "License of Computer Science",
      duration: "Aout 2019 - Aout 2021",
      desc: "",
      descBullets: [
      ]
    },
    {
      schoolName: "IIT Institut International de Technologie",
      logo: require("./assets/images/download.png"),
      subHeader: "Master of Data science and technology",
      duration: "September 2021 - Aout 2022",
      desc: "",
      descBullets: [
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Game developer",
      company: "Freelance at fiverr",
      companylogo: "https://files.jotform.com/jotformapps/0d51c1a6dc78d20137f6ac7d98eca9f9.png",
      date: "June 2019 – November 2020",
      desc: "Collaborated with multiple companies as a freelance game developer, delivering engaging and immersive gaming experiences across various platforms. Leveraging my expertise in game design and development.",
      descBullets: [
        "Developed strong soft skills and work ethic in this experience.",
        "Sharpened my time management and stress tolerance skills during this freelance experience, which overlapped with my studies and other full-time work commitments. "
      ]
    },
    {
      role: "Full Stack developer + Scrum master",
      company: "IOTA",
      companylogo: require("./assets/images/Screenshot_19.png"),
      date: "Jan 2020 – Mar 2020",
      desc: "At IOTA, I had the opportunity to showcase my technical and leadership skills as a web app developer, where I successfully managed and developed a cutting-edge pool platform. My expertise in modern web technologies and ability to drive projects from conception to launch allowed me to deliver a robust, scalable, and user-friendly platform. I'm proud to have played a key role in the growth and success of IOTA, and I am eager to bring my experience and skills to a new challenge."
    },
    {
      role: "Front End Developer",
      company: "PMC",
      companylogo: "https://lh3.googleusercontent.com/p/AF1QipMzx7LDwwI7MXyDZLB6-E5Q40RztT4mpc8H8z36=s680-w680-h510",
      date: "Feb 2021 – Nov 2021",
      desc: "At PMC, I had the privilege of working with clients to enhance their business processes through the development of custom web and mobile applications. As the lead developer on several projects, I was responsible for building seamless integrations between the clients' desktop ERP systems and the new web and mobile apps. I leveraged my expertise in web development and project management to deliver high-quality solutions that exceeded client expectations and drove their businesses forward."
    },
    {
      role: "Front End Developer",
      company: "Futuur",
      companylogo: "https://play-lh.googleusercontent.com/4r5PuKP2DiyCQJkv9tCoyQMI2syakhFJkOCP9uP-9Z9RS7UCG-vYpKwJxLbC6DzV5Xxj",
      date: "Nov 2021 – Present",
      desc: "At Futuur, I had the unique experience of working remotely with a talented team of backend developers and designers to maintain, redesign, and improve their cutting-edge platform. As a front-end developer, I was responsible for bringing the designs to life and ensuring a seamless user experience. My strong communication skills and ability to work collaboratively allowed me to thrive in a remote environment and contribute to the success of the platform."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/Screenshot_19.png"),
      projectName: "One Two survey",
      projectDesc: "Advanced online survey",
      footerLink: [
        {
          name: "See video",
          url: "https://www.youtube.com/watch?v=TL3ZNCkz1Jo"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/icon.png"),
      projectName: "Municipality",
      projectDesc: "A mobile application that allows citizens to submit claims to their local municipality",
      footerLink: [
        {
          name: "See video",
          url: "https://drive.google.com/file/d/1wuvMJYPwiR-RsR-S4NzX8YzP5aiWSd3t/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/futuur.png"),
      projectName: "Futuur",
      projectDesc: "Futuur is a prediction market providing more accurate forecasts across a range of topics",
      footerLink: [
        {
          name: "Visit website !",
          url: "https://futuur.com"
        }
      ]
    },
    {
      image: require("./assets/images/pngLogoDark.png"),
      projectName: "Cokitana",
      projectDesc: "Cokitana is a Co-founded innovative IT startup delivering bespoke solutions with cutting-edge technologies.",
      footerLink: [
        {
          name: "Visit our website !",
          url: "https://cokitana.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+216-23746742",
  email_address: "aminbenslimen00@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};

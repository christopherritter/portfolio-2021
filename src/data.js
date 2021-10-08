export const employers = [{
    title: "User Experience Designer",
    name: "Jenzabar, Inc.",
    startDate: 2015,
    endDate: "Now",
    location: "Blue Ash, Ohio",
    projects: [


      {
        name: "TOC Sidebar",
        product: "Jenzabar ICS",
        date: "April 2021",
        image: "./img/JICS9_TOC.png",
        imageDesc: "Mobile and desktop view of the TOC Sidebar on the JICS Design System.",
        role: "UI Developer",
        summary: "Developed a standardized sidebar for the JICS Design System.",
        problem: "Updates to the Jenzabar ICS Design System outgrew the current navigational structure and required additional navigation.",
        solution: "Create a new sidebar component which enables the user to navigate the content of a single page.",
        process: ["Technology Assessment", "Competitive Audit", "Functional Prototype", "Internal Review", "Frontend Development"],
        tasks: [{
            type: "Technology Assessment",
            summary: "Deep dive into the current technology stack being used to build the frontend for Jenzabar ICS 9.",
            deliverables: [{
              title: "Jenzabar ICS Tech Stack",
              image: "./img/JICS_TOC_Tech-Stack.png",
            }]
          },
          {
            type: "Competitive Audit",
            summary: "Detailed analysis of the TOC navigation found on design systems similar to the JICS Design System.",
            deliverables: [{
              title: "Jenzabar ICS Competitive Analysis for TOC Sidebar",
              image: "./img/JICS9_TOC_Comp-Analysis.png",
            }],
          },
          {
            type: "Functional Prototype",
            summary: "Initial prototype of the TOC Sidebar containing the necessary features derrived from the competitive audit.",
            deliverables: [{
              title: "Jenzabar ICS TOC Sidebar Functional Prototype",
              image: "./img/JICS9_TOC_Prototype.png",
            }],
          },
          {
            type: "Internal Review",
            summary: "Initial review of the prototype revealed the features complicated the experience and doubled the size of the template.",
            deliverables: [{
              title: "Jenzabar ICS TOC Sidebar Internal Review",
              image: "./img/JICS9_TOC_Internal-Review.png",
            }],
          },
          {
            type: "Frontend Development",
            summary: "Updated the front-end template to ensure the TOC Sidebar worked on the standard themes that are available on JICS.",
            image: "./img/JICS9_TOC.png",
            deliverables: [{
              title: "Jenzabar ICS TOC Design System Update",
              image: "./img/JICS9_TOC_Design-System.png",
            }],
          },
        ],
        skills: [
          "UX",
          "UI",
          "Prototyping",
          "Front-End",
          "Design Systems"
        ],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "jicsds"
      },


      {
        name: "JICS Design System",
        product: "Jenzabar ICS",
        image: "./img/JICS9_Design-System.png",
        imageDesc: "JICS Design System",
        role: "Frontend Developer",
        summary: "Created a design system for JICS9 portlets to standardize front-end components.",
        tasks: [{
          summary: "Created a design system for JICS9 portlets to standardize front-end components.",
          type: "Frontend Development",
          deliverables: [{
            title: "Jenzabar ICS Design System",
            image: "./img/JICS9_Design-System.png",
            summary: "A new design system was created for JICS9 to display the components in use by the CX portlets. The system leveraged the existing product to ensure the proper display of style sheets, templates, and other aspects of the design."
          }]
        }],
        skills: [
          "UX",
          "UI",
          "Prototyping",
          "Front-End",
          "Design Systems"
        ],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "jicsds"
      },


      {
        name: "Career Explorer",
        product: "Find Your Calling",
        date: "January 2019",
        image: "./img/FYC_Career-Explorer.png",
        imageDesc: "Final release of the all-new Career Explorer for Find Your Calling on desktop and mobile devices.",
        role: "UX Designer",
        summary: "Designed a Career Explorer to help prospective students to view related career paths.",
        problem: "Prospective students simply received list of careers after taking the quiz.",
        solution: "Create a Career Explorer for prospective students to view related career paths.",
        process: ["Competitive Audit", "Low Fidelity Wireframes", "Interactive Prototype", "Internal Review", "Visual Design", "UI Development"],
        tasks: [{
          type: "Competitive Audit",
          summary: "Gathered a list of competitors and compared them across a variety of criteria.",
          deliverables: [{
            title: "Find Your Calling Career Explorer Competitive Audit",
            image: "./img/FYC_Career-Exp_Comp-Audit.png",
            summary: "Find Your Calling Career Explorer Competitive Audit"
          }],
        }, {
          type: "Low Fidelity Wireframes",
          summary: "Redesigned elements of Find Your Calling to focus on educational institutions.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Wireframes.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Interactive Prototype",
          summary: "Redesigned elements of Find Your Calling to focus on educational institutions.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Prototype.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Internal Review",
          summary: "Redesigned elements of Find Your Calling to focus on educational institutions.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Review.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Frontend Development",
          summary: "Redesigned elements of Find Your Calling to focus on educational institutions.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Frontend-Dev.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }],
        skills: ["UX", "UI", "Visual Design", "Prototyping"],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["Bootstrap", "Sass", "Handlebars"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "fyc"
      },


      {
        name: "Pattern Lab",
        product: "Find Your Calling",
        image: "./img/FYC_Pattern-Lab.png",
        imageDesc: "Pattern Lab",
        role: "Frontend Developer",
        summary: "Implemented Pattern Lab to deliver redesigned elements for Find Your Calling.",
        problem: "",
        solution: "",
        process: [],
        tasks: [{
          summary: "",
          deliverables: [{
            title: "FYC Design System",
            image: "./img/FYC_Pattern-Lab.png",
            summary: "Pattern Lab was used to create a new design system for Find Your Calling which leveraged existing style sheets and templates. This enabled the design system to integrate seamlessly with the pre-existing technology stack."
          }]
        }],
        skills: ["UI", "Front-End", "Design Systems"],
        tools: ["Pattern Lab", "VS Code", "Prepros"],
        tech: ["NodeJS", "Bootstrap", "Sass", "Handlebars"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "fyc"
      },


      {
        name: "Responsive Layouts",
        product: "Jenzabar ICS",
        image: "./img/JICS9.png",
        imageDesc: "Responsive Layouts for Jenzabar ICS",
        role: "UI Developer",
        summary: "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
        problem: "",
        solution: "",
        process: [],
        tasks: [{
          summary: "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
          type: "Frontend Development",
          deliverables: [{
              title: "CRM Student Portlets",
              image: "./img/JICS9_CRM-Student.png",
              summary: "Implemented responsive layouts for CRM Student portlets which provide online access to student information. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
            },
            {
              title: "CRM Candidate Portlets",
              image: "./img/JICS9_CRM-Candidate.png",
              summary: "Implemented responsive layouts for CRM Candidate portlets which provide online access to information about potential candidates. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
            },
            {
              title: "CRM Staff Portlets",
              image: "./img/JICS9_CRM-Staff.png",
              summary: "Implemented responsive layouts for CRM Staff portlets which provide online access to employment information. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
            },
            {
              title: "CRM Faculty Portlets",
              image: "./img/JICS9_CRM-Faculty.png",
              summary: "Implemented responsive layouts for CRM Faculty portlets which provide online access to school resources for educators. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
            }
          ]
        }, ],
        skills: ["UX", "UI", "Prototyping", "Front-End"],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["ASCX", "Bootstrap", "Sass", "jQuery", "FooTable"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "jics"
      },



      {
        name: "CX Mobile Theme",
        product: "Jenzabar ICS",
        image: "./img/JICS9_CX-Mobile-Theme.png",
        imageDesc: "CX Mobile Theme",
        role: "UI Developer",
        summary: "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
        tasks: [{
          summary: "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
          type: "UI Design",
          deliverables: [{
            title: "Jenzabar ICS Design System",
            image: "./img/JICS9_CX-Mobile-Theme.png",
            summary: "Created a new base theme for JICS9 which incorporated the new branding guidlines for Jenzabar products. Special attention was given to the Sass variables so as to make customization easier for the end user."
          }]
        }, ],
        skills: [
          "UX",
          "UI",
          "Prototyping",
          "Front-End",
          "Visual Design"
        ],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
        results: {
          finalResults: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "jics"
      },




      {
        name: "Jenzabar CX 10",
        product: "Jenzabar CX",
        image: "./img/CX10.png",
        imageDesc: "Jenzabar CX 10",
        role: "UI Designer",
        summary: "Designed the next generation of Jenzabar CX for campus-wide administration on PC and Macintosh systems.",
        problem: "",
        solution: "",
        process: ["Competitive Audit", "Low Fidelity Wireframes", "Interactive Prototype", "Usability Test", "Visual Design"],
        tasks: [{
          type: "Visual Design",
          summary: "Designed the front-end for the new desktop version of Jenzabar CX 10.",
          skills: [
            "UX",
            "UI",
            "Prototyping",
            "Front-End",
            "Research",
            "Analysis",
            "Reporting"
          ],
          tools: ["Adobe XD", "VS Code", "QT Creator"],
          tech: ["QT", "QSS"],
          deliverables: [{
              title: "CX 10 Home Screen",
              image: "./img/CX10_Home.png",
              summary: "The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory."
            },
            {
              title: "Login and Release Selection",
              image: "./img/CX10_Installer.png",
              summary: "The desktop version of CX10 provided customers with secure access to their institutional data. After signing in, users have the option to select from multiple instances of their data (known as releases)."
            },
            {
              title: "Personalized Fonts and Colors",
              image: "./img/CX10_User-Settings.png",
              summary: "The settings screen enabled users to customize the font sizes and colors of their local client. Theme settings can be saved and loaded from a separate file to help enforce consistency at customer sites."
            },
            {
              title: "Interactive Prototypes",
              image: "./img/CX10_Prototypes.png",
              summary: "Interactive prototypes were created in Adobe XD to visualize the user interactions with the client. Feedback was gathered internally and from clients to help determine the look and feel of the application."
            }
          ]
        }],
        path: "cx"
      },



      {
        name: "Jenzabar JX",
        product: "Jenzabar JX",
        imageDesc: "Jenzabar JX",
        image: "./img/JX.png",
        role: "UX Designer",
        summary: "Assisted local, remote, and offshort development teams with the design of Jenzbar JX.",
        problem: "",
        solution: "",
        process: ["Technology Assessment", "Competitive Audit", "Functional Prototype", "Internal Review", "Frontend Development"],
        tasks: [{
          summary: "Prototyped SmartGWT components to demonstrate user interactions and responsive layouts.",
          type: "Frontend Development"
        }],
        skills: ["UX", "Visual Design", "UI", "Prototyping", "Front-End"],
        tools: [
          "Adobe PhotoShop",
          "Adobe Illustrator",
          "Adobe InDesign",
          "Visual Studio"
        ],
        tech: ["SmartGWT"],
        path: "jx"
      }
    ],
  },
  {
    title: "Interface Design Consultant",
    name: "Crown Equipment",
    startDate: 2015,
    endDate: 2015,
    location: "New Bremen, Ohio",
    projects: [{
      name: "Crown Industries Rebranding",
      product: "Crown.com",
      role: "Frontend Developer",
      summary: "Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
      problem: "Implement new branding guidelines on the main website.",
      solution: "",
      tasks: [{
        summary: "",
        deliverables: [{
          title: "Crown Industries Rebranding",
          image: "./img/Crown-Website.png",
          summary: "Adobe Experience Manager was used to rollout the new brand for Crown Industries. Bootstrap was used to display numerous components in a responsive layout, along with Sass to manage the CSS, which was compiled as part of the build process using Grunt."
        }]
      }],
      skills: ["UX", "UI"],
      tools: ["Adobe Experience Manager"],
      tech: ["Bootstrap", "Sass", "Grunt"],
      results: {
        finalResults: "",
        keyLearnings: "",
        nextSteps: ""
      },
      path: "crown"
    }]
  },
  {
    title: "User Experience Designer",
    name: "Trimble Navigation",
    startDate: 2014,
    endDate: 2015,
    location: "Huber Heights, Ohio",
    projects: [{
      name: "Grade Control for Excavators",
      product: "Trimble Earthworks",
      role: "UX Designer",
      summary: "Designed the next generation of Grade Control for Trimble Earthworks on the Android platform.",
      process: ["Field Research", "Ideation", "Validation", "Prototyping", "UI Design"],
      tasks: [{
          summary: "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
          type: "Ideation"
        },
        {
          summary: "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
          skills: ["UX", "UI", "Research", "Prototyping"],
          tech: ["Bootstrap"]
        },
        {
          summary: "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
          skills: ["UX", "Research", "Analysis", "Reporting"]
        },
        {
          summary: "Modeled an excavator and work site using Trimble SketchUp.",
          skills: ["UI", "3D Modeling"],
          tools: ["SketchUp"]
        },
        {
          summary: "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
          skills: [
            "UI",
            "Android",
            "Style Guide",
            "Iconography",
            "Prototyping"
          ],
          tech: ["Vuforia"]
        }
      ],
      skills: ["UX", "Brainstorming"],
    }],
  },
  {
    title: "Idea Designer",
    name: "LexisNexis",
    startDate: 2010,
    endDate: 2013,
    location: "Miamisburg, Ohio",
    projects: [{
      name: "Lexis Advance",
      role: "UX Designer",
      summary: "Designed the next generation of case law research on Lexis Advance for the web, iOS, and Android platforms.",
      problem: "",
      solution: "",
      tasks: [{
          summary: "Created annotated wireframes to support the development of Lexis Advance.",
        },
        {
          summary: "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
        },
        {
          summary: "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
        },
        {
          summary: "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
        },
        {
          summary: "Design Lead for several innovative products including Lexis Answers.",
        }
      ],
      skills: ["UX", "Brainstorming", "Testing", "Research", "Analysis", "Reporting", "Prototyping"],
      path: "lexisadvance"
    }]
  },
  {
    title: "Experience Planner",
    name: "Bridge Worldwide",
    startDate: 2009,
    endDate: 2010,
    location: "Cincinnati, Ohio",
    projects: [{
      name: "Pearle Vision",
      role: "UX Designer",
      summary: "Created a mobile try-on tool for Pearl Vision customers on the iOS and Android platforms.",
      problem: "",
      solution: "",
      tasks: [{
          summary: "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
        },
        {
          summary: "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
        },
        {
          summary: "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
        },
        {
          summary: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
        },
        {
          summary: "Conducted usability testing with potential customers and reported insights back to the team.",
        },
        {
          summary: "Presented initial concepts, customer feedback, and other deliverables to the clients.",
        }
      ],
      skills: ["UX", "Social Media", "Brainstorming", "Research", "Analysis", "Reporting"],
      tools: ["Microsoft Visio"],
      path: "pearlevision"
    }]
  }
];

export const testimonials = [{
    quote: "Chris is a visionary, in the truest sense; few people have more original and provocative ideas about how technology can and will impact our future. As a key member of the Innovation team at LexisNexis, Chris consistently and thoughtfully challenged the status quo, injecting much-needed insight and energy into our concept pipeline and helping the company to chart a successful path forward. I recommend Chris to any organization in need of that kind of 'intrapreneurial' mindset.",
    image: "./img/jonkt.jpg",
    name: "Jon Kerry-Tyerman",
    company: "LexisNexis",
  },
  {
    quote: "I have had the pleasure to work with Christopher for several years. Christopher is an excellent ui and usability software designer / information architect. He is extremely self-motivated and self- disciplined. He also listens to what the customer needs are and designs for those objectives. His designs continue to amaze me and range from completely out of the box to conservative depending on feedback.",
    image: "./img/ardiK.jpg",
    name: "Ardi Kazarian",
    company: "McAfee",
  },
];

export const skills = [
  "UX", "UI", "Visual Design", "Prototyping", "Frontend", "Design Systems", "Reporting", "Ideation", "Research", "Analysis"
];

export const tools = [
  "Adobe XD", "VS Code", "Pattern Lab", "Google Analytics", "QT Creator", "Adobe Illustrator",
  "Adobe InDesign", "Visual Studio"
];

export const tech = [
  "Bootstrap", "Sass", "Handlebars", "NodeJS", "ASCX", "jQuery", "QT", "QSS", "SmartGWT"
];
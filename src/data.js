export const employers = [
  {
    title: "User Experience Designer",
    name: "Jenzabar, Inc.",
    startDate: 2015,
    endDate: "Now",
    location: "Blue Ash, Ohio",
    projects: [{
        name: "Find Your Calling",
        img: "/img/FYC.png",
        description: "Find Your Calling helps prospective students identify career paths that match their personal interests. The website provides detailed information about employment opportunities in each state, plus the ability to connect with local colleges and universities that offer relevant courses.",
        tasks: [{
            description: "Redesigned elements of Find Your Calling to focus on educational institutions.",
            skills: ["UX", "UI", "Visual Design", "Prototyping"],
            tools: ["Adobe XD", "VS Code"],
            tech: ["Bootstrap", "Sass", "Handlebars"],
            deliverables: [{
                title: "The All-New Career Explorer",
                img: "/img/FYC_Career-Explorer.png",
                description: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
              },
              {
                title: "The Improved Private Profile",
                img: "/img/FYC_Private-Profile.png",
                description: "The private profile was redesigned to focus on the educational choices for each of the career paths. This was part of a larger effort to connect prospective students to eductional institutions."
              },
              {
                title: "Additional School Filters",
                img: "/img/FYC_Schools-Filter.png",
                description: "Additional filters were added to the school listing for each of the career paths. These were designed for both desktop and mobile devices to align with the eductional instutitions below the filters."
              },
              {
                title: "Big Data School Headers",
                img: "/img/FYC_School-Header.png",
                description: "Visualized data for the schools was moved from the body of the original page into an interactive header. The header was designed to be used on both desktop and mobile devices."
              }
            ]
          },
          {
            description: "Implemented Pattern Lab to deliver redesigned elements for Find Your Calling.",
            skills: ["UI", "Front-End", "Design Systems"],
            tools: ["Pattern Lab", "VS Code"],
            tech: ["NodeJS", "Bootstrap", "Sass", "Handlebars"],
            deliverables: [{
              title: "FYC Design System",
              img: "/img/FYC_Pattern-Lab.png",
              description: "Pattern Lab was used to create a new design system for Find Your Calling which leveraged existing style sheets and templates. This enabled the design system to integrate seamlessly with the pre-existing technology stack."
            }]
          },
          {
            description: "Created Google Analytics reports to measure the effectiveness of redesigned elements.",
            skills: ["UX", "Reporting", "Ideation"],
            tools: ["Google Analytics"],
            deliverables: [{
              title: "Google Analytics Reporting",
              img: "/img/FYC_Google-Reports.png",
              description: "The inclusion of Google Analytics allowed for the creation of detailed reports which showed the conversion rates for our project targets. These reports helped rate the efficacy of the designs and guide future enhancements."
            }]
          }
        ],
        path: "fyc"
      },
      {
        name: "Jenzabar ICS 9",
        img: "/img/JICS9.png",
        description: "The latest release of the Jenzabar Internet Campus Solution features a suite of online portlets which have been redesigned for use on mobile and deskotop browsers, plus an all-new theme to align with the company's new branding guidelines.",
        tasks: [{
            description: "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
            skills: ["UX", "UI", "Prototyping", "Front-End"],
            tools: ["Adobe XD", "VS Code"],
            tech: ["ASCX", "Bootstrap", "Sass", "jQuery", "FooTable"],
            deliverables: [{
                title: "CRM Student Portlets",
                img: "/img/JICS9_CRM-Student.png",
                description: "Implemented responsive layouts for CRM Student portlets which provide online access to student information. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
              },
              {
                title: "CRM Candidate Portlets",
                img: "/img/JICS9_CRM-Candidate.png",
                description: "Implemented responsive layouts for CRM Candidate portlets which provide online access to information about potential candidates. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
              },
              {
                title: "CRM Staff Portlets",
                img: "/img/JICS9_CRM-Staff.png",
                description: "Implemented responsive layouts for CRM Staff portlets which provide online access to employment information. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
              },
              {
                title: "CRM Faculty Portlets",
                img: "/img/JICS9_CRM-Faculty.png",
                description: "Implemented responsive layouts for CRM Faculty portlets which provide online access to school resources for educators. Used Bootstrap and various JavaScript libraries (e.g., jQuery and FooTable) to implement breakpoints within ASCX templates."
              }
            ]
          },
          {
            description: "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
            skills: [
              "UX",
              "UI",
              "Prototyping",
              "Front-End",
              "Visual Design"
            ],
            tools: ["Adobe XD", "VS Code"],
            tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
            deliverables: [{
              title: "Jenzabar ICS Design System",
              img: "/img/JICS9_CX-Mobile-Theme.png",
              description: "Created a new base theme for JICS9 which incorporated the new branding guidlines for Jenzabar products. Special attention was given to the Sass variables so as to make customization easier for the end user."
            }]
          },
          {
            description: "Created a design system for JICS9 portlets to standardize front-end components.",
            skills: [
              "UX",
              "UI",
              "Prototyping",
              "Front-End",
              "Design Systems"
            ],
            tools: ["Adobe XD", "VS Code"],
            tech: ["ASCX", "Bootstrap", "Sass", "jQuery"],
            deliverables: [{
              title: "Jenzabar ICS Design System",
              img: "/img/JICS9_Design-System.png",
              description: "A new design system was created for JICS9 to display the components in use by the CX portlets. The system leveraged the existing product to ensure the proper display of style sheets, templates, and other aspects of the design."
            }]
          }
        ],
        path: "jics9"
      },
      {
        name: "Jenzabar CX 10",
        img: "/img/CX10.png",
        description: "Jenzabar CX 10 is a completely redesigned version of the classic Jenzbar CX client that transforms the old interface from an 80-character black-and-green terminal screen to a modern, desktop experience for both PCs and Macs.",
        tasks: [{
          description: "Designed the front-end for the new desktop version of Jenzabar CX 10.",
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
              img: "/img/CX10_Home.png",
              description: "The home screen for CX 10 provides users with a searchable directory of their available applications. When the user launches an application it appears on a recently viewed list next to the directory."
            },
            {
              title: "Login and Release Selection",
              img: "/img/CX10_Installer.png",
              description: "The desktop version of CX10 provided customers with secure access to their institutional data. After signing in, users have the option to select from multiple instances of their data (known as releases)."
            },
            {
              title: "Personalized Fonts and Colors",
              img: "/img/CX10_User-Settings.png",
              description: "The settings screen enabled users to customize the font sizes and colors of their local client. Theme settings can be saved and loaded from a separate file to help enforce consistency at customer sites."
            },
            {
              title: "Interactive Prototypes",
              img: "/img/CX10_Prototypes.png",
              description: "Interactive prototypes were created in Adobe XD to visualize the user interactions with the client. Feedback was gathered internally and from clients to help determine the look and feel of the application."
            }
          ]
        }],
        path: "cx10"
      },
      {
        name: "Jenzabar JX",
        img: "/img/JX.png",
        description: "Jenzabar JX provides online browser access to the classic Jenzabar CX suite of tools for colleges and universities. The new platform was built in Java and uses Smart GWT components to display the user interface.",
        tasks: [{
            description: "Provided design assistance to local, remote, and offshore development teams.",
            skills: ["UX", "Visual Design"],
            tools: [
              "Adobe PhotoShop",
              "Adobe Illustrator",
              "Adobe InDesign"
            ]
          },
          {
            description: "Prototyped SmartGWT components to demonstrate user interactions and responsive layouts.",
            skills: ["UI", "Prototyping", "Front-End"],
            tools: ["Visual Studio"],
            tech: ["SmartGWT"]
          }
        ],
        path: "jx"
      }
    ]
  },
  {
    title: "Interface Design Consultant",
    name: "Crown Equipment",
    startDate: 2015,
    endDate: 2015,
    location: "New Bremen, Ohio",
    projects: [{
      name: "Crown.com",
      description: "Primary website for Crown, Inc.",
      tasks: [{
        description: "Contracted to provide front-end assistance for Crown Equipment to implement a responsive design for their corporate site managed by Adobe Experience Manager.",
        skills: ["UX", "UI"],
        tools: ["Adobe Experience Manager"],
        tech: ["Bootstrap", "Sass", "Grunt"],
        deliverables: [{
          title: "Crown Industries Rebranding",
          img: "/img/Crown-Website.png",
          description: "Adobe Experience Manager was used to rollout the new brand for Crown Industries. Bootstrap was used to display numerous components in a responsive layout, along with Sass to manage the CSS, which was compiled as part of the build process using Grunt."
        }]
      }],
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
      name: "NextGen",
      description: "The next generation of machine control.",
      tasks: [{
          description: "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
          skills: ["UX", "Brainstorming"]
        },
        {
          description: "Developed HTML/Bootstrap prototypes for field testing with machine operators.",
          skills: ["UX", "UI", "Research", "Prototyping"],
          tech: ["Bootstrap"]
        },
        {
          description: "Conducted field research of the construction industry across the US and Canada, providing top level reports of my findings to primary stakeholders.",
          skills: ["UX", "Research", "Analysis", "Reporting"]
        },
        {
          description: "Modeled an excavator and work site using Trimble SketchUp.",
          skills: ["UI", "3D Modeling"],
          tools: ["SketchUp"]
        },
        {
          description: "Provided design assets for Android/Vuforia prototypes, and for production within an Agile environment, which included style guides and custom icons for Android applications.",
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
      path: "nextgen"
    }]
  },
  {
    title: "Idea Designer",
    name: "LexisNexis",
    startDate: 2010,
    endDate: 2013,
    location: "Miamisburg, Ohio",
    projects: [{
      name: "Lexis Advance",
      description: "The next generation of legal documentation",
      tasks: [{
          description: "Created annotated wireframes to support the development of Lexis Advance.",
          skills: ["UX"]
        },
        {
          description: "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
          skills: ["UX", "Testing", "Research", "Reporting"]
        },
        {
          description: "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
          skills: ["UX", "Brainstorming"]
        },
        {
          description: "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
          skills: [
            "UX",
            "Research",
            "Analysis",
            "Reporting",
            "Prototyping"
          ]
        },
        {
          description: "Design Lead for several innovative products including Lexis Answers.",
          skills: [
            "UX",
            "Research",
            "Analysis",
            "Brainstorming",
            "Reporting",
            "Prototyping"
          ]
        }
      ],
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
      description: "Main website for Pearl Vision, inc.",
      tasks: [{
          description: "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
          skills: ["UX", "Social Media"]
        },
        {
          description: "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
          skills: ["UX", "Brainstorming"]
        },
        {
          description: "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
          skills: ["UX"]
        },
        {
          description: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
          skills: ["UX"]
        },
        {
          description: "Conducted usability testing with potential customers and reported insights back to the team.",
          skills: ["UX", "Research", "Analysis", "Reporting"]
        },
        {
          description: "Presented initial concepts, customer feedback, and other deliverables to the clients.",
          skills: ["UX"]
        }
      ],
      path: "pearlevision"
    }]
  }
];

export const projects = [{
    title: "Find Your Calling",
    subtitle: "Adobe XD and Pattern Lab",
    description: "Redesigned elements of Find Your Calling to focus on educational institutions.",
    image: "./img/FYC.png",
    link: "https://findyourcalling.com/",
  },
  {
    title: "Jenzabar ICS 9",
    subtitle: "Bootstrap and jQuery",
    description: "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
    image: "./img/JICS9.png",
    link: "https://jenzabar.com",
  },
  {
    title: "Jenzabar CX 10",
    subtitle: "QT Creator",
    description: "Designed the front-end for the new desktop version of Jenzabar CX 10.",
    image: "./img/CX10.png",
    link: "https://jenzabar.com",
  },
  {
    title: "Jenzabar JX",
    subtitle: "SmartGWT",
    description: "Created prototype to demonstrate user interactions and responsive layouts.",
    image: "./img/JX.png",
    link: "https://jenzabar.com",
  },
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
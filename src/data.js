export const employers = [{
    title: "User Experience Designer",
    name: "Jenzabar, Inc.",
    startDate: 2015,
    endDate: "Now",
    location: "Blue Ash, Ohio",
    projects: [


      {
        name: "Table of Contents Sidebar",
        product: "Jenzabar ICS",
        date: "April 2021",
        image: "./img/JICS9_TOC.png",
        imageDesc: "Mobile and desktop view of the TOC Sidebar on the JICS Design System.",
        role: "UI Developer",
        summary: "Implemented a table of contents sidebar for the JICS Design System.",
        problem: "Updates to the Jenzabar ICS Design System outgrew the limitations of the secondary navbar and required additional navigation to help the user move through long pages of content.",
        solution: "Create a responsive sidebar which resembles a Table of Contents and floats alongside the content as the user scrolls down the page with markers that identify their location.",
        process: ["Technology Assessment", "Competitive Audit", "Functional Prototype", "Internal Review", "Frontend Development"],
        tasks: [{
            type: "Technology Assessment",
            description: "The first step towards solving the limits of the secondary navigation was to better understand the current technology stack. This allowed for the creation of a solution that did not impact the development of JICS, but focused instead on the frontend frameworks that shipped with the product. I discovered a wide assortment of UI components and scripts that were available in the various frameworks. This provided me with a list a options to choose from when analyzing some of the Table of Content navigators found elsewhere on the Internet.",
            deliverables: [{
              title: "Jenzabar ICS Tech Stack",
              image: "./img/JICS_TOC_Tech-Stack.png",
            }]
          },
          {
            type: "Competitive Audit",
            description: "The Technology Assessment helped to identify some solutions to the limits of the secondary navigation, but it did not reveal a clear pattern for navigating large amount of page content. This required further exploration into design systems, API documentation, and other resources related to the JICS Design System—plus a few modern examples to help ensure the solution included best practices from leading edge websites. I found a few similiarites between the sites and the opportunity to explore some alternatives through a functional prototype.",
            deliverables: [{
              title: "Jenzabar ICS Competitive Analysis for TOC Sidebar",
              image: "./img/JICS9_TOC_Comp-Analysis.png",
            }],
          },
          {
            type: "Functional Prototype",
            description: "During my investigation into the technology stack for JICS, I stumbled across an existing design pattern that sidestepped the issues with navigating the DOM in ASP.NET. This primarily involved styling a set of horizonal tabs to resemble a Table of Content sidebar. The solution also required a completely separate set of components—a set of accordion panels—to display the content in a mobile view. This additional complexity seemed to warrant a similar solution.",
            deliverables: [{
              title: "Jenzabar ICS TOC Sidebar Functional Prototype",
              image: "./img/JICS9_TOC_Prototype.png",
            }],
          },
          {
            type: "Internal Review",
            description: "An internal review of the functional prototype was conducted with various members of the JICS team. This included 3 project mangers, 3 developers, and 1 quality assurance tester. Each of the participants were familiar with the design pattern that was used to create the sidebar navigation. However, each of them agreed that the user experience was more suitable for form navigation, and that a simple list of page headers would suffice.",
            deliverables: [{
              title: "Jenzabar ICS TOC Sidebar Internal Review",
              image: "./img/JICS9_TOC_Internal-Review.png",
            }],
          },
          {
            type: "Frontend Development",
            description: "After the internal review, I implemented the best practices for Table of Content navigation that I uncovered in the competitive audit. This involved changes to the ASCX templates for each of pages with large amounts of content in the JICS Design System. These changes were primarily written in HTML, CSS, and JavaScript. Additional changes were made to the Sass/SCSS files that compose the CX Mobile Theme. Each of these resources were compiled and uploaded by hand to the remote server which houses the JICS Design System for CX Portlets.",
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
          finalResult: "The end result was a streamlined solution that fit seamlessly into the current product. As part of the JICS Design System, developers can leverage the Table of Content sidebar in their own projects simply by copying-and-pasting the necessary HTML, CSS, and JavaScripts into the specified location.",
          keyLearnings: "The key lesson is a reminder that simpler is better, not only in the user experience but in the developer experience as well. In both cases, more interactions require more load—either in the user's memory or the browser's. Both of which can slow down the experience quite significantly.",
          nextSteps: "After finding a wealth of unused components on the cutting room floor, I've continued to explore the tools and technology that are used to build JICS in order to improve upon the JICS Design System and supply developers with modern, responsive, and accessible design solutions."
        },
        path: "jics"
      },


      {
        name: "JICS Design System",
        product: "Jenzabar ICS",
        image: "./img/JICS9_Design-System.png",
        imageDesc: "JICS Design System",
        role: "Frontend Developer",
        summary: "Created a design system for JICS9 portlets to standardize front-end components.",
        tasks: [{
          description: "Created a design system for JICS9 portlets to standardize front-end components.",
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
          finalResult: "",
          keyLearnings: "",
          nextSteps: ""
        },
        path: "jics"
      },


      {
        name: "Career Explorer",
        product: "Find Your Calling",
        date: "January 2019",
        image: "./img/FYC_Career-Explorer.png",
        imageDesc: "Final release of the all-new Career Explorer for Find Your Calling on desktop and mobile devices.",
        role: "UX Designer",
        summary: "Created an all-new Career Explorer to help prospective students to explore their career choices.",
        problem: "Prospective students received a long list of career choices after completing their career assessment test without any means of sorting or filtering through the results.",
        solution: "Create a set of filters that enable prospective students to select certain job criteria (e.g., salary range, required education) and explore career options related to their interests.",
        process: ["Competitive Audit", "Low Fidelity Wireframes", "Interactive Prototype", "Internal Review", "Visual Design", "UI Development"],
        tasks: [{
          type: "Competitive Audit",
          description: "In order to wrap my head around the concept of a Career Explorer, I started by taking a closer look at a handful of career aptitude tests that are available on the Internet. I was mainly interested in how they displayed the test results to see what kind of filters and sorting tools they provided to their users. The majority of these sites showed related careers without any filtering tools. Only one included all of the features under consideration for Find Your Calling.",
          deliverables: [{
            title: "Find Your Calling Career Explorer Competitive Audit",
            image: "./img/FYC_Career-Exp_Comp-Audit.png",
            summary: "Find Your Calling Career Explorer Competitive Audit"
          }],
        }, {
          type: "Low Fidelity Wireframes",
          description: "I started designing the all-new Career Explorer by gathering a list of existing components from the FYC Design System including the header, footer, and navbar, along with smaller elements like the search bar and horizontal pill navbar. This allowed the team to focus on the two new components, the filters and result cards, and how they were displayed on deskop browsers, tablets, and other mobile devices.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Wireframes.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Interactive Prototype",
          description: "Once all of the business requirements were covered by the wireframes, additional states were added to the XD prototype to visualize the user paths to and from the Career Explorer. This included visualizations of the various filters and sorting tools for each of the responsive breakpoints (i.e., desktop, tablet, mobile). Links were added between each of these states to test the logic and efficiency of the user flow.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Prototype.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Internal Review",
          description: "After completing the interactive prototype, a small number of internal people were selected to provide feedback on the sorting and filtering tools. This included an account manager, a project manager, and a technical advisor. They all liked the general approach and shared some of their own ideas to help condense the content and show the career cards higher up on the page.",
          deliverables: [{
            title: "The All-New Career Explorer",
            image: "./img/FYC_Career-Exp_Review.png",
            summary: "The updates to Find Your Calling included an entirely new way to navigate career choices. This was called the Career Explorer given its ability to search and filter career choices."
          }],
        }, {
          type: "Frontend Development",
          description: "The interactive prototype that was built in Adobe XD, and based on the layout of current components, made it easy to add the new filters and card components to the FYC Design System. These updates included the creation of Mustache templates for the new components, dummy data for the filter criteria and the search results, along with the compiled Sass/SCSS for theme updates, and jQuery for user interactions.",
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
          finalResult: "Despite a short delivery schedule and an ever-increasing set of business requirements, the creation of the all-new Career Explorer was a sight to behold. Due in large part to the inclusion of and alignment with the FYC Design System, the addition of complex new features were drastically simplified by reducing them down to one or new two components. The final result was ready for production faster than previous updates.",
          keyLearnings: "Leveraging the design system during the ideation process has its benefits and drawbacks. From the technical point of view, the benefits to the development schedule were quite evident. However, this unique and somewhat magical approach can be uncomfortable for established teams and would benefit from a deep dive into understanding how design systems can benefit the creation of new features for an existing product.",
          nextSteps: "The Career Explorer would be the last update our team would make to Find Your Calling, but the lessons learned about the application, utility, and adoption of design systems would prove to be invaluable for future projects."
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
          description: "",
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
          finalResult: "",
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
          description: "Implemented responsive layouts for JICS9 portlets using Bootstrap and jQuery.",
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
          finalResult: "",
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
          description: "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
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
          finalResult: "",
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
          description: "Prototyped SmartGWT components to demonstrate user interactions and responsive layouts.",
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
        description: "",
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
        finalResult: "",
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
      // process: ["Field Research", "Ideation", "Validation", "Prototyping", "UI Design"],
      tasks: [{
          description: "Brainstormed concepts with machine operators using Gamestorming techniques to generate new ideas.",
          type: "Ideation"
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
          description: "Created annotated wireframes to support the development of Lexis Advance.",
        },
        {
          description: "Conducted concept testing and usability research with legal professionals, and delivered top level reports of my discussions to primary stakeholders. ",
        },
        {
          description: "Lead brainstorming workshops with legal professionals using Gamestorming techniques to generate new ideas.",
        },
        {
          description: "Founding member of the Customer Discovery & Innovation team which designed, prototyped, and tested the most popular concepts from our innovation pipeline.",
        },
        {
          description: "Design Lead for several innovative products including Lexis Answers.",
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
          description: "Planned the digital experience of social, mobile, and web applications for corporate clients that included P&G, Pearle Vision, and Red Bull.",
        },
        {
          description: "Lead brainstorming sessions with creative, technical, and business leads to generate new ideas.",
        },
        {
          description: "Illustrated user flows, site maps, and wireframes to assist the design and development teams.",
        },
        {
          description: "Documented features and functionality for project management, and provided competitive analysis of similar products on the market.",
        },
        {
          description: "Conducted usability testing with potential customers and reported insights back to the team.",
        },
        {
          description: "Presented initial concepts, customer feedback, and other deliverables to the clients.",
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
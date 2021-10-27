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
        role: "UX/UI Designer, Frontend Developer",
        summary: "Implemented a Table of Contents (TOC) sidebar for navigating through separate page sections on the JICS Design System.",
        image: "./img/JICS9_TOC.png",
        imageDesc: "Mobile and desktop view of the Table of Contents (TOC) Sidebar on the JICS Design System.",
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
        role: "UX/UI Designer, Frontend Developer",
        summary: "Created a new design system for Jenzabar ICS to standardize the development of front-end components.",
        image: "./img/JICS9_Design-System.png",
        imageDesc: "JICS Design System",
        tasks: [{
          description: "Created a design system for Jenzabar ICS to standardize front-end components.",
          type: "Frontend Development",
          deliverables: [{
            title: "Jenzabar ICS Design System",
            image: "./img/JICS9_Design-System.png",
            summary: "A new design system was created for Jenzabar ICS to display the front-end components in use by the CX portlets. The system leveraged the existing product to ensure the proper display of style sheets, templates, and other aspects of the design."
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
        role: "UX/UI Designer, Frontend Developer",
        summary: "Created a new Career Explorer for Find Your Calling to help prospective students explore their career choices.",
        image: "./img/FYC_Career-Explorer.png",
        imageDesc: "Final release of the all-new Career Explorer for Find Your Calling on desktop and mobile devices.",
        problem: "After completing an online career assessment, prospective students were shown a long list of career options without any means of sorting or filtering through the results.",
        solution: "Create a set of filters that enable prospective students to select certain job criteria (e.g., salary range, required education) and explore career options related to their interests.",
        process: ["Competitive Audit", "Low Fidelity Wireframes", "Interactive Prototype", "Internal Review", "Visual Design", "UI Development"],
        tasks: [{
          type: "Competitive Audit",
          description: "In order to wrap my head around the concept of a Career Explorer, I started by taking a closer look at a handful of career aptitude tests that are available on the Internet. I was mainly interested in how they displayed the test results to see what kind of filters and sorting tools they provided to their users. The majority of these sites showed related careers without any filtering tools. Only one included all of the features under consideration for Find Your Calling.",
          deliverables: [{
            title: "Competitive Audit of the new Career Explorer for Find Your Calling.",
            image: "./img/FYC_Career-Explorer_Comp-Audit.png",
          }],
        }, {
          type: "Low Fidelity Wireframes",
          description: "I started designing the all-new Career Explorer by gathering a list of existing components from the FYC Design System including the header, footer, and navbar, along with smaller elements like the search bar and horizontal pill navbar. This allowed the team to focus on the two new components, the filters and result cards, and how they were displayed on deskop browsers, tablets, and other mobile devices.",
          deliverables: [{
            title: "Initial set of low fidelity wireframes to help visualize the new Career Explorer.",
            image: "./img/FYC_Career-Explorer_Wireframes.png",
          }],
        }, {
          type: "Interactive Prototype",
          description: "Once all of the business requirements were covered by the wireframes, additional states were added to the XD prototype to visualize the user paths to and from the Career Explorer. This included visualizations of the various filters and sorting tools for each of the responsive breakpoints (i.e., desktop, tablet, mobile). Links were added between each of these states to test the logic and efficiency of the user flow.",
          deliverables: [{
            title: "Interactive prototype of the Career Explorer built with Adobe XD.",
            image: "./img/FYC_Career-Explorer_Prototype.png",
          }],
        }, {
          type: "Internal Review",
          description: "After completing the interactive prototype, a small number of internal people were selected to provide feedback on the sorting and filtering tools. This included an account manager, a project manager, and a technical advisor. They all liked the general approach and shared some of their own ideas to help condense the content and show the career cards higher up on the page.",
          deliverables: [{
            title: "Initial concept reviewed by the team (left) and the updates following the review (right).",
            image: "./img/FYC_Career-Explorer_Review.png",
          }],
        }, {
          type: "Frontend Development",
          description: "The interactive prototype that was built in Adobe XD, and based on the layout of current components, made it easy to add the new filters and card components to the FYC Design System. These updates included the creation of Mustache templates for the new components, dummy data for the filter criteria and the search results, along with the compiled Sass/SCSS for theme updates, and jQuery for user interactions.",
          deliverables: [{
              title: "The all-new Career Explorer for Find Your Calling presented on Pattern Lab.",
              image: "./img/FYC_Career-Explorer_Pattern-Lab.png",
            },
            {
              title: "Mobile view of the new Career Explorer for Find Your Calling presented on Pattern Lab.",
              image: "./img/FYC_Career-Explorer_Pattern-Lab_Mobile.png",
            },
            {
              title: "Mobile view of the new Career Explorer with content filters overlaying the career cards.",
              image: "./img/FYC_Career-Explorer_Pattern-Lab_Mobile-Filters.png",
            }
          ],
        }],
        skills: ["UX", "UI", "Visual Design", "Prototyping"],
        tools: ["Adobe XD", "VS Code", "Prepros"],
        tech: ["Bootstrap", "Sass", "Handlebars"],
        results: {
          finalResult: "Despite a short delivery schedule and an ever-increasing set of business requirements, the creation of the all-new Career Explorer was a sight to behold. Due in large part to the inclusion of and alignment with the FYC Design System, the addition of complex new features were drastically simplified by reducing them down to one or new two components. The final result was ready for production faster than previous updates.",
          keyLearnings: "Leveraging the design system during the ideation process has its benefits and drawbacks. From the technical point of view, the positive impact on the release schedule was quite evident. However, this unique and somewhat magical approach can be uncomfortable for established teams and would benefit from a deep dive into understanding how design systems can benefit the creation of new features for an existing product.",
          nextSteps: "The Career Explorer would be the last update our team would make to Find Your Calling, but the lessons learned about the application, utility, and adoption of design systems would prove to be invaluable for future projects."
        },
        path: "fyc"
      },

      {
        name: "Pattern Lab",
        product: "Find Your Calling",
        image: "./img/FYC_Pattern-Lab.png",
        imageDesc: "Pattern Lab",
        role: "UX/UI Designer, Frontend Developer",
        summary: "Implemented Pattern Lab with Handlebars/SCSS to test and deliver front-end components for Find Your Calling.",
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
        role: "UX/UI Designer, Frontend Developer",
        summary: "Implemented fully responsive layouts on a wide assortment of Jenzabar ICS portlets using Bootstrap and jQuery.",
        problem: "",
        solution: "",
        process: [],
        tasks: [{
          description: "Implemented responsive layouts for Jenzabar ICS using Bootstrap and jQuery.",
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
        role: "UX/UI Designer, Frontend Developer",
        summary: "Created new base theme to implement the new branding guidelines for Jenzabar products with Sass CSS.",
        tasks: [{
          description: "Designed new base theme to implement the new branding guidelines for Jenzabar products.",
          type: "UI Design",
          deliverables: [{
            title: "Jenzabar ICS Design System",
            image: "./img/JICS9_CX-Mobile-Theme.png",
            summary: "Created a new base theme for Jenzabar ICS which incorporated the new branding guidelines for Jenzabar products. Special attention was given to the Sass variables so as to make customization easier for the end user."
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
        date: "April 2017",
        role: "UX/UI Designer",
        summary: "Designed the next generation of Jenzabar CX for campus-wide administration on PC and Macintosh systems.",
        image: "./img/CX10.png",
        imageDesc: "The home screen for Jenzabar CX 10 for Windows along with a prototype of the Vendor Entry screen.",
        problem: "Jenzabar CX users were primarily accessing their data through a Telnet client. The outdated interface was challenging for new users and somewhat embarrassing to look at.",
        solution: "Create a new desktop application for Mac and Windows that incorporates a modern app-based approach to a variety of customizable screens and applications.",
        process: ["Requirements Gathering", "Competitive Audit", "Low Fidelity Wireframes", "Interactive Prototype", "Usability Testing", "Sentiment Analysis", "Research Reporting", "Visual Design"],
        tasks: [

          {
            type: "Requirements Gathering",
            description: "When your old product is primarily accessible through a text-based Telnet client, it goes without saying that there is plenty of feedback on the user experience, especially when it's been on the market for decades. Gathering the feedback involved discussions with project managers, developers, and current users of the product, then prioritizing the list based on the amount of attention that each issue received.",
            deliverables: [{
              image: "./img/CX10_Requirements-Gathering.png",
              title: "Base requirements gathered from project managers, developers, and current users of Jenzabar CX. Overlaid on top of the PuTTY application which customers use to access the product."
            }, ],
          },

          {
            type: "Competitive Audit",
            description: "While there are plenty of direct competitors to Jenzabar CX within the marketplace for Higher Education, including similar products for different platforms offered by Jenzabar, there weren't many that were native to the desktop experience. This required looking at indirect competitors in the open source arena, alongside more modern desktop software that used an app-based approach to their content channels.",
            deliverables: [{
              image: "./img/CX10_Competitive-Audit.png",
              title: "Spreadsheet of the competitors to Jenzabar CX alongside modern tools for group interaction with online documents."
            }, ],
          },

          {
            type: "Low Fidelity Wireframes",
            description: "While my knowledge of CX screens was limited, I knew that customers could navigate through available screens in a basic menu structure. This translated well into  sidebar navigation but was an awkward fit for the app metaphor. Additional testing would be necessary to see how well current menu data fit into separate application categories, and whether customers would understand the new paradigm.",
            deliverables: [{
              image: "./img/CX10_Wireframes.png",
              title: "Early set of wireframes used to visualize the app sidebar, sidebar menu, and the basic layout for existing CX screens. Creating with Adobe InDesign."
            }, ],
          },

          {
            type: "Interactive Prototype",
            description: "An interactive prototype was created to visualize app metaphor and how it was expressed both in the app sidebar and in the sidebar navigation. The prototype also included multiple screens from CX to show how existing templates—which were defined for an 80-column screen due for Telnet access—could fit within a responsive layout that could accommodate a variety of desktop resolutions.",
            deliverables: [{
              image: "./img/CX10_Prototype.png",
              title: "Interactive prototype of the navigation features for the new Jenzabar CX 10. Created with Adobe XD."
            }, ],
          },

          {
            type: "Usability Testing",
            description: "A cross sample of customers were interviewed during the 2017 Jenzabar Annual Meeting (JAM). This included 5 managers, 4 directors, 1 CIO, and 1 developer, for a total of 11 users with plenty of experience using Jenzabar CX products. They sat down with me for a 1-on-1 conversation that focused on an early release of the new CX 10 and followed a discussion guide which directed participants through the new features.",
            deliverables: [{
              image: "./img/CX10_Usability-Testing.png",
              title: "The discussion guide used to conduct the usability test overlaid on top of the early release of CX10 that was used during the test."
            }, ],
          },

          {
            type: "Sentiment Analysis",
            description: "Recordings of the participants of the usability test were captured on Evernote in order to provide a transcript of each conversation. This enabled me to identify certain themes in each section of the discussion guide. After tagging the amount of times that each topic was mentioned in the discussion, I was able to paint a picture of how popular (or unpopular) each of the new features were for potential users.",
            deliverables: [{
              image: "./img/CX10_Sentiment-Analysis.png",
              title: "Spreadsheet of the customers interviewed for the usability test and their comments regarding key features of CX 10, alongside a photo of the recordings that were used to conduct the sentiment analysis."
            }, ],
          },

          {
            type: "Research Reporting",
            description: "A research report was written for internal folks to get a better idea of what our customers thought about the new Jenzabar CX 10. It included the methodology, key takeaways, along with anonymous quotes taken directly from the customers. It also included some areas of the design that need improvement, plus other discoveries that came out of the interviews but weren't a part of the discussion guide.",
            deliverables: [{
              image: "./img/CX10_Executive-Summary.png",
              title: "Research report of the sentiment analysis for the new Jenzabar CX 10."
            }, ],
          },

          {
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
                image: "./img/CX10_Home.png",
                title: "The home screen for CX 10 provides users with a searchable directory of their available applications."
              },
              {
                image: "./img/CX10_Login.png",
                title: "The desktop version of CX10 provided customers with secure access to their institutional data."
              },
              {
                image: "./img/CX10_User-Settings.png",
                title: "The settings screen enabled users to customize the font sizes and colors of their local client."
              },
              {
                image: "./img/CX10_File-Browser.png",
                summary: "The file browser enabled customers to upload text files and other documents to their internal servers."
              },
            ]
          }
        ],
        results: {
          finalResult: "The release of Jenzabar CX 10 was a big success story for the product. Even though the company was currently in the process of releasing a completely new platform called J1, older clients who did not wish to upgrade were ecstatic to switch over to a desktop application that replaced their old Telnet clients. Not only was it easier to use, but it was much less embarrassing to look at.",
          keyLearnings: "Over the course of the project we were constantly reminded of how important the keyboard was to our customers. Our usability tests revealed that the mouse only slowed down their input, and that keyboard shortcuts were critical to their efficiency. This included keyboard access to the search menu and other new features.",
          nextSteps: "Designing the desktop client for Jenzabar CX 10 was only the first step in a very long journey to recreate the entire CX universe. Thankfully the lessons we learned at the outset of our journey proved to be invaluable to future development and business decisions."
        },
        path: "cx"
      },

      {
        name: "Lead Management",
        product: "Jenzabar JX",
        date: "September 2015",
        imageDesc: "Lead Management for Jenzabar JX",
        image: "./img/JX-SEM_Lead-Management.png",
        role: "UX Designer",
        summary: "Designed the new Lead Manager for Jenzabar JX to help convert leads into engaged candidates.",
        problem: "Schools usually purchase names of leads from separate vendors and reach out to the names through digital marketing in order to convert the lead into an engaged candidate.",
        solution: "Create a set of features for Jenzabar JX to import and manage leads according to a pre-defined communication plan and convert them into candidates for the institution.",
        process: ["Requirements Gathering", "Low Fidelity Wireframes", "Internal Review", "Functional Prototype", "Style Guide"],
        tasks: [


          {
            type: "Requirements Gathering",
            description: "The user stories written by the Product Manager were a big part of understanding the user goals. They provided context to better understand the new features from a variety of user perspectives, including the goals of the Enrollment VP as well as the primary duties of the Leads Manager. User stories also helped contextualize the developer issues which were entered into JIRA that related to the UI of the product.",
            deliverables: [{
                image: "./img/JX-SEM_User-Stories_Lead-Management.png",
                title: "User Stories document for Lead Management."
              },
              {
                image: "./img/JX-SEM_Requirements-Gathering_Lead-Management.png",
                title: "JIRA list of features to support the management of leads."
              },
            ],
          },

          {
            type: "Low Fidelity Wireframes",
            description: "After gathering all of the requirements, I used the library of visual components that I had been creating in Adobe InDesign to create a low fidelity set of wirefames to review with the PM. These were exported as an Adobe PDF along with additional links between the pages to show the user flow through the application. Comments gathered from the team were added to the document and uploaded to JIRA to assist with future revisions.",
            deliverables: [{
                image: "./img/JX-SEM_Wireframes_Lead-Maintenance.png",
                title: "Low fidelity wirefame of the lead maintenance tab for Lead Management."
              },
              {
                image: "./img/JX-SEM_Wireframes_Lead-Maintenance_Lead.png",
                title: "Low fidelity wirefame of the lead view of the lead maintenance tab."
              },
            ],
          },

          {
            type: "Functional Prototype",
            description: "Once the final wireframes were approved by the Product Manager, I created a new tab for Lead maintenance in my functional prototype. I built the prototype using Bootstrap along with all of the fonts, colors, images, and layout currently being used by the product. Screenshots of the prototype were added to the corresponding JIRA issue. Any variations to the user interface were subsequently added to the JX Style Guide.",
            deliverables: [{
                image: "./img/JX-SEM_Prototype_Lead-Maintenance.png",
                title: "Functional prototype of the lead maintenance tab for Lead Management."
              },
              {
                image: "./img/JX-SEM_Prototype_Lead-Maintenance_Lead.png",
                title: "Functional prototype of the lead record from the lead maintenance tab."
              },
              {
                image: "./img/JX-SEM_Prototype_Lead-Maintenance_Lead-Collapsed.png",
                title: "Functional prototype of the lead record from the lead maintenance tab with the details section fully expanded."
              },
            ],
          },

          {
            type: "Style Guide",
            description: "The JX Style Guide was an evolution of the UI Specifications which were in use by the development team. The changes primarily focused on the design and layout of individual components, as opposed to detailing the functionality of the new pages. Any variations to the current styles were added to the official document that was maintained on Confluence. These included component names alongside screenshots of their implementations.",
            deliverables: [{
              image: "./img/JX-SEM_Style-Guide.png",
              title: "Common Elements of the JX Style Guide on Confluence featuring the lead record from the lead maintenance tab."
            }, ],
          },

        ],
        skills: ["UX", "Prototyping"],
        tools: [
          "Adobe InDesign",
          "Visual Studio"
        ],
        tech: ["SmartGWT"],
        results: {
          finalResult: "The design of the new Lead Management for Jenzabar JX was a breakthrough in delivering high quality design assets to offshore developers. Visualizing the fonts, colors, and icons alongside the intended functionality marked a new era towards improving the look and feel of products built using SmartGWT components.",
          keyLearnings: "However, even though it was possible to recreate Java-based SmartGWT components using Bootstrap HTML/CSS, there was still quite a difference in how the components ultimately appeared in the product.",
          nextSteps: "While rough prototypes are useful to verify concepts in the ideation phase, an actual environment that consists of the current technology stack would be more useful when visualizing new features in production."
        },
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
      role: "UX/UI Designer",
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
    projects: [

      {
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
        path: "lexisnexis"
      },


      {
        name: "Lexis Practice Advisor",
        product: "Lexis Advance",
        role: "UX Designer",
        date: "April 2021",
        image: "./img/Lexis_Practice-Advisor.png",
        imageDesc: "The 2017 release of Lexis Practice Advisor and the Florida Businesses & Commercial practice area.",
        summary: "Redesigned Lexis Practice Advisor to help transactional lawyers navigate through forms and precedence for specific practice areas.",
        problem: "Transactional lawyers are challenged to stay up to date with all of the requisite forms and precedents for a specific practice area.",
        solution: "Create a navigational widget that enables users to explore the context of any given practice area in order to complete a transaction.",
        process: ["Requirements Gathering", "Brainstorming Session", "Competitive Audit", "Low Fidelity Wireframes", "Concept Validation", "Research Reporting"],
        tasks: [

          {
            type: "Requirements Gathering",
            description: "",
            deliverables: [{
                title: "Customer imperatives for practicing transactional law gathered by the CDI team.",
                image: "./img/Lexis_Practice-Advisor_Customer-Imperatives.png",
              },
              {
                title: "Small Law Associate Persona created by the CDI Team.",
                image: "./img/Lexis_Practice-Advisor_Persona_SL-Associate.png",
              },
              {
                title: "Survey of transactional issues found on select legal websites.",
                image: "./img/Lexis_Practice-Advisor_Firm-Website-Topic-Survey.png",
              },
            ],
          },

          {
            type: "Brainstorming Session",
            description: "",
            deliverables: [{
              title: "Photograph of the results of the white boarding session for Lexis Practice Advisor.",
              image: "./img/Lexis_Practice-Advisor_Mind-map.png"
            }],
          },

          {
            type: "Competitive Audit",
            description: "",
            deliverables: [{
              title: "Screenshots gathered from Socrates and LegalZoom websites.",
              image: "./img/Lexis_Practice-Advisor_Competitive-Audit.png"
            }],
          },

          {
            type: "Low Fidelity Wireframes",
            description: "",
            deliverables: [{
                title: "Browsing concept for Lexis Practice Advisor.",
                image: "./img/Lexis_Practice-Advisor_Concept_Browse.png"
              },
              {
                title: "Search bar concept for Lexis Practice Advisor.",
                image: "./img/Lexis_Practice-Advisor_Concept_Search-bar.png"
              },
              {
                title: "Fly-out concept for Lexis Practice Advisor.",
                image: "./img/Lexis_Practice-Advisor_Concept_Legal-Topics.png"
              },
            ],
          },

          {
            type: "Concept Validation",
            description: "",
            deliverables: [{
              title: "Overview of the research methods used to validate the new concepts.",
              image: "./img/Lexis_Practice-Advisor_Customer-Research.png"
            }],
          },

          {
            type: "Research Reporting",
            description: "",
            deliverables: [{
              title: "Customer feedback comparing the two new navigation types.",
              image: "./img/Lexis_Practice-Advisor_Feedback_Legal-Topics.png"
            },{
              title: "Customer feedback on the new flyout navigation concept.",
              image: "./img/Lexis_Practice-Advisor_Feedback_Fly-out.png"
            }],
          },

        ],
        skills: ["UX", "Brainstorming", "Testing", "Research", "Analysis", "Reporting", "Prototyping"],
        path: "lexisnexis"
      },


    ],
  },

  {
    title: "Experience Planner",
    name: "Bridge Worldwide",
    startDate: 2009,
    endDate: 2010,
    location: "Cincinnati, Ohio",
    projects: [


      {
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
      }


    ]
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
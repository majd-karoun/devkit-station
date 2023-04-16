const resources = [
  {
    name: "Interactive Landscapes",
    url: "https://interactive.landscapes.eco/",
    type: "HTML",
    description: "An interactive and educational project that showcases different landscapes and ecosystems, around the world, using a combination of HTML, CSS, and JavaScript, that provides a set of tools and features, for exploring and learning about various natural environments and species."
  },
  {
    name: "Dashed Lines",
    url: "https://css-tricks.com/examples/DashedLines/",
    type: "HTML",
    description: "A tutorial and demo that explains how to create and style dashed and dotted lines, using only HTML and CSS, that provides a set of examples and techniques, for generating and customizing various types of lines, with a focus on design and creativity."
  },
  {
    name: "Solved by Flexbox",
    url: "https://philipwalton.github.io/solved-by-flexbox/",
    type: "HTML",
    description: "A tutorial and resource that explains how to use CSS flexbox, to solve common layout and alignment problems, in web design and development, that provides a set of examples and code snippets, for generating and customizing various types of layouts, with a focus on responsiveness and efficiency."
  },
  {
    name: "Nice Page Transitions",
    url: "https://tympanus.net/Development/PageTransitions/",
    type: "HTML",
    description: "A collection of creative and smooth page transition effects, using only HTML, CSS, and JavaScript, that provides a set of examples and demos, for generating and customizing various types of transitions, with a focus on user experience and engagement."
  },
  {
    name: "Neumorphism",
    url: "https://neumorphism.io/",
    type: "HTML",
    description: "A showcase and tutorial that explains how to create and apply neumorphic design, using only HTML, CSS, and JavaScript, that provides a set of examples and tools, for generating and customizing various types of neumorphic elements and components, with a focus on modernity and elegance."
  },
  {
    name: "HTML9 Responsive Boilerstrap JS",
    url: "https://html9responsiveboilerstrapjs.com/",
    type: "HTML",
    description: "A satirical and humorous website that parodies the hype and complexity of web development, using a mix of nonsensical and hilarious jargon and buzzwords, that provides a set of absurd and ridiculous code snippets and examples, for generating and customizing various types of layouts and components, with a focus on entertainment and irony."
  },
  {
    name: "CSS Text",
    url: "https://css-tricks.com/almanac/properties/t/text/",
    type: "HTML",
    description: "A comprehensive guide and reference, that explains how to style and format text, using CSS, that provides a set of properties and values, for generating and customizing various aspects of text, with a focus on readability and accessibility."
  },
  {
    name: "Let's Make a Grid",
    url: "https://cssgrid.io/",
    type: "HTML",
    description: "A free and interactive video course, that teaches how to use CSS grid, to create and manage complex and responsive layouts, in web design and development, that provides a set of lessons and exercises, for mastering various aspects of grid, with a focus on practicality and hands-on experience."
  },
  {
    name: "Viewport Units Buggyfill",
    url: "https://github.com/rodneyrehm/viewport-units-buggyfill",
    type: "HTML",
    description: "A JavaScript library that enables the use of viewport units (vh, vw, vmin, vmax) in older browsers that do not support them, by calculating and updating them dynamically, based on the dimensions of the viewport and the content."
  },
  {
    name: "HTML Online",
    url: "https://html-online.com/",
    type: "HTML",
    description: "An online HTML editor and converter, that allows users to create, edit, and preview HTML code, using a visual and intuitive interface, that provides a set of tools and features, for generating and customizing various types of elements and components."
  },
  {
    name: "CSS Doodle",
    url: "https://css-doodle.com/",
    type: "HTML",
    description: "A web-based platform for creating and sharing generative art and animations, using CSS and HTML, that provides a set of properties and functions, for generating and customizing various shapes and patterns, with a focus on creativity and experimentation."
  },
  {
    name: "Hint.css",
    url: "https://kushagra.dev/lab/hint/",
    type: "HTML",
    description: "A lightweight and flexible library for adding tooltips and hints, to HTML elements, using CSS and JavaScript, that provides a set of styles and options, for generating and customizing various types of hints, with a focus on usability and accessibility."
  },
  {
    name: "CSS Grid Generator",
    url: "https://cssgrid-generator.netlify.app/",
    type: "HTML",
    description: "A web-based tool for generating and customizing CSS grid layouts, using a visual and interactive interface, that provides a set of options and properties, for creating and managing various types of grids, with a focus on efficiency and simplicity."
  },
  {
    name: "Grain",
    url: "https://grain.design/",
    type: "HTML",
    description: "A library of free and customizable SVG illustrations, icons, and animations, that can be used in web design and development, that provides a set of tools and features, for downloading and customizing various types of graphics, with a focus on quality and diversity."
  },
  {
    name: "Shape Divider",
    url: "https://www.shapedivider.app/",
    type: "HTML",
    description: "A web-based tool for generating and customizing shape dividers, that can be used to separate sections and elements in web pages, using SVG and CSS, that provides a set of options and styles, for creating and modifying various types of dividers, with a focus on creativity and innovation."
  },
  {
    name: "Gutenberg Hub",
    url: "https://www.gutenberghub.com/",
    type: "HTML",
    description: "A marketplace and library of free and premium blocks, templates, and plugins, for the WordPress Gutenberg editor, that provides a set of tools and features, for enhancing and extending the functionality and design of WordPress websites and blogs."
  },
  {
    name: "WebSlides",
    url: "https://webslides.tv/",
    type: "HTML",
    description: "A web-based framework for creating and presenting slide decks and presentations, using HTML, CSS, and JavaScript, that provides a set of tools and features, for designing and customizing various types of slides, with a focus on interactivity and engagement."
  },
  {
    name: "Nano ID",
    url: "https://zelark.github.io/nano-id-cc/",
    type: "HTML",
    description: "A small and secure library for generating and validating unique and random IDs, using JavaScript, that provides a set of functions and options, for generating and customizing various types of IDs, with a focus on simplicity and reliability."
  },
  {
    name: "Typed.js",
    url: "https://mattboldt.com/demos/typed-js/",
    type: "HTML",
    description: "A library for creating and animating typed text, in web pages and interfaces, using JavaScript and HTML, that provides a set of options and styles, for generating and customizing various types of effects and behaviors, with a focus on user experience and creativity."
  },
  {
    name: "WebAssembly Explorer",
    url: "https://mbebenita.github.io/WasmExplorer/",
    type: "HTML",
    description: "A web-based tool for exploring and analyzing WebAssembly (WASM) code, using a visual and interactive interface, that provides a set of features and functions, for testing and debugging various types of WASM modules and functions, with a focus on performance and optimization."
  },
  {
    name: "Splitting.js",
    url: "https://splitting.js.org/",
    type: "HTML",
    description: "A JavaScript library for splitting and animating text, in web pages and interfaces, using HTML and CSS, that provides a set of options and styles, for generating and customizing various types of text effects and animations, with a focus on versatility and ease of use."
  },
  {
    name: "Thimble",
    url: "https://thimble.mozilla.org/",
    type: "HTML",
    description: "An online code editor and publishing platform, that allows users to create and share HTML, CSS, and JavaScript projects, using a visual and intuitive interface, that provides a set of tools and features, for designing and customizing various types of elements and components."
  },
  {
    name: "JigSaw",
    url: "https://jigsaw.w3.org/css-validator/",
    type: "HTML",
    description: "A CSS validation service and tool, provided by the W3C (World Wide Web Consortium), that checks and analyzes CSS code, for syntax errors and compatibility issues, with a focus on standards compliance and best practices."
  },
  {
    name: "LoadJS",
    url: "https://github.com/muicss/loadjs",
    type: "HTML",
    description: "A lightweight and fast JavaScript loader, that allows users to load and execute JavaScript files, asynchronously and in parallel, using a simple and intuitive API, that provides a set of options and methods, for optimizing and managing various types of scripts, with a focus on performance and scalability."
  },
  {
    name: "Picnic CSS",
    url: "https://picnicss.com/",
    type: "HTML",
    description: "A lightweight and minimalistic CSS framework, that provides a set of styles and components, for building and styling responsive web pages and interfaces, with a focus on simplicity and flexibility."
  },
  {
    name: "Flowy",
    url: "https://github.com/alyssaxuu/flowy",
    type: "HTML",
    description: "A web-based tool for creating and editing flowcharts and diagrams, using a drag-and-drop interface and HTML, CSS, and JavaScript, that provides a set of features and options, for generating and customizing various types of charts and visualizations, with a focus on usability and interactivity."
  },
  {
    name: "Pico.css",
    url: "https://picocss.com/",
    type: "HTML",
    description: "A lightweight and modular CSS framework, that provides a set of styles and components, for building and styling web pages and interfaces, with a focus on modularity and ease of use."
  },
  {
    name: "HTML5 Up",
    url: "https://html5up.net/",
    type: "HTML",
    description: "A collection of free and responsive HTML templates, for building and designing web pages and interfaces, that provides a set of designs and layouts, for various types of projects and industries, with a focus on quality and modernity."
  },
  {
    name: "ScrollTrigger",
    url: "https://greensock.com/scrolltrigger/",
    type: "HTML",
    description: "A JavaScript plugin for creating and managing scroll-based animations and effects, in web pages and interfaces, using HTML, CSS, and JavaScript, that provides a set of functions and options, for generating and customizing various types of behaviors and transitions, with a focus on performance and flexibility."
  },
  {
    name: "CodePen",
    url: "https://codepen.io/",
    type: "HTML",
    description: "An online code editor and social development platform, that allows users to create, share, and discover HTML, CSS, and JavaScript projects, using a visual and collaborative interface, that provides a set of tools and features, for designing and coding various types of elements and components."
  },
  {
    name: "Cubic Bezier",
    url: "https://cubic-bezier.com/",
    type: "HTML",
    description: "An online tool for generating and testing cubic-bezier functions, that can be used to create and customize easing curves, in web animations and transitions, using a visual and intuitive interface, that provides a set of options and previews, for experimenting and fine-tuning various types of curves and timings."
  },
  {
    name: "Quill",
    url: "https://quilljs.com/",
    type: "HTML",
    description: "A JavaScript library for creating and editing rich-text content, in web pages and interfaces, using a customizable and extensible API, that provides a set of functions and options, for generating and managing various types of formatting and styling, with a focus on user experience and accessibility."
  },
  {
    name: "Browsersync",
    url: "https://www.browsersync.io/",
    type: "HTML",
    description: "A web development tool for synchronizing and testing changes across multiple devices and browsers, using a local server and a set of automation and optimization features, that provide a seamless and efficient workflow for web development and testing."
  },
  {
    name: "Knacss",
    url: "https://www.knacss.com/",
    type: "HTML",
    description: "A responsive and modular CSS framework, that provides a set of styles and components, for building and styling web pages and interfaces, with a focus on accessibility and performance."
  },
  {
    name: "Baffle.js",
    url: "https://camwiegert.github.io/baffle/",
    type: "HTML",
    description: "A JavaScript library for obfuscating and revealing text, in web pages and interfaces, using a customizable and animated API, that provides a set of options and effects, for generating and managing various types of obfuscation and encryption, with a focus on creativity and security."
  },
  {
    name: "Bulma",
    url: "https://bulma.io/",
    type: "HTML",
    description: "A modern and flexible CSS framework, that provides a set of styles and components, for building and styling responsive web pages and interfaces, with a focus on modularity and extensibility."
  },
  {
    name: "Twill",
    url: "https://twill.io/",
    type: "HTML",
    description: "An open-source and modular CMS (Content Management System), built on top of Laravel and Vue.js, that provides a set of tools and features, for creating and managing various types of content, with a focus on simplicity and customization."
  },
  {
    name: "Tailwind Toolbox",
    url: "https://www.tailwindtoolbox.com/",
    type: "HTML",
    description: "A collection of free and customizable HTML templates and components, that use the Tailwind CSS framework, for building and designing web pages and interfaces, that provides a set of designs and layouts, for various types of projects and industries, with a focus on flexibility and ease of use."
  },
  {
    name: "CSS Gradient Animator",
    url: "https://www.gradient-animator.com/",
    type: "HTML",
    description: "An online tool for creating and animating CSS gradients, in web pages and interfaces, using a visual and interactive interface, that provides a set of options and presets, for generating and customizing various types of gradients and animations, with a focus on creativity and innovation."
  },
  {
    name: "Simple Grid",
    url: "https://simplegrid.io/",
    type: "HTML",
    description: "A lightweight and responsive CSS grid system, that provides a set of classes and styles, for building and designing web pages and interfaces, with a focus on simplicity and compatibility."
  },
  {
    name: "CSS Doodle",
    url: "https://css-doodle.com/",
    type: "HTML",
    description: "A web-based tool for creating and animating visual patterns and shapes, using CSS and HTML, that provides a set of options and presets, for generating and customizing various types of designs and animations, with a focus on creativity and experimentation."
  },
  {
    name: "Yellin",
    url: "https://yellin.dev/",
    type: "HTML",
    description: "A web-based tool for creating and editing SVG icons and illustrations, using a simple and intuitive interface and a set of drawing and editing tools, that provides a set of features and options, for generating and customizing various types of icons and graphics, with a focus on versatility and ease of use."
  },
  {
    name: "VuePress",
    url: "https://vuepress.vuejs.org/",
    type: "HTML",
    description: "A Vue.js-based static site generator, that provides a set of tools and features, for creating and publishing documentation and websites, with a focus on simplicity and performance."
  },
  {
    name: "BEMIT",
    url: "https://css-tricks.com/bemit-naming-convention/",
    type: "HTML",
    description: "A naming convention and methodology, for creating and managing CSS classes and styles, in web pages and interfaces, that provides a set of guidelines and best practices, for structuring and organizing various types of elements and components, with a focus on readability and maintainability."
  },
  {
    name: "Umbrella JS",
    url: "https://umbrellajs.com/",
    type: "HTML",
    description: "A small and fast JavaScript library, for DOM manipulation and event handling, in web pages and interfaces, that provides a set of functions and methods, for selecting and modifying various types of elements and attributes, with a focus on simplicity and performance."
  },
  {
    name: "Visual Box Model",
    url: "https://chrome.google.com/webstore/detail/visual-box-model/epejoicbhllgiimigokgjdoijnpaphdp",
    type: "HTML",
    description: "A Chrome extension, for inspecting and visualizing the box model and layout, of HTML elements and components, in web pages and interfaces, that provides a set of tools and features, for measuring and analyzing various types of properties and dimensions, with a focus on design and debugging."
  },
  {
    name: "CodyHouse",
    url: "https://codyhouse.co/",
    type: "HTML",
    description: "A collection of free and customizable HTML templates and components, for building and designing web pages and interfaces, that provides a set of designs and layouts, for various types of projects and industries, with a focus on innovation and creativity."
  },
  {
    name: "Markup Validation Service",
    url: "https://validator.w3.org/",
    type: "HTML",
    description: "A web-based tool and service, provided by the W3C (World Wide Web Consortium), for validating and checking the syntax and compatibility, of HTML code and documents, with a focus on standards compliance and best practices."
  },
  {
    name: "BrandColors",
    url: "https://brandcolors.net/",
    type: "Design",
    description: "A collection of brand color codes, for various companies and organizations, that provides a set of colors and palettes, for designing and styling various types of elements and components, with a focus on consistency and accuracy."
  },
  {
    name: "Coolors",
    url: "https://coolors.co/",
    type: "Design",
    description: "A web-based tool for generating and exploring color palettes, for web and graphic design, using a visual and interactive interface, that provides a set of options and presets, for creating and customizing various types of color schemes and harmonies, with a focus on usability and accessibility."
  },
  {
    name: "Design Cuts",
    url: "https://www.designcuts.com/",
    type: "Design",
    description: "An online marketplace and community, for buying and selling design resources and assets, that provides a set of products and deals, for various types of design projects and industries, with a focus on quality and affordability."
  },
  {
    name: "Designspiration",
    url: "https://www.designspiration.com/",
    type: "Design",
    description: "An online platform and community, for discovering and sharing design inspiration and ideas, that provides a set of curated galleries and collections, for various types of design styles and trends, with a focus on creativity and innovation."
  },
  {
    name: "CSS Scan",
    url: "https://getcssscan.com/",
    type: "Design",
    description: "A browser extension and tool, for inspecting and copying CSS styles and properties, from any web page, that provides a set of features and options, for analyzing and reproducing various types of design elements and components, with a focus on efficiency and productivity."
  },
  {
    name: "UI Gradient",
    url: "https://uigradients.com/",
    type: "Design",
    description: "A collection of gradient backgrounds and patterns, for web and graphic design, that provides a set of color combinations and styles, for designing and styling various types of interfaces and layouts, with a focus on aesthetics and usability."
  },
  {
    name: "Humaaans",
    url: "https://www.humaaans.com/",
    type: "Design",
    description: "A web-based tool and library, for creating and customizing vector illustrations and characters, for web and graphic design, that provides a set of elements and features, for generating and adapting various types of poses and expressions, with a focus on diversity and inclusion."
  },
  {
    name: "Logobly",
    url: "https://logobly.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing logo designs, for various types of businesses and organizations, that provides a set of templates and features, for generating and refining various types of visual identities and branding elements, with a focus on simplicity and affordability."
  },
  {
    name: "Type Wolf",
    url: "https://www.typewolf.com/",
    type: "Design",
    description: "An online resource and community, for discovering and learning about typography and typeface design, that provides a set of articles and examples, for various types of typographic styles and trends, with a focus on education and inspiration."
  },
  {
    name: "Abstract",
    url: "https://www.abstract.com/",
    type: "Design",
    description: "A web-based platform and tool, for collaborating and managing design projects and teams, that provides a set of features and integrations, for creating and sharing various types of design assets and workflows, with a focus on organization and efficiency."
  },
  {
    name: "Pixeltrue",
    url: "https://www.pixeltrue.com/",
    type: "Design",
    description: "A collection of free and premium vector illustrations and icons, for web and graphic design, that provides a set of styles and themes, for various types of projects and industries, with a focus on quality and flexibility."
  },
  {
    name: "Typeform",
    url: "https://www.typeform.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and managing online forms and surveys, that provides a set of features and templates, for generating and customizing various types of user interactions and feedback, with a focus on usability and engagement."
  },
  {
    name: "Designmodo",
    url: "https://designmodo.com/",
    type: "Design",
    description: "An online resource and community, for learning and sharing about web and graphic design, that provides a set of articles and tutorials, for various types of design topics and trends, with a focus on innovation and creativity."
  },
  {
    name: "Shape Divider",
    url: "https://www.shapedivider.app/",
    type: "Design",
    description: "A web-based tool and service, for generating and customizing SVG shape dividers, for web and graphic design, that provides a set of options and presets, for creating and applying various types of divider styles and patterns, with a focus on aesthetics and uniqueness."
  },
  {
    name: "DesignEvo",
    url: "https://www.designevo.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing logo designs, for various types of businesses and organizations, that provides a set of templates and features, for generating and refining various types of visual identities and branding elements, with a focus on simplicity and affordability."
  },
  {
    name: "Lapa Ninja",
    url: "https://www.lapa.ninja/",
    type: "Design",
    description: "An online collection of curated web designs and templates, for various types of projects and industries, that provides a set of examples and inspirations, for designing and developing various types of websites and interfaces, with a focus on aesthetics and usability."
  },
  {
    name: "Neumorphism.io",
    url: "https://neumorphism.io/",
    type: "Design",
    description: "A web-based tool and generator, for creating and customizing neumorphic UI designs and elements, for web and graphic design, that provides a set of options and presets, for generating and fine-tuning various types of shadows and gradients, with a focus on modernity and trendiness."
  },
  {
    name: "MockFlow",
    url: "https://mockflow.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and sharing wireframes and prototypes, for various types of projects and industries, that provides a set of templates and features, for generating and testing various types of user experiences and interactions, with a focus on collaboration and efficiency."
  },
  {
    name: "Designer News",
    url: "https://www.designernews.co/",
    type: "Design",
    description: "An online community and forum, for sharing and discussing web and graphic design news and topics, that provides a set of articles and discussions, for various types of design trends and technologies, with a focus on community and learning."
  },
  {
    name: "Shape.so",
    url: "https://shape.so/",
    type: "Design",
    description: "A web-based tool and library, for creating and customizing vector illustrations and icons, for web and graphic design, that provides a set of elements and features, for generating and adapting various types of shapes and graphics, with a focus on simplicity and versatility."
  },
  {
    name: "Illustrations",
    url: "https://illlustrations.co/",
    type: "Design",
    description: "A collection of free and customizable vector illustrations and graphics, for web and graphic design, that provides a set of styles and themes, for various types of projects and industries, with a focus on diversity and inclusivity."
  },
  {
    name: "InVision",
    url: "https://www.invisionapp.com/",
    type: "Design",
    description: "A web-based platform and tool, for creating and sharing designs and prototypes, for various types of projects and industries, that provides a set of features and integrations, for designing and collaborating on various types of user experiences and interfaces, with a focus on innovation and automation."
  },
  {
    name: "Icons8",
    url: "https://icons8.com/",
    type: "Design",
    description: "A library of free and paid icons, for various types of projects and industries, that provides a set of styles and formats, for designing and customizing various types of visual elements and components, with a focus on consistency and quality."
  },
  {
    name: "Undraw",
    url: "https://undraw.co/",
    type: "Design",
    description: "A collection of free and customizable vector illustrations and graphics, for web and graphic design, that provides a set of styles and themes, for various types of projects and industries, with a focus on diversity and modernity."
  },
  {
    name: "Muzli",
    url: "https://muz.li/",
    type: "Design",
    description: "An online resource and community, for discovering and sharing web and graphic design news and topics, that provides a set of articles and examples, for various types of design trends and technologies, with a focus on innovation and inspiration."
  },
  {
    name: "The Noun Project",
    url: "https://thenounproject.com/",
    type: "Design",
    description: "A library of free and paid icons and symbols, for various types of projects and industries, that provides a set of styles and themes, for designing and customizing various types of visual elements and components, with a focus on clarity and simplicity."
  },
  {
    name: "Mockuuups Studio",
    url: "https://mockuuups.studio/",
    type: "Design",
    description: "A desktop app and tool, for creating and customizing mockups and prototypes, for various types of projects and industries, that provides a set of templates and features, for generating and testing various types of user interfaces and experiences, with a focus on efficiency and productivity."
  },
  {
    name: "Design Better",
    url: "https://www.designbetter.co/",
    type: "Design",
    description: "An online resource and community, for learning and sharing about design and product development, that provides a set of articles and examples, for various types of design methodologies and principles, with a focus on education and collaboration."
  },
  {
    name: "Klex",
    url: "https://klex.io/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing graphic designs and layouts, for various types of projects and industries, that provides a set of templates and features, for generating and refining various types of visual elements and components, with a focus on simplicity and affordability."
  },
  {
    name: "Artboard Studio",
    url: "https://artboard.studio/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing mockups and prototypes, for various types of projects and industries, that provides a set of templates and features, for generating and testing various types of user interfaces and experiences, with a focus on realism and creativity."
  },
  {
    name: "DesignCuts",
    url: "https://www.designcuts.com/",
    type: "Design",
    description: "A marketplace and community, for purchasing and downloading premium design assets and resources, for various types of projects and industries, that provides a set of bundles and deals, for saving time and money on high-quality design products."
  },
  {
    name: "Descript",
    url: "https://www.descript.com/",
    type: "Design",
    description: "A desktop app and tool, for creating and editing audio and video content, for various types of projects and industries, that provides a set of features and integrations, for generating and publishing various types of multimedia materials and experiences, with a focus on innovation and automation."
  },
  {
    name: "Design Space",
    url: "https://www.designspace.com/",
    type: "Design",
    description: "A web-based platform and tool, for creating and sharing design projects and assets, for various types of projects and industries, that provides a set of features and integrations, for generating and organizing various types of design materials and workflows, with a focus on collaboration and efficiency."
  },
  {
    name: "Whimsical",
    url: "https://whimsical.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and sharing flowcharts and diagrams, for various types of projects and industries, that provides a set of features and integrations, for generating and visualizing various types of workflows and processes, with a focus on simplicity and clarity."
  },
  {
    name: "Logojoy",
    url: "https://logojoy.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing logo designs, for various types of businesses and organizations, that provides a set of templates and features, for generating and refining various types of visual identities and branding elements, with a focus on automation and affordability."
  },
  {
    name: "Shutterstock Editor",
    url: "https://www.shutterstock.com/editor",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing graphic designs and layouts, for various types of projects and industries, that provides a set of templates and features, for generating and refining various types of visual elements and components, with a focus on ease-of-use and accessibility."
  },
  {
    name: "LogoMakr",
    url: "https://logomakr.com/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing logo designs, for various types of businesses and organizations, that provides a set of templates and features, for generating and refining various types of visual identities and branding elements, with a focus on simplicity and affordability."
  },
  {
    name: "FigmaCrush",
    url: "https://www.figmacrush.com/",
    type: "Design",
    description: "An online resource and community, for discovering and sharing Figma design resources and templates, for various types of projects and industries, that provides a set of examples and inspirations, for designing and developing various types of user interfaces and experiences, with a focus on efficiency and productivity."
  },
  {
    name: "Pixeltrue",
    url: "https://www.pixeltrue.com/",
    type: "Design",
    description: "A library of premium SVG illustrations and animations, for various types of projects and industries, that provides a set of styles and themes, for designing and customizing various types of visual elements and components, with a focus on quality and versatility."
  },
  {
    name: "Interfacer",
    url: "https://interfacer.xyz/",
    type: "Design",
    description: "An online collection of curated design resources and inspiration, for various types of projects and industries, that provides a set of examples and inspirations, for designing and developing various types of user interfaces and experiences, with a focus on aesthetics and functionality."
  },
  {
    name: "UI Garage",
    url: "https://uigarage.net/",
    type: "Design",
    description: "An online collection of curated design resources and inspiration, for various types of projects and industries, that provides a set of examples and inspirations, for designing and developing various types of user interfaces and experiences, with a focus on usability and accessibility."
  },
  {
    name: "Canva Animator",
    url: "https://www.canva.com/animator/",
    type: "Design",
    description: "A web-based tool and service, for creating and customizing animations and motion graphics, for various types of projects and industries, that provides a set of templates and features, for generating and refining various types of visual elements and components, with a focus on creativity and ease-of-use."
  },
  {
    name: "Figma Resources",
    url: "https://www.figmaresources.com/",
    type: "Design",
    description: "An online collection of curated Figma design resources and templates, for various types of projects and industries, that provides a set of examples and inspirations, for designing and developing various types of user interfaces and experiences, with a focus on efficiency and productivity."
  },
  {
    name: "Remove Background",
    url: "https://www.remove.bg/",
    type: "Design",
    description: "A web-based tool and service, for removing backgrounds from images and photos, for various types of projects and industries, that provides a set of features and integrations, for generating and refining various types of visual elements and components, with a focus on accuracy and speed."
  },
  {
    name: "Font Flipper",
    url: "https://fontflipper.com/",
    type: "Design",
    description: "A web-based tool and service, for previewing and testing various types of fonts and typefaces, for various types of projects and industries, that provides a set of options and features, for generating and comparing various types of typographic styles and combinations, with a focus on flexibility and convenience."
  },
  {
    name: "Gradient Magic",
    url: "https://www.gradientmagic.com/",
    type: "Design",
    description: "A web-based tool and generator, for creating and customizing various types of gradients and color schemes, for web and graphic design, that provides a set of options and presets, for generating and fine-tuning various types of color palettes and styles, with a focus on creativity and inspiration."
  },
  {
    name: "Solved by Flexbox",
    url: "https://philipwalton.github.io/solved-by-flexbox/",
    type: "CSS",
    description: "A collection of common layout patterns and solutions, built using CSS flexbox, that provides a set of examples and code snippets, for solving various types of layout problems and challenges, with a focus on simplicity and compatibility."
  },
  {
    name: "WickedCSS",
    url: "https://wickedcss.com/",
    type: "CSS",
    description: "A set of CSS animations and transitions, for adding visual effects and interactivity to web pages and applications, that provides a set of pre-built animations and classes, for generating and customizing various types of motion and behavior, with a focus on creativity and ease-of-use."
  },
  {
    name: "CSSfx",
    url: "https://cssfx.netlify.app/",
    type: "CSS",
    description: "A collection of CSS effects and animations, for adding visual flair and personality to web pages and applications, that provides a set of pre-built effects and code snippets, for generating and customizing various types of styles and transitions, with a focus on simplicity and compatibility."
  },
  {
    name: "Tufte CSS",
    url: "https://edwardtufte.github.io/tufte-css/",
    type: "CSS",
    description: "A CSS framework and style guide, for creating and styling web pages and documents, that provides a set of templates and styles, for generating and customizing various types of content and layouts, with a focus on clarity and readability."
  },
  {
    name: "Mimic",
    url: "https://github.com/codrops/MimicCSS",
    type: "CSS",
    description: "A collection of CSS styles and animations, inspired by various types of user interfaces and experiences, that provides a set of examples and code snippets, for generating and customizing various types of visual elements and components, with a focus on creativity and innovation."
  },
  {
    name: "W3C CSS Validation Service",
    url: "https://jigsaw.w3.org/css-validator/",
    type: "CSS",
    description: "A web-based tool and service, for validating and checking CSS code and syntax, for various types of web pages and applications, that provides a set of options and features, for analyzing and optimizing various types of CSS styles and layouts, with a focus on standards and best practices."
  },
  {
    name: "Magic Animations",
    url: "https://www.minimamente.com/project/magic/",
    type: "CSS",
    description: "A collection of CSS animations and transitions, for adding visual effects and interactivity to web pages and applications, that provides a set of pre-built animations and code snippets, for generating and customizing various types of motion and behavior, with a focus on creativity and inspiration."
  },
  {
    name: "CSS Doodle",
    url: "https://css-doodle.com/",
    type: "CSS",
    description: "A web-based tool and generator, for creating and customizing various types of geometric and abstract patterns, using CSS syntax and expressions, that provides a set of options and features, for generating and fine-tuning various types of visual elements and components, with a focus on creativity and experimentation."
  },
  {
    name: "CSS Grid Generator",
    url: "https://cssgrid-generator.netlify.app/",
    type: "CSS",
    description: "A web-based tool and generator, for creating and customizing CSS grid layouts, for various types of web pages and applications, that provides a set of options and features, for generating and fine-tuning various types of grid-based designs and structures, with a focus on flexibility and efficiency."
  },
  {
    name: "Hover.css",
    url: "https://ianlunn.github.io/Hover/",
    type: "CSS",
    description: "A collection of CSS3 transitions and animations, for creating hover effects and interactivity on web pages and applications, that provides a set of pre-built animations and code snippets, for generating and customizing various types of hover styles and behaviors, with a focus on creativity and compatibility."
  },
  {
    name: "Basscss",
    url: "https://basscss.com/",
    type: "CSS",
    description: "A lightweight and modular CSS framework, for creating and styling web pages and applications, that provides a set of styles and utilities, for generating and customizing various types of layout and typography, with a focus on simplicity and performance."
  },
  {
    name: "CSSgram",
    url: "https://una.im/CSSgram/",
    type: "CSS",
    description: "A collection of CSS filters and effects, inspired by popular Instagram filters, for adding visual effects and styles to web pages and applications, that provides a set of pre-built filters and code snippets, for generating and customizing various types of image styles and enhancements, with a focus on creativity and inspiration."
  },
  {
    name: "Animate.css",
    url: "https://animate.style/",
    type: "CSS",
    description: "A collection of CSS3 animations and transitions, for adding motion and interactivity to web pages and applications, that provides a set of pre-built animations and classes, for generating and customizing various types of motion and behavior, with a focus on simplicity and compatibility."
  },
  {
    name: "CSS Stats",
    url: "https://cssstats.com/",
    type: "CSS",
    description: "A web-based tool and service, for analyzing and visualizing CSS code and metrics, for various types of web pages and applications, that provides a set of options and features, for measuring and optimizing various types of CSS styles and layouts, with a focus on data and insights."
  },
  {
    name: "Animate Plus",
    url: "https://github.com/bendc/animateplus",
    type: "CSS",
    description: "A lightweight and customizable JavaScript animation library, for creating and managing complex animations and transitions, that provides a set of options and functions, for generating and fine-tuning various types of motion and behavior, with a focus on performance and ease-of-use."
  },
  {
    name: "CSS Deck",
    url: "https://cssdeck.com/",
    type: "CSS",
    description: "An online collection of curated CSS resources and examples, for various types of web pages and applications, that provides a set of templates and styles, for generating and customizing various types of layout and typography, with a focus on inspiration and learning."
  },
  {
    name: "CSS Border Radius Generator",
    url: "https://border-radius.com/",
    type: "CSS",
    description: "A web-based tool and generator, for creating and customizing CSS border radius styles, for various types of web pages and applications, that provides a set of options and features, for generating and fine-tuning various types of border styles and shapes, with a focus on efficiency and compatibility."
  },
  {
    name: "Cirrus CSS",
    url: "https://spiderpig86.github.io/Cirrus/",
    type: "CSS",
    description: "A lightweight and modular CSS framework, for creating and styling web pages and applications, that provides a set of styles and utilities, for generating and customizing various types of layout and typography, with a focus on simplicity and clarity."
  },
  {
    name: "CSS Layout",
    url: "https://csslayout.io/",
    type: "CSS",
    description: "A collection of CSS layout patterns and solutions, for creating and styling web pages and applications, that provides a set of examples and code snippets, for generating and customizing various types of layout and structure, with a focus on simplicity and flexibility."
  },
  {
    name: "CSSgram.js",
    url: "https://sarcadass.github.io/cssgram/",
    type: "CSS",
    description: "A JavaScript library and plugin, for applying CSSgram filters and effects to images and videos, for various types of web pages and applications, that provides a set of options and functions, for generating and customizing various types of image styles and enhancements, with a focus on creativity and interactivity."
  },
  {
    name: "SassMeister",
    url: "https://www.sassmeister.com/",
    type: "CSS",
    description: "An online Sass playground and compiler, for testing and debugging Sass code and syntax, for various types of web pages and applications, that provides a set of options and features, for analyzing and optimizing various types of Sass styles and layouts, with a focus on productivity and convenience."
  },
  {
    name: "CSS Reference",
    url: "https://cssreference.io/",
    type: "CSS",
    description: "An online CSS reference and guide, for learning and exploring CSS code and syntax, for various types of web pages and applications, that provides a set of examples and explanations, for understanding and applying various types of CSS styles and properties, with a focus on clarity and completeness."
  },
  {
    name: "CSSCO",
    url: "https://webkul.github.io/cssco/",
    type: "CSS",
    description: "A collection of CSS filters and effects, inspired by popular photo filters and styles, for adding visual effects and styles to web pages and applications, that provides a set of pre-built filters and code snippets, for generating and customizing various types of image styles and enhancements, with a focus on creativity and inspiration."
  },
  {
    name: "CSS Gridish",
    url: "https://github.com/IBM/css-gridish",
    type: "CSS",
    description: "A CSS grid framework and generator, for creating and customizing CSS grid layouts, that provides a set of templates and tools, for generating and fine-tuning various types of responsive grid-based designs and structures, with a focus on efficiency and accessibility."
  },
  {
    name: "CSS Carbon",
    url: "https://www.carbondesignsystem.com/guidelines/css",
    type: "CSS",
    description: "A CSS framework and system, for creating and styling web pages and applications, that provides a set of styles and guidelines, for generating and customizing various types of design and layout, with a focus on consistency and usability."
  },
  {
    name: "CSS Accordion",
    url: "https://codepen.io/richardscarrott/pen/MWKgGrP",
    type: "CSS",
    description: "A CSS-only accordion module, for creating and managing interactive and collapsible content sections, that provides a set of styles and classes, for generating and customizing various types of accordion styles and behaviors, with a focus on simplicity and performance."
  },
  {
    name: "CSS Paint API",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API",
    type: "CSS",
    description: "A web API and technology, for creating and manipulating CSS styles and graphics, that provides a set of properties and methods, for generating and customizing various types of visual effects and styles, with a focus on creativity and flexibility."
  },
  {
    name: "CSS Font Synth",
    url: "https://zoltantothcom.github.io/css-font-synth/",
    type: "CSS",
    description: "A web-based tool and generator, for creating and customizing CSS font styles, for various types of web pages and applications, that provides a set of options and features, for generating and fine-tuning various types of font-based designs and structures, with a focus on creativity and experimentation."
  },
  {
    name: "CSSWand",
    url: "https://csswand.dev/",
    type: "CSS",
    description: "A collection of CSS code snippets and utilities, for creating and styling web pages and applications, that provides a set of examples and resources, for generating and customizing various types of layout and design, with a focus on simplicity and convenience."
  },
  {
    name: "CSS3 Patterns Gallery",
    url: "https://leaverou.github.io/css3patterns/",
    type: "CSS",
    description: "A collection of CSS patterns and designs, for creating and styling web pages and applications, that provides a set of pre-built patterns and code snippets, for generating and customizing various types of background and texture, with a focus on creativity and diversity."
  },
  {
    name: "CSS Janus",
    url: "https://cssjanus.github.io/",
    type: "CSS",
    description: "A web-based tool and service, for converting and transforming CSS styles and properties, between left-to-right and right-to-left writing modes, that provides a set of options and features, for generating and fine-tuning various types of bi-directional styles and layouts, with a focus on accessibility and compatibility."
  },
  {
    name: "CSS Remedy",
    url: "https://github.com/mozdevs/cssremedy",
    type: "CSS",
    description: "A collection of CSS code snippets and utilities, for fixing and correcting common CSS problems and issues, that provides a set of examples and solutions, for generating and customizing various types of layout and design, with a focus on simplicity and compatibility."
  },
  {
    name: "CSS Zoom",
    url: "https://css-tricks.com/a-closer-look-at-css-logical-properties-and-values/#css-zoom",
    type: "CSS",
    description: "A CSS property and value, for scaling and zooming elements and content, that provides a set of options and functions, for generating and customizing various types of zooming and magnifying effects, with a focus on accessibility and usability."
  },
  {
    name: "CSS Modules",
    url: "https://github.com/css-modules/css-modules",
    type: "CSS",
    description: "A modular and scalable CSS architecture and methodology, for creating and managing complex and dynamic CSS styles and layouts, that provides a set of guidelines and tools, for generating and organizing various types of module and component-based designs and structures, with a focus on maintainability and reusability."
  },
  {
    name: "CSS Bezier Curve Editor",
    url: "https://www.jasondavies.com/animated-bezier/",
    type: "CSS",
    description: "A web-based tool and editor, for creating and customizing CSS Bezier curves and animations, for various types of web pages and applications, that provides a set of options and features, for generating and fine-tuning various types of motion and transition effects, with a focus on interactivity and creativity."
  },
  {
    name: "CSS Filters Playground",
    url: "https://codepen.io/sosuke/pen/Pjoqqp",
    type: "CSS",
    description: "A web-based tool and playground, for experimenting and testing CSS filter and effect styles, for various types of web pages and applications, that provides a set of examples and code snippets, for generating and customizing various types of image styles and enhancements, with a focus on inspiration and exploration."
  },
  {
    name: "CSS Depth",
    url: "https://jonathantneal.github.io/css-depth/",
    type: "CSS",
    description: "A CSS property and value, for creating and styling layered and depth-based content and layouts, that provides a set of options and functions, for generating and customizing various types of depth and perspective effects, with a focus on creativity and expressiveness."
  },
  {
    name: "CSS Day-Night Toggle",
    url: "https://codepen.io/ettrics/pen/LjYGaz",
    type: "CSS",
    description: "A CSS-only toggle switch, for switching and toggling between day and night modes, that provides a set of styles and classes, for generating and customizing various types of toggle and switch styles and behaviors, with a focus on simplicity and accessibility."
  },
  {
    name: "CSS Animista",
    url: "https://animista.net/",
    type: "CSS",
    description: "A collection of CSS animations and transitions, for adding motion and interactivity to web pages and applications, that provides a set of pre-built animations and classes, for generating and customizing various types of motion and behavior, with a focus on creativity and inspiration."
  },
  {
    name: "CSS Only 3D Labyrinth",
    url: "https://codepen.io/GeoffreyCrofte/pen/BXgEEq",
    type: "CSS",
    description: "A CSS-only 3D labyrinth game, for creating and playing a 3D maze game, that provides a set of styles and classes, for generating and customizing various types of labyrinth styles and behaviors, with a focus on interactivity and entertainment."
  },
  {
    name: "CSS Sticky Elements",
    url: "https://www.iamrohit.in/sticky-elements-using-css/",
    type: "CSS",
    description: "A CSS property and value, for creating and styling sticky and fixed-position elements, that provides a set of options and functions, for generating and customizing various types of sticky and fixed-position effects, with a focus on usability and convenience."
  },
  {
    name: "CSS Flat Design Buttons",
    url: "https://codepen.io/michalsnik/pen/KpzEuk",
    type: "CSS",
    description: "A collection of CSS flat design buttons and styles, for creating and styling flat design buttons and interfaces, that provides a set of pre-built buttons and styles, for generating and customizing various types of flat design buttons and components, with a focus on simplicity and aesthetics."
  },
  {
    name: "CSS Truncation with Ellipsis",
    url: "https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/",
    type: "CSS",
    description: "A CSS property and value, for truncating and shortening text content with an ellipsis, that provides a set of options and functions, for generating and customizing various types of text truncation and display, with a focus on readability and space-saving."
  },
  {
    name: "CSS Rhythm Builder",
    url: "https://rhythm.nikolaydyankov.com/",
    type: "CSS",
    description: "A web-based tool and generator, for creating and customizing CSS rhythm and vertical spacing, for various types of web pages and applications, that provides a set of options and features, for generating and fine-tuning various types of rhythm and spacing patterns, with a focus on consistency and harmony."
  },
  {
    name: "CSS Perspective Hover Effects",
    url: "https://tympanus.net/Development/PerspectiveHover/",
    type: "CSS",
    description: "A collection of CSS hover effects and transitions, for creating and styling interactive and dynamic elements, that provides a set of pre-built effects and classes, for generating and customizing various types of perspective and 3D effects, with a focus on creativity and inspiration."
  },
  {
    name: "CSS Scrollbar Styling",
    url: "https://css-tricks.com/custom-scrollbars-in-webkit/",
    type: "CSS",
    description: "A CSS property and value, for styling and customizing web scrollbars, that provides a set of options and functions, for generating and customizing various types of scrollbar styles and behaviors, with a focus on aesthetics and usability."
  },
  {
    name: "CSS Marble",
    url: "https://cssmarble.com/",
    type: "CSS",
    description: "A collection of CSS code snippets and utilities, for creating and styling web pages and applications, that provides a set of examples and resources, for generating and customizing various types of layout and design, with a focus on simplicity and convenience."
  },
  {
    name: "Visual Rhetoric",
    url: "https://www.aiga.org/what-is-visual-rhetoric",
    type: "Design",
    description: "A design concept and methodology, for creating and communicating persuasive and effective messages, that provides a set of guidelines and principles, for analyzing and applying various types of visual elements and techniques, with a focus on impact and meaning."
  },
  {
    name: "Design Better",
    url: "https://www.designbetter.co/",
    type: "Design",
    description: "A collection of design resources and insights, for improving and advancing design skills and knowledge, that provides a set of articles, podcasts, books, and workshops, for learning and exploring various types of design topics and practices, with a focus on education and growth."
  },
  {
    name: "Dieter Rams' Ten Principles of Good Design",
    url: "https://www.vitsoe.com/us/about/good-design",
    type: "Design",
    description: "A set of design principles and guidelines, for creating and evaluating good design, that provides a set of ten principles and examples, for assessing and applying various types of design elements and strategies, with a focus on simplicity and functionality."
  },
  {
    name: "Design Principles FTW",
    url: "https://principles.design/",
    type: "Design",
    description: "A collection of design principles and examples, for improving and refining design skills and knowledge, that provides a set of principles and case studies, for analyzing and applying various types of design elements and practices, with a focus on accessibility and inclusivity."
  },
  {
    name: "Creative Block",
    url: "https://www.creativeblock.com/",
    type: "Design",
    description: "A web-based tool and generator, for overcoming and inspiring creative block, for various types of creative projects and endeavors, that provides a set of prompts and exercises, for generating and exploring various types of creative ideas and solutions, with a focus on inspiration and motivation."
  },
  {
    name: "Figma Design System",
    url: "https://www.figma.com/design-systems/",
    type: "Design",
    description: "A collection of design systems and resources, for creating and managing scalable and consistent design elements and systems, that provides a set of pre-built systems and templates, for generating and customizing various types of design systems and elements, with a focus on efficiency and collaboration."
  },
  {
    name: "Design Fundamentals",
    url: "https://www.canva.com/learn/design-fundamentals/",
    type: "Design",
    description: "A set of design fundamentals and principles, for creating and evaluating effective and engaging designs, that provides a set of tutorials and examples, for learning and applying various types of design concepts and techniques, with a focus on accessibility and usability."
  },
  {
    name: "Color Hunt",
    url: "https://colorhunt.co/",
    type: "Design",
    description: "A collection of color palettes and schemes, for creating and exploring various types of color combinations and themes, that provides a set of pre-built palettes and categories, for generating and customizing various types of color schemes and themes, with a focus on aesthetics and inspiration."
  },
  {
    name: "HTMX",
    url: "https://htmx.org/",
    type: "HTML",
    description: "A web-based tool and library, for building and creating dynamic and interactive web pages, that provides a set of attributes and classes, for generating and customizing various types of web components and behaviors, with a focus on simplicity and accessibility."
  },
  {
    name: "Heroicons",
    url: "https://heroicons.com/",
    type: "HTML",
    description: "A collection of SVG icons and illustrations, for creating and designing various types of web pages and applications, that provides a set of pre-built icons and categories, for generating and customizing various types of icons and illustrations, with a focus on simplicity and versatility."
  },
  {
    name: "Hybrids",
    url: "https://github.com/hybridsjs/hybrids",
    type: "HTML",
    description: "A web-based tool and library, for creating and defining custom web components and behaviors, that provides a set of functions and features, for generating and customizing various types of web components and behaviors, with a focus on modularity and flexibility."
  },
  {
    name: "Slip.js",
    url: "https://github.com/pornel/slip",
    type: "HTML",
    description: "A web-based tool and library, for creating and implementing mobile touch gestures and behaviors, that provides a set of functions and classes, for generating and customizing various types of touch behaviors and interactions, with a focus on responsiveness and usability."
  },
  {
    name: "Fitty",
    url: "https://rikschennink.github.io/fitty/",
    type: "HTML",
    description: "A web-based tool and library, for fitting and resizing text content to its parent container, that provides a set of options and features, for generating and customizing various types of text behavior and display, with a focus on responsiveness and readability."
  },
  {
    name: "HTMLDOM",
    url: "https://htmldom.dev/",
    type: "HTML",
    description: "A web-based tool and library, for parsing and manipulating HTML code and elements, that provides a set of functions and methods, for generating and customizing various types of HTML elements and structures, with a focus on automation and convenience."
  },
  {
    name: "HTML5 Sortable",
    url: "https://github.com/lukasoppermann/html5sortable",
    type: "HTML",
    description: "A web-based tool and library, for creating and implementing sortable and draggable HTML elements, that provides a set of options and features, for generating and customizing various types of drag and drop behaviors and interactions, with a focus on flexibility and accessibility."
  },
  {
    name: "Vivid.js",
    url: "https://webkul.github.io/vivid/",
    type: "HTML",
    description: "A collection of SVG illustrations and animations, for creating and designing various types of web pages and applications, that provides a set of pre-built illustrations and styles, for generating and customizing various types of animations and visual effects, with a focus on creativity and aesthetics."
  }












]




 db.resources.insertMany(resources)
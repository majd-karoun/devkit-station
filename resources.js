const resources = [
    {
      name: "HTML Validator",
      url: "https://validator.w3.org/",
      type: "HTML",
      description: "A free online tool that checks HTML code for errors and conformity to W3C standards."
    },
    {
      name: "CSS Diner",
      url: "https://flukeout.github.io/",
      type: "CSS",
      description: "A fun game that teaches CSS selectors in a visual and interactive way."
    },
    {
      name: "You Might Not Need JavaScript",
      url: "http://youmightnotneedjs.com/",
      type: "JavaScript",
      description: "A collection of examples showing how to accomplish common tasks without using JavaScript, with vanilla HTML and CSS code."
    },
    {
      name: "Screen Sizes",
      url: "https://screensiz.es/",
      type: "Tools",
      description: "A reference website that shows the screen sizes and resolutions of various devices, helpful for designing responsive websites."
    },
    {
      name: "Fontjoy",
      url: "https://fontjoy.com/",
      type: "Design",
      description: "A website that uses AI to generate font combinations, helping designers to find the perfect pair for their projects."
    },
    {
        name: "Accessibility Insights",
        url: "https://accessibilityinsights.io/en/",
        type: "Tools",
        description: "A free and open-source browser extension for web developers to identify and fix accessibility issues on their websites."
      },
      {
        name: "Figma",
        url: "https://www.figma.com/",
        type: "Design",
        description: "A cloud-based design tool that allows teams to collaborate on creating and prototyping user interfaces for websites and apps."
      },
      {
        name: "Can I Use",
        url: "https://caniuse.com/",
        type: "Tools",
        description: "A website that provides up-to-date browser support tables for HTML, CSS, and JavaScript features, helping developers decide what to use and when."
      },
      {
        name: "Masonry",
        url: "https://masonry.desandro.com/",
        type: "JavaScript",
        description: "A JavaScript library for creating responsive, grid-like layouts that adapt to different screen sizes, ideal for image galleries and other visual-heavy content."
      },
      {
        name: "Cubic Bézier Curve Generator",
        url: "https://cubic-bezier.com/",
        type: "CSS",
        description: "A simple tool that helps designers and developers create custom cubic Bézier curves for CSS transitions and animations."
      },
      {
        name: "Blaze CSS",
        url: "https://blaze-css.com/",
        type: "CSS",
        description: "A lightweight and modular CSS framework that focuses on providing a minimal yet powerful set of styles and components."
      },
      {
        name: "StaticGen",
        url: "https://www.staticgen.com/",
        type: "Tools",
        description: "A website that lists and compares different static site generators, allowing developers to choose the best one for their needs and preferences."
      },
      {
        name: "Concurrently",
        url: "https://www.npmjs.com/package/concurrently",
        type: "JavaScript",
        description: "A command-line tool that enables running multiple commands and processes concurrently in a single terminal window, improving workflow and productivity."
      },
      {
        name: "Svgomg",
        url: "https://jakearchibald.github.io/svgomg/",
        type: "Design",
        description: "A web-based tool that optimizes SVG files by reducing their size and complexity, resulting in faster page load times and better performance."
      },
      {
        name: "TinyPNG",
        url: "https://tinypng.com/",
        type: "Design",
        description: "An online image compressor that reduces the size of PNG and JPEG files without compromising their quality, making them easier to load and share."
      },
      {
        name: "Lighthouse",
        url: "https://developers.google.com/web/tools/lighthouse",
        type: "Tools",
        description: "An open-source tool from Google that audits web pages for performance, accessibility, and best practices, and provides actionable insights and recommendations."
      },
      {
        name: "Glide",
        url: "https://glidejs.com/",
        type: "JavaScript",
        description: "A lightweight and flexible JavaScript library for creating responsive and touch-friendly sliders and carousels, ideal for showcasing images and videos."
      },
      {
        name: "Stitches",
        url: "https://stitches.dev/",
        type: "CSS",
        description: "A CSS-in-JS library that allows developers to write modular and composable styles using familiar CSS syntax, while leveraging the benefits of JavaScript."
      },
      {
        name: "SVG Waves",
        url: "https://getwaves.io/",
        type: "Design",
        description: "A generator that creates custom and colorful SVG waves that can be used as backgrounds, headers, and other visual elements on web pages and apps."
      },
      {
        name: "Puppeteer",
        url: "https://pptr.dev/",
        type: "Tools",
        description: "A Node.js library that provides a high-level API for controlling headless Chrome or Chromium browsers, allowing developers to automate tasks and tests on web pages and applications."
      },
      {
        name: "Headless Recorder",
        url: "https://github.com/checkly/headless-recorder",
        type: "Tools",
        description: "A Chrome extension that records user interactions and generates Puppeteer or Playwright scripts, making it easier to create automated tests and scripts."
      },
      {
        name: "Blip",
        url: "https://github.com/lukeed/blip",
        type: "JavaScript",
        description: "A tiny (40B) utility for creating visual loading indicators, such as progress bars and spinners, using pure JavaScript and CSS."
      },
      {
        name: "Avocode",
        url: "https://avocode.com/",
        type: "Design",
        description: "A cloud-based design and collaboration tool that allows designers and developers to inspect, share, and sync design files, and generate code snippets."
      },
      {
        name: "Preact",
        url: "https://preactjs.com/",
        type: "JavaScript",
        description: "A fast and lightweight alternative to React, with a smaller API and faster performance, ideal for building high-performing web interfaces."
      },
      {
        name: "Upptime",
        url: "https://upptime.js.org/",
        type: "Tools",
        description: "A free and open-source uptime monitor and status page generator, built on GitHub Actions and Pages, with support for multiple sites and notifications."
      },
      {
        name: "Chota",
        url: "https://jenil.github.io/chota/",
        type: "CSS",
        description: "A micro (3KB) CSS framework that provides a minimal and responsive set of styles and components, ideal for small-scale and fast-loading web projects."
      },
      {
        name: "Web Performance Recipes",
        url: "https://calendar.perfplanet.com/2021/performance-recipes-for-the-web-platform/",
        type: "Tools",
        description: "A collection of performance recipes and techniques for optimizing web performance, from reducing image sizes and using lazy loading to minimizing JavaScript and leveraging caching."
      },
      {
        name: "Neko",
        url: "https://github.com/hyper-canvas/neko",
        type: "JavaScript",
        description: "A fast and lightweight library for creating interactive and animated particle effects, such as backgrounds and loaders, using pure JavaScript and Canvas."
      },
      {
        name: "Feather",
        url: "https://feathericons.com/",
        type: "Design",
        description: "A collection of open-source and customizable SVG icons, with a minimal and consistent design, and support for multiple frameworks and platforms."
      },
      {
        name: "URL to PDF",
        url: "https://url-to-pdf-api.com/",
        type: "Tools",
        description: "A RESTful API that converts web pages and HTML files to PDF documents, with support for custom page size, orientation, and margins."
      },
      {
        name: "Imgbot",
        url: "https://imgbot.net/",
        type: "Tools",
        description: "A GitHub app that automatically optimizes images in pull requests, using lossless compression and image resizing, to improve performance and reduce file sizes."
      },
      {
        name: "Aero.js",
        url: "https://github.com/aerojs/aero",
        type: "JavaScript",
        description: "A fast and modular web framework for building server-rendered and client-side rendered applications, with support for static site generation and hot module reloading."
      },
      {
        name: "Jotai",
        url: "https://jotai.surge.sh/",
        type: "JavaScript",
        description: "A simple and scalable state management library for React, using atoms and selectors to manage application state in a declarative and composable way."
      },
      {
        name: "CodyHouse",
        url: "https://codyhouse.co/",
        type: "Design",
        description: "A collection of free and premium UI components and design resources, with a focus on modern and innovative design trends and techniques."
      },
      {
        name: "NPX",
        url: "https://www.npmjs.com/package/npx",
        type: "Tools",
        description: "A command-line tool that allows developers to run and install Node.js packages without having to install them globally, saving time and reducing clutter."
      },
      {
        name: "Eva Icons",
        url: "https://akveo.github.io/eva-icons/",
        type: "Design",
        description: "A collection of open-source and customizable SVG icons, with a modern and colorful design, and support for multiple frameworks and platforms."
      },
      {
        name: "Axios",
        url: "https://axios-http.com/",
        type: "JavaScript",
        description: "A popular and easy-to-use JavaScript library for making HTTP requests, with support for all major browsers and Node.js, and a flexible and intuitive API."
      },
      {
        name: "Frontity",
        url: "https://frontity.org/",
        type: "JavaScript",
        description: "A modern and open-source framework for building WordPress websites and blogs with React, with support for server-side rendering, AMP, and PWA features."
      },
      {
        name: "CSS Battle",
        url: "https://cssbattle.dev/",
        type: "CSS",
        description: "A fun and challenging game that tests your CSS skills, by asking you to recreate a given design using only HTML and CSS, within a limited number of characters."
      },
      {
        name: "Lazysizes",
        url: "https://github.com/aFarkas/lazysizes",
        type: "JavaScript",
        description: "A lightweight and powerful library for lazy-loading images and videos, using progressive loading and adaptive quality, to improve performance and reduce data usage."
      },
      {
        name: "Pathpicker",
        url: "https://github.com/facebook/PathPicker",
        type: "Tools",
        description: "A command-line tool that helps developers easily select files and paths from command output, using a visual interface and regex-based filtering."
      },
      {
        name: "Fuse.js",
        url: "https://fusejs.io/",
        type: "JavaScript",
        description: "A lightweight and powerful library for fuzzy-searching collections of data, with support for multiple search options and ranking algorithms."
      },
      {
        name: "Typetura",
        url: "https://typetura.com/",
        type: "CSS",
        description: "A responsive typography tool that automatically adjusts font sizes, line heights, and other properties, based on the available space and the user's viewport."
      },
      {
        name: "Inkdrop",
        url: "https://www.inkdrop.app/",
        type: "Tools",
        description: "A cross-platform note-taking app for developers, with support for Markdown, code highlighting, and integration with popular tools like GitHub and VSCode."
      },
      {
        name: "Huebee",
        url: "https://huebee.buzz/",
        type: "JavaScript",
        description: "A simple and lightweight library for creating color pickers and swatches, with a minimalist and customizable design, and support for touch and keyboard interactions."
      },
      {
        name: "Tweakpane",
        url: "https://cocopon.github.io/tweakpane/",
        type: "JavaScript",
        description: "A compact and customizable library for creating GUIs and control panels, with support for various input types, layout options, and theming."
      },
      {
        name: "Emmet Re:view",
        url: "https://re-view.emmet.io/",
        type: "Tools",
        description: "A browser extension that allows developers to preview their responsive designs across different devices and resolutions, using custom and predefined viewports."
      },
      {
        name: "PaperCSS",
        url: "https://www.getpapercss.com/",
        type: "CSS",
        description: "A minimal and elegant CSS framework that provides a lightweight and versatile set of styles and components, inspired by Google's Material Design."
      },
      {
        name: "Gatsby Theme Catalyst",
        url: "https://theme-catalyst.netlify.app/",
        type: "JavaScript",
        description: "A customizable and feature-rich Gatsby theme for creating modern and fast websites, with support for MDX, themes, plugins, and other advanced features."
      },
      {
        name: "ImageKit",
        url: "https://imagekit.io/",
        type: "Tools",
        description: "A cloud-based image optimization and delivery platform, with support for various formats, transformations, and optimizations, and integration with popular CMS and CDNs."
      },
      {
        name: "Draftail",
        url: "https://www.draftail.org/",
        type: "JavaScript",
        description: "A customizable and extensible rich text editor for the web, with support for various formatting options, images, and embeds, and a minimalist design."
      },
      {
        name: "EasilyDo",
        url: "https://www.easilydo.com/",
        type: "Tools",
        description: "A productivity app for iOS and Android that automates repetitive tasks and saves time, by connecting to various services and platforms, and using AI and machine learning."
      },
      {
        name: "Little Snitch",
        url: "https://www.obdev.at/products/littlesnitch/index.html",
        type: "Tools",
        description: "A network monitoring tool for macOS that allows users to control and block incoming and outgoing network connections, and prevent unauthorized access and data leakage."
      },
      {
        name: "Logrocket",
        url: "https://logrocket.com/",
        type: "Tools",
        description: "A logging and session replay tool for web apps, that captures and replays user sessions, network requests, and console logs, to help developers identify and fix issues."
      },
      {
        name: "Qards",
        url: "https://qards.io/",
        type: "JavaScript",
        description: "A powerful and customizable drag-and-drop page builder for WordPress, with support for various content types, layouts, and styles, and a beginner-friendly interface."
      },
      {
        name: "Snowpack",
        url: "https://www.snowpack.dev/",
        type: "JavaScript",
        description: "A fast and flexible frontend build tool that allows developers to build modern web apps with a smooth development experience and blazing-fast performance."
      },
      {
        name: "WPGraphQL",
        url: "https://www.wpgraphql.com/",
        type: "JavaScript",
        description: "A GraphQL server for WordPress, that allows developers to query WordPress data and content using a powerful and flexible API, and integrate it with modern web technologies and frameworks."
      },
      {
        name: "Smartmockups",
        url: "https://smartmockups.com/",
        type: "Design",
        description: "A web-based tool that allows designers and marketers to create and customize realistic mockups and product presentations, using a library of templates and devices."
      },
      {
        name: "Nativefier",
        url: "https://github.com/nativefier/nativefier",
        type: "Tools",
        description: "A command-line tool that allows developers to turn any web page into a native desktop app, with support for various platforms, icons, and settings."
      },
      {
        name: "Puppeteer Recorder",
        url: "https://chrome.google.com/webstore/detail/puppeteer-recorder/djeegiggegleadkkbgopoonhjimgehda",
        type: "Tools",
        description: "A Chrome extension that allows developers to record their interactions with web pages, and generate Puppeteer scripts, making it easier to automate tests and tasks."
      },
      {
        name: "Bullseye",
        url: "https://github.com/robb-j/bullseye",
        type: "JavaScript",
        description: "A tiny (700B) and efficient library for monitoring element resize events, with support for multiple targets and callbacks, and no dependencies."
      },
      {
        name: "Pinia",
        url: "https://pinia.esm.dev/",
        type: "JavaScript",
        description: "A lightweight and fast state management library for Vue.js, with support for TypeScript, reactivity, and devtools, and a simple and intuitive API."
      },
      {
        name: "Sourceful",
        url: "https://sourceful.us/",
        type: "Tools",
        description: "A code search engine and collaboration platform, that allows developers to search and share code snippets, and discover new solutions and patterns."
      },
      {
        name: "Ultralight",
        url: "https://ultralight.dev/",
        type: "JavaScript",
        description: "A lightweight and fast web rendering engine, with support for modern web technologies, and a flexible and easy-to-use API, ideal for building native-like desktop apps."
      },
      {
        name: "DaisyUI",
        url: "https://daisyui.com/",
        type: "CSS",
        description: "A customizable and modern CSS framework that provides a set of utility classes and components, inspired by Tailwind, and optimized for performance and accessibility."
      },
      {
        name: "Sizzy",
        url: "https://sizzy.co/",
        type: "Tools",
        description: "A web development tool that allows developers to test and preview their websites and apps across multiple devices and viewports, with a synchronized scrolling and debugging experience."
      },
      {
        name: "Picocss",
        url: "https://picocss.com/",
        type: "CSS",
        description: "A tiny (1KB) and modular CSS framework that provides a minimal and responsive set of styles and components, and a simple and extensible API."
      },
      {
        name: "PostHog",
        url: "https://posthog.com/",
        type: "Tools",
        description: "A free and open-source product analytics platform, that allows developers and marketers to track and analyze user behavior, and improve product features and engagement."
      },
      {
        name: "Jina",
        url: "https://github.com/jina-ai/jina",
        type: "Tools",
        description: "A cloud-native and flexible neural search framework, that allows developers to build and scale powerful search applications, using deep learning and natural language processing."
      },
      {
        name: "Squoosh",
        url: "https://squoosh.app/",
        type: "Tools",
        description: "A web-based image optimization tool, that allows developers to compress and resize images, and preview the results in real-time, using various codecs and settings."
      },
      {
        name: "Reakit",
        url: "https://reakit.io/",
        type: "JavaScript",
        description: "A flexible and accessible UI toolkit for React, that provides a set of primitives and components, with support for theming, keyboard navigation, and screen readers."
      },
      {
        name: "Svelte Society",
        url: "https://sveltesociety.dev/",
        type: "JavaScript",
        description: "A community-driven platform for sharing knowledge and resources about the Svelte framework, with events, podcasts, articles, and a directory of projects and companies using Svelte."
      },
      {
        name: "DrawSQL",
        url: "https://drawsql.app/",
        type: "Tools",
        description: "A web-based tool that allows developers and database administrators to visualize and document their databases and schemas, using a drag-and-drop interface and various export formats."
      },
      {
        name: "Blueprints",
        url: "https://blueprints.dev/",
        type: "JavaScript",
        description: "A collection of open-source and modular UI components and design systems, with a focus on accessibility, responsiveness, and modern design trends."
      },
      {
        name: "Logary",
        url: "https://logary.tech/",
        type: "Tools",
        description: "A distributed and extensible logging and metrics platform, that allows developers to collect, aggregate, and analyze log and performance data, using various data sources and integrations."
      },
      {
        name: "Squoosh",
        url: "https://squoosh.app/",
        type: "Tools",
        description: "A web-based image optimization tool, that allows developers to compress and resize images, and preview the results in real-time, using various codecs and settings."
      },
      {
        name: "uPlot",
        url: "https://leeoniya.github.io/uPlot/",
        type: "JavaScript",
        description: "A fast and lightweight charting library for the web, with support for various chart types and features, and a modular and customizable API."
      },
      {
        name: "RealFaviconGenerator",
        url: "https://realfavicongenerator.net/",
        type: "Tools",
        description: "A web-based tool that allows developers to generate and customize favicons and icons for their websites and apps, with support for various platforms and devices."
      },
      {
        name: "Verlok Lazy Load",
        url: "https://github.com/verlok/lazyload",
        type: "JavaScript",
        description: "A powerful and lightweight library for lazy-loading images and other assets, with support for various loading strategies, events, and settings."
      },
      {
        name: "AlaSQL",
        url: "https://alasql.org/",
        type: "JavaScript",
        description: "A fast and flexible SQL engine and database toolkit for JavaScript, with support for various databases, queries, and data formats, and a user-friendly and intuitive API."
      },
      {
        name: "Nano ID",
        url: "https://github.com/ai/nanoid",
        type: "JavaScript",
        description: "A small and secure library for generating unique IDs and strings, using random and non-sequential algorithms, and with support for custom sizes and alphabets."
      },
      {
        name: "Briq",
        url: "https://briq.dev/",
        type: "CSS",
        description: "A customizable and modern CSS framework that provides a set of utility classes and components, inspired by Tailwind, and optimized for performance and ease of use."
      },
      {
        name: "Tocca.js",
        url: "https://gianlucaguarini.github.io/Tocca.js/",
        type: "JavaScript",
        description: "A lightweight and customizable library for touch gestures, that allows developers to add swipe, tap, pinch, and other touch interactions, to their web apps and interfaces."
      },
      {
        name: "Bumpup",
        url: "https://bumpup.app/",
        type: "Tools",
        description: "A web-based tool that allows developers to generate and update version numbers and changelogs for their packages and projects, using various formats and templates."
      },
      {
        name: "Luminous",
        url: "https://github.com/imgix/luminous",
        type: "JavaScript",
        description: "A small and fast library for zooming and viewing images, with support for various image types and options, and a minimalist and customizable design."
      },
      {
        name: "Regex101",
        url: "https://regex101.com/",
        type: "Tools",
        description: "A web-based tool that allows developers to test and debug regular expressions, with real-time matching and highlighting, and a library of examples and patterns."
      },
      {
        name: "Fathom Analytics",
        url: "https://usefathom.com/",
        type: "Tools",
        description: "A privacy-focused and fast web analytics platform, that allows website owners and developers to track and analyze user behavior, without compromising privacy and security."
      },
      {
        name: "Smart Grid",
        url: "https://github.com/dmitry-lavrik/smart-grid",
        type: "CSS",
        description: "A powerful and flexible grid system for CSS, that allows developers to create and customize grids and layouts, using a simple and intuitive syntax, and various options and settings."
      },
      {
        name: "Stitches",
        url: "https://stitches.dev/",
        type: "CSS",
        description: "A modern and lightweight CSS-in-JS library, that allows developers to create and style components using plain CSS syntax, and a powerful and extensible API."
      },
      {
        name: "Inkline",
        url: "https://inkline.io/",
        type: "CSS",
        description: "A modular and customizable CSS framework for building responsive and accessible web interfaces, with a focus on performance, consistency, and ease of use."
      },
      {
        name: "Purgecss",
        url: "https://purgecss.com/",
        type: "Tools",
        description: "A fast and efficient tool for removing unused CSS code from web projects, with support for various file types and build tools, and a customizable configuration."
      },
      {
        name: "TagUI",
        url: "https://tagui.org/",
        type: "Tools",
        description: "A free and open-source tool for automating web tasks and workflows, using a simple and human-readable scripting language, and various integration options."
      },
      {
        name: "Papier",
        url: "https://getpapier.com/",
        type: "Design",
        description: "A web-based tool for creating and sharing design systems and style guides, with a library of components and styles, and integration with popular design tools and platforms."
      },
      {
        name: "Hotkeys",
        url: "https://wangchujiang.com/hotkeys/",
        type: "JavaScript",
        description: "A lightweight and customizable library for keyboard shortcuts, that allows developers to add hotkeys and keybindings, to their web apps and interfaces, with support for various platforms and keys."
      },
      {
        name: "Neumorphism.io",
        url: "https://neumorphism.io/",
        type: "Design",
        description: "A web-based tool for generating and customizing neumorphic design elements, with a library of styles and examples, and export options for popular design tools and formats."
      },
      {
        name: "RxDB",
        url: "https://rxdb.info/",
        type: "JavaScript",
        description: "A powerful and scalable database library for JavaScript, that allows developers to create and manage offline-first applications, with support for various databases, syncing, and encryption."
      },
      {
        name: "Typetura",
        url: "https://typetura.com/",
        type: "CSS",
        description: "A web-based tool for creating and applying variable fonts and typographic styles, with a library of fonts and presets, and integration with popular design tools and platforms."
      },
      {
        name: "Playwright",
        url: "https://playwright.dev/",
        type: "Tools",
        description: "A cross-browser and headless automation library for web testing and browser automation, that allows developers to test and interact with web pages and applications, using various programming languages and environments."
      },
      {
        name: "Glide",
        url: "https://glidejs.com/",
        type: "JavaScript",
        description: "A flexible and lightweight carousel and slider library for the web, with support for various features and options, and a minimalist and easy-to-use API."
      },
      {
        name: "Schematics",
        url: "https://schematics.dev/",
        type: "Tools",
        description: "A CLI tool and library for generating and managing code scaffolds and templates, for various frameworks and libraries, with support for customization, extensibility, and automation."
      },
      {
        name: "Vivid.js",
        url: "https://webkul.github.io/vivid/",
        type: "JavaScript",
        description: "A small and customizable library for drawing and animating SVG icons and illustrations, with support for various shapes and effects, and a simple and intuitive API."
      },
      {
        name: "DataTables",
        url: "https://datatables.net/",
        type: "JavaScript",
        description: "A powerful and flexible table and data grid library for the web, with support for various features and options, and a modular and extensible API."
      },
      {
        name: "Micromodal",
        url: "https://micromodal.now.sh/",
        type: "JavaScript",
        description: "A lightweight and accessible library for creating and managing modal dialogs, with support for various options and styles, and a minimalist and unobtrusive design."
      },
      {
        name: "Unpoly",
        url: "https://unpoly.com/",
        type: "JavaScript",
        description: "A progressive enhancement library for the web, that allows developers to add dynamic and seamless page transitions and interactions, to their web apps and interfaces, with a focus on performance and compatibility."
      },
      {
        name: "Eva Design System",
        url: "https://eva.design/",
        type: "Design",
        description: "A comprehensive and customizable design system for creating modern and responsive web and mobile interfaces, with a library of UI components, icons, and typography."
      },
      {
        name: "Howler.js",
        url: "https://howlerjs.com/",
        type: "JavaScript",
        description: "A JavaScript library for playing and managing audio files and sounds, with support for various formats, effects, and features, and a simple and intuitive API."
      },
      {
        name: "Tiptap",
        url: "https://tiptap.dev/",
        type: "JavaScript",
        description: "A modular and extendable editor for the web, based on the ProseMirror framework, with support for various content types, formatting options, and plugins."
      },
      {
        name: "Twind",
        url: "https://twind.dev/",
        type: "CSS",
        description: "A high-performance and developer-friendly CSS-in-JS library, that allows developers to create and style components using plain CSS syntax, and a powerful and intuitive API."
      },
      {
        name: "Lucide",
        url: "https://lucide.dev/",
        type: "Design",
        description: "A customizable and open-source icon set for the web, with a library of vector icons and symbols, that can be easily styled and animated using CSS and JavaScript."
      },
      {
        name: "Papa Parse",
        url: "https://www.papaparse.com/",
        type: "JavaScript",
        description: "A powerful and flexible CSV parser and converter for the web, that allows developers to parse, transform, and manipulate CSV data, using various options and settings."
      },
      {
        name: "Polly.JS",
        url: "https://netflix.github.io/pollyjs/",
        type: "JavaScript",
        description: "A library for recording and replaying HTTP requests and responses, for testing and mocking web applications, with support for various frameworks and environments."
      },
      {
        name: "Luxon",
        url: "https://moment.github.io/luxon/",
        type: "JavaScript",
        description: "A library for working with dates and times in JavaScript, that provides a simple and powerful API, with support for time zones, calendars, and internationalization."
      },
      {
        name: "Boxicons",
        url: "https://boxicons.com/",
        type: "Design",
        description: "A customizable and open-source icon set for the web, with a library of vector icons and symbols, that can be easily styled and animated using CSS and JavaScript."
      },
      {
        name: "PDFShift",
        url: "https://pdfshift.io/",
        type: "Tools",
        description: "A web-based tool and API for converting HTML and CSS to PDF, with support for various options and settings, and integration with popular web frameworks and platforms."
      },
      {
        name: "Reakit",
        url: "https://reakit.io/",
        type: "JavaScript",
        description: "A highly accessible and customizable UI toolkit for React, that provides a set of components and utilities, that can be easily extended and styled, to meet the needs of various users and contexts."
      },
      {
        name: "OSS Index",
        url: "https://ossindex.sonatype.org/",
        type: "Tools",
        description: "A free and open-source vulnerability scanner and information service, that allows developers and users to find and analyze security vulnerabilities in software components and packages, and take proactive measures to mitigate risks and threats."
      },
      {
        name: "Draggable",
        url: "https://shopify.github.io/draggable/",
        type: "JavaScript",
        description: "A powerful and flexible library for drag and drop interactions, that allows developers to create and customize draggable elements and containers, using various options and settings."
      },
      {
        name: "Stimulus",
        url: "https://stimulus.hotwire.dev/",
        type: "JavaScript",
        description: "A modest and lightweight framework for building reactive web applications, that focuses on enhancing existing HTML and CSS with minimal JavaScript, and provides a set of controllers and behaviors, that can be easily integrated and extended."
      },
      {
        name: "Hamburgers",
        url: "https://jonsuh.com/hamburgers/",
        type: "CSS",
        description: "A collection of CSS-animated hamburger icons, that can be easily integrated and customized, to create responsive and accessible menus and navigation bars, for web and mobile interfaces."
      },
      {
        name: "Kendo UI",
        url: "https://www.telerik.com/kendo-ui",
        type: "JavaScript",
        description: "A comprehensive and feature-rich framework for building modern and responsive web applications, that provides a wide range of UI components, data visualization tools, and productivity features, for various web platforms and frameworks."
      },
      {
        name: "Schema",
        url: "https://schema.app/",
        type: "Tools",
        description: "A web-based tool and API for creating and generating JSON-LD structured data, for various web applications and platforms, with support for various schemas and formats, and a user-friendly and customizable interface."
      },
      {
        name: "Embla Carousel",
        url: "https://davidcetinkaya.github.io/embla-carousel/",
        type: "JavaScript",
        description: "A lightweight and customizable carousel and slider library for the web, with support for various features and options, and a minimalist and performant design."
      },
      {
        name: "PixelSnap",
        url: "https://getpixelsnap.com/",
        type: "Tools",
        description: "A tool for measuring and aligning design elements and layouts, on the web and desktop, that provides a set of tools and features, for precise and efficient design work."
      },
      {
        name: "TinyMusic",
        url: "https://github.com/kevincennis/TinyMusic",
        type: "JavaScript",
        description: "A small and simple library for generating and playing music notes and melodies, using JavaScript and the Web Audio API, with support for various instruments and options."
      },
      {
        name: "MVP.css",
        url: "https://andybrewer.github.io/mvp/",
        type: "CSS",
        description: "A minimalist and lightweight CSS framework, that provides a set of styles and components, for creating simple and elegant web interfaces, with a focus on speed, readability, and accessibility."
      },
      {
        name: "Popmotion",
        url: "https://popmotion.io/",
        type: "JavaScript",
        description: "A library for creating and animating UI elements and visual effects, using JavaScript and CSS, that provides a set of tools and features, for building interactive and responsive web interfaces."
      },
      {
        name: "OpenSeadragon",
        url: "https://openseadragon.github.io/",
        type: "JavaScript",
        description: "A powerful and flexible viewer for high-resolution images and maps, that allows users to zoom, pan, and navigate through large and complex datasets, with support for various formats and features."
      },
      {
        name: "Harken",
        url: "https://github.com/philipwalton/harken",
        type: "JavaScript",
        description: "A small and flexible event library for JavaScript, that allows developers to manage and dispatch events, using various methods and patterns, with support for cross-browser compatibility and performance."
      },
      {
        name: "Kite",
        url: "https://kiteapp.co/",
        type: "Tools",
        description: "An AI-powered code completion and suggestion tool, that helps developers to write better and faster code, by providing intelligent and context-aware suggestions, based on their coding habits and patterns."
      },
      {
        name: "Tone.js",
        url: "https://tonejs.github.io/",
        type: "JavaScript",
        description: "A web-based music creation and performance library, that provides a set of tools and features, for generating and playing musical notes and sequences, using JavaScript and the Web Audio API."
      },
      {
        name: "Toast UI Editor",
        url: "https://ui.toast.com/tui-editor/",
        type: "JavaScript",
        description: "A full-featured and customizable editor for the web, that provides a set of tools and features, for creating and editing rich text and markdown content, with support for various formats and platforms."
      },
      {
        name: "CardKit",
        url: "https://cardkit.org/",
        type: "Design",
        description: "A web-based tool and library for creating and customizing interactive and dynamic card designs, with a set of templates and components, that can be easily integrated and extended."
      },
      {
        name: "Chroma.js",
        url: "https://gka.github.io/chroma.js/",
        type: "JavaScript",
        description: "A library for working with colors and color schemes in JavaScript, that provides a set of tools and features, for generating, manipulating, and visualizing colors and gradients, with support for various formats and systems."
      },
      {
        name: "GitSheet",
        url: "https://gitsheet.wtf/",
        type: "Tools",
        description: "A web-based cheat sheet and reference guide for Git, that provides a quick and easy way to learn and use Git commands and workflows, with examples and explanations."
      },
      {
        name: "Notyf",
        url: "https://carlosroso.com/notyf/",
        type: "JavaScript",
        description: "A simple and flexible notification library for the web, that allows developers to create and display custom notifications and alerts, with various styles and animations, using a lightweight and easy-to-use API."
      },
      {
        name: "Jssor Slider",
        url: "https://www.jssor.com/",
        type: "JavaScript",
        description: "A flexible and feature-rich slider and gallery library for the web, that allows developers to create and customize responsive and animated sliders, with various transitions and effects."
      },
      {
        name: "Torus",
        url: "https://torus.sh/",
        type: "Tools",
        description: "An open-source and decentralized authentication platform, that allows users to securely login and verify their identities, without passwords or personal data, using blockchain and cryptography technologies."
      },
      {
        name: "xstyled",
        url: "https://xstyled.dev/",
        type: "CSS",
        description: "A utility-first and theme-based CSS-in-JS library, that allows developers to create and style components using simple and consistent props and values, and a robust and extendable theme system."
      },
      {
        name: "Highway",
        url: "https://highway.js.org/",
        type: "JavaScript",
        description: "A lightweight and flexible library for creating and managing animated transitions and layouts, in web applications and interfaces, with support for various features and options."
      },
      {
        name: "Blotter.js",
        url: "https://blotter.js.org/",
        type: "JavaScript",
        description: "A library for creating and animating text effects and shaders, using WebGL and Three.js, that provides a set of tools and features, for generating dynamic and artistic typographies and graphics."
      },
      {
        name: "Squoosh",
        url: "https://squoosh.app/",
        type: "Tools",
        description: "A web-based tool and API for optimizing and compressing images, for various web platforms and use cases, with support for various formats and settings, and a user-friendly and responsive interface."
      },
      {
        name: "Spectre.css",
        url: "https://picturepan2.github.io/spectre/",
        type: "CSS",
        description: "A minimalist and lightweight CSS framework, that provides a set of styles and components, for creating modern and responsive web interfaces, with a focus on simplicity, performance, and flexibility."
      },
      {
        name: "Parsley.js",
        url: "https://parsleyjs.org/",
        type: "JavaScript",
        description: "A flexible and customizable form validation library for the web, that allows developers to define and enforce various validation rules and patterns, using a declarative and intuitive API."
      },
      {
        name: "EVA",
        url: "https://eva.js.org/",
        type: "JavaScript",
        description: "A lightweight and efficient animation library for the web, that provides a set of tools and features, for creating and managing animations and transitions, using a simple and concise syntax."
      },
      {
        name: "BasicScroll",
        url: "https://basicscroll.electerious.com/",
        type: "JavaScript",
        description: "A library for creating and animating scroll-based effects and animations, in web applications and interfaces, using a declarative and easy-to-use syntax, and a lightweight and efficient implementation."
      },
      {
        name: "Kartograph",
        url: "http://kartograph.org/",
        type: "Tools",
        description: "A library for creating and manipulating interactive maps and visualizations, using SVG and JavaScript, that provides a set of tools and features, for generating and customizing maps, with support for various projections and formats."
      },
      {
        name: "Imager.js",
        url: "https://imagerjs.com/",
        type: "JavaScript",
        description: "A library for creating and managing responsive and optimized images, in web applications and interfaces, that provides a set of tools and features, for loading, resizing, and optimizing images, based on the device and viewport size."
      },
      {
        name: "Midnight.js",
        url: "https://aerolab.github.io/midnight.js/",
        type: "JavaScript",
        description: "A library for creating and managing smooth and animated transitions and effects, between different sections and elements, in web applications and interfaces, using a simple and intuitive API."
      },
      {
        name: "Tippy.js",
        url: "https://atomiks.github.io/tippyjs/",
        type: "JavaScript",
        description: "A lightweight and flexible tooltip library for the web, that allows developers to create and customize tooltips and popovers, with various styles and behaviors, using a simple and efficient API."
      },
      {
        name: "React Move",
        url: "https://react-move.js.org/",
        type: "JavaScript",
        description: "A library for creating and managing animated transitions and effects, in React-based web applications and interfaces, that provides a set of tools and features, for generating and customizing animations, based on data and events."
      },
      {
        name: "Rough.js",
        url: "https://roughjs.com/",
        type: "JavaScript",
        description: "A library for creating and styling hand-drawn graphics and illustrations, on the web, that provides a set of tools and features, for generating and customizing various shapes and styles, using a simple and expressive syntax."
      },
      {
        name: "Tufte CSS",
        url: "https://edwardtufte.github.io/tufte-css/",
        type: "CSS",
        description: "A minimalist and elegant CSS framework, that provides a set of styles and components, for creating and presenting high-quality and informative content, with a focus on typography, layout, and readability."
      },
      {
        name: "Preact",
        url: "https://preactjs.com/",
        type: "JavaScript",
        description: "A fast and lightweight alternative to React, that provides a similar API and features, for building efficient and modular web applications and interfaces, with a smaller and more optimized footprint."
      },
      {
        name: "Ink",
        url: "https://github.com/vadimdemedes/ink",
        type: "JavaScript",
        description: "A library for building command-line interfaces and tools, using React components and declarative syntax, that provides a set of tools and features, for creating and managing terminal-based applications and workflows."
      },
      {
        name: "Splitting.js",
        url: "https://splitting.js.org/",
        type: "JavaScript",
        description: "A library for creating and managing responsive and dynamic text splitting and animations, in web applications and interfaces, using a simple and intuitive API, and a flexible and efficient implementation."
      },
      {
        name: "Pinafore",
        url: "https://pinafore.social/",
        type: "JavaScript",
        description: "A fast and minimal web client for Mastodon, the decentralized social network, that provides a simple and responsive interface, with a focus on accessibility and user experience."
      },
      {
        name: "Vivus",
        url: "https://maxwellito.github.io/vivus/",
        type: "JavaScript",
        description: "A library for creating and animating SVG-based illustrations and icons, in web applications and interfaces, using various methods and styles, that provides a set of tools and features, for generating and customizing animations, based on the shape and path of the SVG elements."
      },
      {
        name: "Svelte",
        url: "https://svelte.dev/",
        type: "JavaScript",
        description: "A component-based and reactive framework for building fast and lightweight web applications and interfaces, that provides a simple and intuitive API and syntax, and a compiler-based approach, for generating optimized and efficient code."
      },
      {
        name: "GreenSock",
        url: "https://greensock.com/",
        type: "JavaScript",
        description: "A library for creating and managing advanced animations and transitions, in web applications and interfaces, using a robust and powerful API and syntax, that provides a wide range of features and tools, for generating and customizing animations, based on various parameters and events."
      },
      {
        name: "Zdog",
        url: "https://zzz.dog/",
        type: "JavaScript",
        description: "A library for creating and animating 3D shapes and models, in web applications and interfaces, using a simple and declarative API and syntax, that provides a set of tools and features, for generating and customizing 3D graphics, with a focus on performance and efficiency."
      },
      {
        name: "React Spring",
        url: "https://www.react-spring.io/",
        type: "JavaScript",
        description: "A library for creating and managing advanced and fluid animations and transitions, in React-based web applications and interfaces, using a physics-based approach, that provides a set of tools and features, for generating and customizing animations, based on various forces and constraints."
      },
      {
        name: "TeXt",
        url: "https://kitian616.github.io/text/",
        type: "CSS",
        description: "A minimal and responsive CSS framework, that provides a set of styles and components, for creating and formatting text-based content, with a focus on typography, spacing, and readability."
      },
      {
        name: "ScrollReveal",
        url: "https://scrollrevealjs.org/",
        type: "JavaScript",
        description: "A library for creating and managing scroll-based effects and animations, in web applications and interfaces, using a declarative and intuitive API and syntax, that provides a set of tools and features, for generating and customizing animations, based on the scroll position and direction."
      },
      {
        name: "Ztext",
        url: "https://bennettfeely.com/ztext/",
        type: "JavaScript",
        description: "A library for creating and animating 3D text and typography, in web applications and interfaces, using a simple and lightweight API and syntax, that provides a set of tools and features, for generating and customizing 3D text effects, based on various parameters and styles."
      },
      {
        name: "Whimsical",
        url: "https://whimsical.com/",
        type: "Tools",
        description: "A web-based tool for creating and sharing diagrams, flowcharts, wireframes, and other visual assets, that provides a set of templates and tools, for generating and customizing various designs, with a focus on collaboration and communication."
      },
      {
        name: "Flickity",
        url: "https://flickity.metafizzy.co/",
        type: "JavaScript",
        description: "A library for creating and managing touch-based and responsive carousels and sliders, in web applications and interfaces, that provides a set of features and options, for generating and customizing various styles and behaviors, with a focus on performance and accessibility."
      },
      {
        name: "Torus-CLI",
        url: "https://docs.toruswallet.io/build/key-management/torus-cli/",
        type: "Tools",
        description: "A command-line interface for interacting with the Torus authentication platform, that allows users to securely login and verify their identities, without passwords or personal data, using blockchain and cryptography technologies."
      },
      {
        name: "Litepicker",
        url: "https://wakirin.github.io/Litepicker/",
        type: "JavaScript",
        description: "A lightweight and flexible date and time picker library for the web, that allows users to select and display dates and times, with various formats and styles, using a simple and intuitive interface."
      },
      {
        name: "Nano ID",
        url: "https://zelark.github.io/nano-id-cc/",
        type: "JavaScript",
        description: "A tiny and secure library for generating unique and random IDs and tokens, in web applications and interfaces, that provides a set of methods and options, for creating and verifying various types of IDs, with a low collision rate and a small footprint."
      },
      {
        name: "Mavo",
        url: "https://mavo.io/",
        type: "JavaScript",
        description: "A declarative and lightweight framework for creating and managing dynamic and interactive web applications and interfaces, using HTML and CSS, that provides a set of tools and features, for generating and customizing various components and behaviors, without the need for JavaScript or back-end programming."
      },
      {
        name: "Bideo.js",
        url: "https://rishabhp.github.io/bideo.js/",
        type: "JavaScript",
        description: "A library for creating and managing full-screen and background videos, in web applications and interfaces, using a simple and responsive API and syntax, that provides a set of tools and features, for generating and customizing various types of videos, with a focus on performance and quality."
      },
      {
        name: "Midori",
        url: "https://github.com/kristoferjoseph/midori",
        type: "CSS",
        description: "A modern and responsive CSS framework, that provides a set of styles and components, for creating and styling web interfaces and layouts, with a focus on simplicity, consistency, and flexibility."
      },
      {
        name: "Inkdrop",
        url: "https://www.inkdrop.app/",
        type: "Tools",
        description: "A cross-platform and secure note-taking app, for developers and designers, that provides a set of tools and features, for organizing, writing, and sharing notes, with a focus on productivity and efficiency."
      },
      {
        name: "Moonjs",
        url: "https://moonjs.org/",
        type: "JavaScript",
        description: "A minimalist and modular framework for building web applications and interfaces, using JavaScript and HTML, that provides a set of tools and features, for generating and customizing various components and behaviors, with a focus on simplicity and performance."
      },
      {
        name: "Kakoune",
        url: "https://kakoune.org/",
        type: "Tools",
        description: "A fast and extensible text editor, with a client-server architecture, that provides a set of tools and features, for editing and manipulating text files, with a focus on modularity and efficiency."
      },
      {
        name: "RoughNotation",
        url: "https://roughnotation.com/",
        type: "JavaScript",
        description: "A library for creating and annotating web elements and components, with hand-drawn and sketchy effects, using SVG and JavaScript, that provides a set of tools and features, for generating and customizing various styles and animations, with a focus on visual interest and storytelling."
      },
      {
        name: "GrapesJS",
        url: "https://grapesjs.com/",
        type: "Tools",
        description: "A web-based page builder and editor, that allows users to create and design web pages and templates, using a drag-and-drop interface and a set of built-in components and styles, with a focus on usability and customization."
      },
      {
        name: "Stacker",
        url: "https://stacker.app/",
        type: "Tools",
        description: "A web-based app for creating and managing landing pages and websites, using a visual and intuitive interface, that provides a set of tools and features, for designing and customizing various elements and sections, with a focus on conversion and optimization."
      },
      {
        name: "Notyf",
        url: "https://carlosroso.com/notyf/",
        type: "JavaScript",
        description: "A lightweight and customizable library for displaying notifications and alerts, in web applications and interfaces, using a simple and intuitive API and syntax, that provides a set of options and styles, for generating and managing various types of notifications, with a focus on user experience and accessibility."
      },
      {
        name: "Nano-SQL",
        url: "https://nanosql.io/",
        type: "JavaScript",
        description: "A simple and powerful library for managing and querying databases, in web applications and interfaces, using a flexible and intuitive API and syntax, that provides a set of features and options, for generating and customizing various types of databases, with a focus on scalability and performance."
      },
      {
        name: "Featherlight",
        url: "https://noelboss.github.io/featherlight/",
        type: "JavaScript",
        description: "A lightweight and responsive lightbox plugin for displaying images, videos, and other media, in web applications and interfaces, using a simple and intuitive API and syntax, that provides a set of options and styles, for generating and managing various types of lightboxes, with a focus on accessibility and ease of use."
      }
    
  ];
 
  db.resources.insertMany(resources)
export const experience = [
    {
        role: 'Senior Engineer',
        company: "Miyar",
        link: "https://miyar.co/",
        from: "2022",
        to: 'present',
        apps: [],
        'technologies_used': ['Qwik', 'Tailwind CSS', 'GraphQL', 'AWS-CDK', 'AWS-DynamoDB', 'Typescript'],
        desc: 'As full-stack developer my duties ranges from front-end to back-end. I was responsible for dashboard design using Qwik and Tailwind CSS. For back-end I\'m working on alert notifications using ElectroDB (DynamoDB), GraphQL and AWS-lambda functions to create and modify alert notifications.',
    },{
        role: 'Full-stack Developer',
        company: "DomainDar",
        link: "https://domaindar.pk/",
        from: "Mar",
        apps: [],
        to: 'Dec 2022',
        'technologies_used': ['Svelte-kit', 'GraphQL', 'Typescript', 'AWS-CDK', 'AWS-DynamoDB', 'AWS-Lembda', 'AWS-Appsync', 'AWS-Cognito'],
        desc: 'I am the sole front-end developer. I used Svelte-kit with GraphQL and Typescript to fetch data from the server. On the back-end, we used AWS-CDK along with aws-dynamodb, aws-lembda, aws-appsync, aws-cognito combined with GraphQL. I\'ve contributed to writing an AWS-lambda function to check domain names\' availability.',
    },{
        role: 'Full-stack Developer',
        company: "PC Builder",
        link: "https://pc-builder.net/",
        from: "2021",
        to: 'Feb 2022',
        apps: [],
        image: '/images/hero.jpg',
        'technologies_used': ['Qwik', 'Typescript', 'Tailwind CSS', 'PHP', 'REST-API', 'WordPress', 'Headless WordPress'],
        desc: 'I created this incredible web app where users can customize their personal computers by picking their favorite components and adding them to the build. As a solo engineer I wrote a Wordpress theme in PHP to use Headless WordPress. I created custom post types and REST routes. On front-end using Qwik, Typescript, Tailwind and RESP-API I was able to represent data in the desired way.',
    },{
        role: 'Full-stack Developer',
        company: "Jamun",
        link: "https://jamun.co/",
        from: "2019",
        to: 'May 2021',
        image: '/images/hero.jpg',
        'technologies_used': ['Hugo', 'Go', 'Next.js', 'React', 'Node.js', 'CSS', 'TypeScript', 'Netlify'],
        desc: 'As a fullstack engineer at Jamun my responsibilities range from frontend implementation of designs to end-to-end project development. Below are some of the end-to-end projects I\'ve worked on.',
        apps: [
            {
                name: 'BKB Mag',
                link: 'https://bkbmag.com/'
            },{
                name: 'Perfect tech reviews',
                link: 'https://www.perfecttechreviews.com/'
            },{
                name: 'Jamun',
                link: 'https://jamun.co/'
            },{
                name: 'Final Desktop',
                link: 'https://finaldesktop.com/'
            },{
                name: 'Mobiles prices in Pakistan',
                link: 'https://mobilepriceinpakistan.pk/'
            }
        ]
    },{
        role: 'Full-stack Developer',
        company: "Mobile Applications",
        link: "",
        from: "2018",
        to: '2019',
        image: '/images/hero.jpg',
        'technologies_used': ['React Native', 'CSS', 'GraphQL', 'TypeScript', 'Express', 'PostgreSQL', 'MongoDB'],
        desc: 'Arogga an app for an online pharmacy operating in Bangladesh. I worked with my team to implemented the designs in React Native, and published on both iOS and Android. I also built the backend in NodeJS using Sequelize connected to PostgreSQL database. The API is exposed via a GraphQL endpoint using Express. I was a sole developer of Trusted Blue Auto I used React Native as well MongoDB and Express.',
        apps: [
            {
                name: 'Arroga',
                link: 'https://play.google.com/store/apps/details?id=com.arogga.app&hl=en_US&gl=US&pli=1'
            },{
                name: 'Trusted Blue Auto',
                link: 'https://appadvice.com/app/trusted-blue-auto/1482634825'
            }
        ]
    },{
        role: 'Frontend Developerr',
        company: "Ejad Labs",
        link: "https://ejadlabs.com/",
        from: "2016",
        to: '2018',
        apps: [],
        image: '/images/hero.jpg',
        'technologies_used': ['React', 'CSS', 'GraphQL', 'TypeScript', 'Express', 'PostgreSQL'],
        desc: 'As a frontend developer I was responsible for developing websites and web apps including ejadlabs.com. I also helped build some internal web apps including a full featured CRM built using ReactJS connected to GraphQL backends.',
    },
]


export const projects = [
    {
        name: 'Miyar - Website Testing Platform',
        desc: 'Discover the best website testing platform for efficient and reliable personalized user-flow tests, ensuring seamless experiences, avoiding broken websites, and preserving revenue.',
        image: require('/images/miyar.jpg'),
        link: 'https://miyar.co/'
    },{
        name: 'DomainDar - Escrow services',
        desc: 'Choose the best domain registration and management experience for .PK domain names.',
        image: require('/images/domaindar.jpg'),
        link: 'https://domaindar.pk/'
    },{
        name: 'PC Builder',
        desc: 'PCBuilder is the easiest way to build your own custom PC. We make it easy to find compatible parts and put them all together for you.',
        image: require('/images/pcbuilder.jpg'),
        link: 'https://pc-builder.net/'
    },{
        name: 'Perfect Tech Reviews',
        desc: 'We at Perfect Tech Reviews, help you to find best products for your needs. You can find all the latest news and TechReviews on Technology, Gadgets, and all...',
        image: require('/images/perfect-tech-reviews.jpg'),
        link: 'https://www.perfecttechreviews.com/'
    },{
        name: 'Final Desktop',
        desc: 'At Final Desktop, we do Research & review PC components daily to help you find the best for your gaming rig. We cover Motherboards, CPUs, Graphics Cards, RAMs...',
        image: require('/images/final-desktop.jpg'),
        link: 'https://finaldesktop.com/'
    },{
        name: 'BKB Mag',
        desc: 'BKB Mag brings you the latest in PC and console gaming news, updates, and reviews. Stay ahead of the competition with our coverage of the latest games.',
        image: require('/images/bkb-mag.jpg'),
        link: 'https://bkbmag.com/'
    },{
        name: 'Jamun',
        desc: 'We build and scale serverless and JAMStack products and services.',
        image: require('/images/jamun.jpg'),
        link: 'https://jamun.co/'
    },{
        name: 'Ejad Labs',
        desc: 'Leading Digital Accelerator in Pakistan & South Asia. We conduct International Summits & Business Development Programs in South Asia, USA, & Europe, in partnerships with governments, corporates, startups & entrepreneurs.',
        image: require('/images/ejad-labs.jpg'),
        link: 'https://ejadlabs.com/'
    },{
        name: 'Arogga Mobile App',
        desc: 'With Arogga app, getting the medicine you need is simple. Download the easy-to-use Arogga App to conveniently order your medicines from anywhere, at anytime.',
        image: require('/images/arogga.jpg'),
        link: 'https://apps.apple.com/us/app/arogga/id1499378347'
    },{
        name: 'Trusted Blue Auto Mobile App',
        desc: 'Trusted Blue Auto is a subscription car care club based in Springfield, MO that provides its members with no charge oil changes...',
        image: require('/images/trusted-blue-auto.jpg'),
        link: 'https://play.google.com/store/apps/details?id=com.tba.trustedblueauto&hl=en_US&gl=US'
    },
]

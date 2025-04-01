export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Nhi Vo',
    subtitle: 'Welcome to My Corner of Code, Curation and Curiosity!',
    description: 'Nhi Vo\'s Website - My Corner of Code, Curation and Curiosity',
    image: {
        src: '/profile.jpg',
        alt: 'Preview of the website'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        // {
        //     text: 'Projects',
        //     href: '/projects'
        // },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    footerNavLinks: [
        {
            text: 'Tags',
            href: '/tags'
        },
        {
            text: 'Terms',
            href: '/terms'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/nhi-vo/'
        },
        {
            text: 'Google Scholar',
            href: 'https://scholar.google.com.au/citations?user=qS_smE8AAAAJ'
        },
        {
            text: 'Instagram',
            href: 'https://www.instagram.com/vnyennhi/'
        },
        {
            text: 'Tumblr',
            href: 'https://www.tumblr.com/nh1v0'
        }
    ],
    hero: {
        title: '',
        text: "I'm **Nhi Vo**, a data science and analytics leader with a Ph.D. and a deep love for all things data — especially the messy, complicated kind. I thrive on optimizing algorithms, designing scalable analytics systems, and making sense of chaos with machine learning and statistical models. My expertise spans machine learning, statistical modeling, and large-scale data analysis, enabling teams to make informed, data-driven decisions. I have a passion for sharing knowledge and insights, and I believe in the power of collaboration to drive innovation. Feel free to reach out if you want to connect or collaborate on a project. Let's make data work for us!",
        image: {
            src: '/profile.jpg',
            alt: 'My carricature',
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    // subscribe: {
    //     title: 'Subscribe to My Newsletter',
    //     text: 'One update per month. All the latest posts directly in your inbox.',
    //     formUrl: '#'
    // },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

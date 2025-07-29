import Logo from "./Logo.png";
import close_icon from './close_icon.svg'
import menu_icon from './menu_icon.svg'
import heroimage from './heroimage.png'
import leologo from './Leologo.png'
import eventposter from './eventposter.jpg'
import gmail_logo from "./gmail_logo.svg";
import facebook_logo from "./facebook_logo.svg";
import instagram_logo from "./instagram_logo.svg";
import twitter_logo from "./twitter_logo.svg";
import list_icon from './list_icon.svg'
import add_icon from './add_icon.svg'
import comment_icon from './comment_icon.svg'
import home_icon from './home_icon.svg'
import upload_icon from './upload_icon.svg'
import delete_icon from './delete_icon.svg'
import cross_icon from './cross_icon.svg'
import tick_icon from './tick_icon.svg'
import bg from './bg.jpg'
import bg_video from './bg_video.mp4'
import test_mask from './test_mask.svg?url'
import bg_video_2 from './bg_video_2.mp4'

export const assets = {
    Logo,
    close_icon,
    menu_icon,
    heroimage,
    leologo,
    eventposter,
    gmail_logo,
    facebook_logo,
    instagram_logo,
    twitter_logo,
    list_icon,
    add_icon,
    comment_icon,
    home_icon,
    upload_icon,
    delete_icon,
    cross_icon,
    tick_icon,
    bg,
    bg_video,
    test_mask,
    bg_video_2
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", homeSection: true },
    { name: "Events", path: "/events" },
    { name: "Content", path: "/content" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Team", path: "/team" },
]

export const eventsData = [
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "12th September",
        Venue: "Mehek",
        type: 'Pantheon',
        image: assets.eventposter,
        description: "An interesting murder solving case.",
        teamSize: "4",
        status: "Upcoming"
    },
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "12th September",
        Venue: "Mehek",
        type: 'Pantheon',
        image: assets.eventposter,
        description: "An interesting murder solving case.",
        teamSize: "4",
        status: "",
    },
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "12th September",
        Venue: "Mehek B",
        type: 'Bitotsav',
        image: assets.eventposter,
        description: "An interesting murder solving case.",
        teamSize: "4"
    },
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "12th September",
        Venue: "Mehek D",
        type: 'Deepotsav',
        image: assets.eventposter,
        description: "An interesting murder solving case.",
        teamSize: "4"
    },
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "12th September",
        Venue: "Mehek S",
        type: 'Social Events',
        image: assets.eventposter,
        description: "An interesting murder solving case.",
        teamSize: "4"
    },
]

export const contentData = [
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Without justice and love, peace will always be a great illusion.—Dom Hélder Câmara Imagine a world where accountability is optional and crimes go unanswered — unthinkable, right? Justice is more than a concept; it’s a commitment that grows quietly through actions and fairness. It’s the strength that heals and unites humanity.It’s the thread that holds the fabric of civilization together. As a pillar of dignity and hope, the International Criminal Court stands firm in defending truth, breaking through fear and impunity. Each year on July 17, the International Day of Justice brings the world together to affirm that accountability matters, and justice must prevail. We at Leo Club, BIT Mesra , extend our warm wishes on International Justice Day. Justice isn’t just a destination but a journey shaped by those who care.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Leo observes World Population Day as one of the most important events.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Leo observes World Population Day as one of the most important events.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Leo observes World Population Day as one of the most important events.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Leo observes World Population Day as one of the most important events.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "World Population Day",
        description: "Leo observes World Population Day as one of the most important events.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Blog",
        instaLink: "https/#",
        fbLink: "",
        linkedinLink: ""
    },
    {
        image: assets.eventposter,
        title: "Takeshi's Castle",
        description: "Leo announces the most awaited event of BITOTSAV 2025.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Video",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "Takeshi's Castle",
        description: "Leo announces the most awaited event of BITOTSAV 2025.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Video",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "Takeshi's Castle",
        description: "Leo announces the most awaited event of BITOTSAV 2025.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Video",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "Takeshi's Castle",
        description: "Leo announces the most awaited event of BITOTSAV 2025.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Video",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "Takeshi's Castle",
        description: "Leo announces the most awaited event of BITOTSAV 2025.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Video",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "What is Leo?",
        description: "Know about Leo and it's impact.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Post",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "What is Leo?",
        description: "Know about Leo and it's impact.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Post",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "What is Leo?",
        description: "Know about Leo and it's impact.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Post",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "What is Leo?",
        description: "Know about Leo and it's impact.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Post",
        link: "https/#"
    },
    {
        image: assets.eventposter,
        title: "What is Leo?",
        description: "Know about Leo and it's impact.",
        date: "12th Feb, 2025",
        workCredit: "Umang",
        contentCredit: "Srivastava",
        type: "Post",
        link: "https/#"
    }
]

export const gallery = [
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
    {link: "https://images.unsplash.com/photo-1719368472026-dc26f70a9b76?q=80&h=800&w=800&auto=format&fit=crop"},
]
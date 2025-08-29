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
import intro_vid from './intro_vid.mp4'
import bg_image from './bg_image.png'
import img1 from './gallery/img1.jpg'
import img2 from './gallery/img2.jpg'
import img3 from './gallery/img3.jpg'
import img4 from './gallery/img4.jpg'

import event1 from './Events/1.png'
import event2 from './Events/2.png'
import event3 from './Events/3.png'
import mh from './Events/mh.png'
import mm from './Events/mm.png'
import mrp from './Events/mrp.png'
import orp from './Events/orp.png'

import post1 from './Posts/1.png'
import post2 from './Posts/2.png'
import post3 from './Posts/3.png'
import post4 from './Posts/4.png'
import v1 from './Posts/v1.png'
import v2 from './Posts/v2.png'

export const assets = {
    post1, post2, post3, post4, v1, v2,
    event1,
    event2,
    event3,
    mh,
    mm,
    mrp,
    orp,
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
    bg_video_2,
    intro_vid,
    bg_image
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
        Date: "5th September",
        Venue: "Mehek Canteen",
        type: 'Pantheon',
        image: assets.mm,
        description: "The clock is ticking... Only few days left until the Leo Club's Murder Mystery 2025 begins! As the seconds pass, tension mounts and suspicions grow. Will you crack the case, or will you get caught in its intricate web? The countdown to mystery and murder has officially started! Whispers of secret alliances and hidden motives echo through the halls. Every glance, every hushed conversation could hold the key to unraveling the impending crime. As participants gather their wits and don their disguises, the air crackles with anticipation. Who among them will emerge as the master detective, and who might be harboring deadly secrets? The game is afoot, and time waits for no one. Are you ready to step into a world where nothing is as it seems?",
        teamSize: "4",
        status: ""
    },
    {
        name: "Mr and Miss Pantheon",
        Month: "September",
        Date: "7th September",
        Venue: "GP Birla",
        type: 'Pantheon',
        image: assets.mrp,
        description: `Step into the spotlight and let your confidence, charisma, and creativity shine at Mr. & Miss Pantheon, the most glamorous fashion show of the fest. This event celebrates elegance, personality, and style while giving participants a platform to showcase not just their outfits but also their confidence and presence.

Contestants will walk the ramp in themed rounds that test their fashion sense, individuality, and stage appeal. The winners will earn the prestigious titles of Mr. Pantheon and Miss Pantheon, along with prizes and glory.

Whether you’re bold, elegant, quirky, or experimental, the ramp is yours to own!`,
        teamSize: "1",
        status: "Upcoming",
    },
    {
        name: "Takeshi Castle",
        Month: "February",
        Date: "12th February",
        Venue: "Shorbagh",
        type: 'Bitotsav',
        image: assets.event2,
        description: "Get ready for a whirlwind of unpredictable challenges, wild wipeouts, and non-stop laughter! From crashing through mystery doors to scrambling into shape-based alliances, racing on skateboards, and navigating blindfolded mazes—every round is a test of wit, speed, and sheer luck. Will you make it to the final showdown, or will the obstacles have the last laugh?",
        teamSize: "4"
    },
    {
        name: "Mismatched",
        Month: "February",
        Date: "14th February",
        Venue: "Room 236",
        type: 'Bitotsav',
        image: assets.event1,
        description: "Mismatched is here to put that to the test in the most unexpected ways! From trying to read each other’s minds in the Telepathy Test, to awkwardly sketching on each other's backs in the Draw Relay, and finally tackling the chaotic Synergy Quest, this event is all about teamwork, trust, and a whole lot of laughter. It’s not about getting it perfect—it’s about embracing the confusion, miscommunication, and the absolute hilarity that comes with it!",
        teamSize: "3"
    },
    {
        name: "Deepotsav",
        Month: "October",
        Date: "14th October",
        Venue: "NCC Ground",
        type: 'Deepotsav',
        image: assets.event3,
        description: "This 18th to 20th October, Leo Club BIT Mesra, brings you Deepotsav—a celebration like no other, where ancient roots blend with modern vibes. We're throwing it down for the biggest cultural showdown of the year, honoring India's legendary heroes, mythological icons, and the spirits that shaped our history.From epic performances to artistic flair, this is where the festive season comes alive. It’s not just a festival, it’s a movement—where the lights burn brighter, the beats hit harder, and the campus comes together to celebrate in style. Be there to witness tradition go full throttle!",
        teamSize: "1"
    },
    {
        name: "Orphanage Visit",
        Month: "January",
        Date: "12th January",
        Venue: "NCC",
        type: 'Social Events',
        image: assets.orp,
        description: `Get ready to spread joy and make a difference! Our club is organizing a heartwarming visit to an orphanage, and we need you to help and make it unforgettable by bringing smiles to those who need it the most—together, we can light up their world!

We’re calling on your kindness to help us collect:
• Warm clothing like jackets and sweaters
• Books, notebooks, pens, and pencils
• Toys and other essentials
`,
        teamSize: "1"
    },
    {
        name: "Mental Health Webinar",
        Month: "September",
        Date: "12th September",
        Venue: "Google Meet",
        type: 'Social Events',
        image: assets.mh,
        description: `Ever felt like your mind is a web of open tabs, each demanding your attention, yet none fully loading?

In the chaos of daily life, mental health often gets pushed aside, dismissed as something we’ll “deal with later.” But just like a system slows down when overloaded, so do we. Stress, anxiety, and emotional fatigue creep in silently, affecting our thoughts, relationships, and well-being. It’s time to pause, reset, and prioritize what truly matters—our mental health.`,
        teamSize: "Solo"
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
    {link: img1},
    {link: img2},
    {link: img3},
    {link: img4},
    {link: img3},
    {link: img2},
]
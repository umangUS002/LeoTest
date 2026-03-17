import Logo from "./Logo.png";
import close_icon from './close_icon.svg'
import menu_icon from './menu_icon.svg'
import heroimage from './heroimage.png'
//import leologo from './Leologo.png'
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
//import bg_video from './bg_video.mp4'
import test_mask from './test_mask.svg?url'
import bg_video_2 from './bg_video_2.mp4'
//import intro_vid from './intro_vid.mp4'

//import intro_vid_mob from './intro_vid_mob.mp4'

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

import GTA from './Events/GTA.jpeg'
import howimet from './Events/howimet.png'

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
    leologo : "https://ik.imagekit.io/umang1gb/LeoClubSiteContent/Leologo.png",
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
    bg_video : "https://ik.imagekit.io/umang1gb/LeoClubSiteContent/bg_video.mp4",
    test_mask,
    bg_video_2,
    intro_vid : "https://ik.imagekit.io/umang1gb/LeoClubSiteContent/intro_vid.mp4?updatedAt=1769696783906",
    bg_image,
    intro_vid_mob : "https://ik.imagekit.io/umang1gb/LeoClubSiteContent/intro_vid.mp4?updatedAt=1769696783906",
    GTA,
    howimet
}

export const menuLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "#about", homeSection: true },
    { name: "Events", path: "/events" },
    { name: "Content", path: "/content" },
    { name: "Gallery", path: "/gallery" },
    { name: "Our Team", path: "/team" },
]

export const questions = [

  {
    id: 1,
    text: "Preferred Work Style",
    options: [
      "Fast execution",
      "Careful planning",
      "Collaboration",
      "Independent work"
    ]
  },

  {
    id: 2,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },

  {
    id: 3,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },
  {
    id: 4,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  },
  {
    id: 5,
    text: "Decision Making",
    options: [
      "Data driven",
      "Instinct",
      "Team discussion",
      "Leader decides"
    ]
  }

]

export const eventsData = [
    {
        name: "Murder Mystery",
        Month: "September",
        Date: "5th September",
        Venue: "Apni Rasoi",
        type: 'Pantheon',
        image: assets.mm,
        description: "The clock is ticking... Only few days left until the Leo Club's Murder Mystery 2025 begins! As the seconds pass, tension mounts and suspicions grow. Will you crack the case, or will you get caught in its intricate web? The countdown to mystery and murder has officially started! Whispers of secret alliances and hidden motives echo through the halls. Every glance, every hushed conversation could hold the key to unraveling the impending crime. As participants gather their wits and don their disguises, the air crackles with anticipation. Who among them will emerge as the master detective, and who might be harboring deadly secrets? The game is afoot, and time waits for no one. Are you ready to step into a world where nothing is as it seems?",
        teamSize: "4",
        status: "Completed"
    },
    {
        name: "Mr and Miss Pantheon",
        Month: "September",
        Date: "7th September",
        Venue: "GP Birla",
        type: 'Pantheon',
        image: assets.mrp,
        description: `The lights rise, the music builds, and the runway awakens. Mr. & Miss Pantheon ’25  presented by the Leo Club is not just a stage — it’s where elegance meets ambition, where style becomes story, and where presence turns into power. This year’s theme, “Threads of Time,” celebrates more than fashion. It is about weaving your journey into every detail, letting the past and the future meet in this defining moment.It is glamour, yes — but it is also legacy. Because crowns may shine for a night, but the impact of this stage lasts far beyond it. So when the spotlight finds you… will you simply walk, or will you leave a mark time cannot forget?`,
        teamSize: "1",
        status: "Completed",
    },
    {
        name: "GTA : Leo Santos",
        Month: "March",
        Date: "20th March",
        Venue: "Shorbagh - 2",
        type: 'Bitotsav',
        image: assets.GTA,
        description: "GTA: LEO Santos is an action-packed, GTA-inspired event where teams of two compete through multiple strategic rounds. Players must complete missions like clue hunting, weapon collection, territory control, and quick reaction challenges. Teams sabotage rivals and gather resources to advance through the rounds. The final challenge is an intense RC car race, where the best crew claims control of LEO Santos. The final round brings pure adrenaline as the remaining teams compete in an RC car race through a GTA-themed arena, battling for the ultimate victory. Only the smartest crews will survive the chaos, control the streets, and become the true rulers of LEO Santos.",
        teamSize: "4",
        status: "Upcoming",
        link: "https://bitotsav.bitmesra.ac.in/events/formal-gta-leo-santos"
    },
    {
        name: "How I Met Your __ ?",
        Month: "March",
        Date: "21st March",
        Venue: "Room 236 - 231",
        type: 'Bitotsav',
        image: assets.howimet,
        description: "How Met Your is a multi-round pair event where participants are tested on communication, puzzle-solving, sensory description, and song-based coordination. This event tests communication, teamwork, and problem-solving skills through multiple exciting rounds. Participants can join individually or as a duo and will face challenges like rapid-fire questions, puzzle solving, object-guessing tasks, and a fun music identification round. Each stage evaluates coordination and quick thinking between partners. Only the best teams will advance to the final round and claim victory.",
        teamSize: "2",
        status: "Partially Completed",
        link: "https://bitotsav.bitmesra.ac.in/events/informal-how-met-your"
    },
    {
        name: "Deepotsav",
        Month: "October",
        Date: "12th October",
        Venue: "IC Arena",
        type: 'Deepotsav',
        image: assets.event3,
        description: "This 12th October, Leo Club BIT Mesra, brings you Deepotsav—a celebration like no other, where ancient roots blend with modern vibes. We're throwing it down for the biggest cultural showdown of the year, honoring India's legendary heroes, mythological icons, and the spirits that shaped our history.From epic performances to artistic flair, this is where the festive season comes alive. It’s not just a festival, it’s a movement—where the lights burn brighter, the beats hit harder, and the campus comes together to celebrate in style. Be there to witness tradition go full throttle!",
        teamSize: "N.A"
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
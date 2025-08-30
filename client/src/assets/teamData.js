const images = import.meta.glob('/src/assets/team/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const getImage = (filename) => images[`/src/assets/team/${filename}`];

const faculty = [
  {
    name: "Dr. Bhaskar Karn",
    position: "Dean Student Affairs",
    image: getImage("facd1.jpg"),
    email: "dosa@bitmesra.ac.in",
  },
  {
    name: "Dr. Amit Saran",
    position: "Professor-In-Charge",
    image: getImage("amitsir.jpeg"),
    email: "amitsaran@bitmesra.ac.in",
  },
];

const seniorExecutives = [
  {
    name: "Shubham Kumar",
    position: "President",
    image: getImage("1.jpg"),
    email: "shubhamk16080@gmail.com",
    instagram: "https://www.instagram.com/Kumar_shubham16",
    linkedin: "https://in.linkedin.com/in/shubhamk1608"
  },
  {
    "name": "Adarsh Raj",
    "position": "Joint-President",
    "image": getImage("2.jpg"),
    "email": "adarshrajsinghars@gmail.com",
    "instagram": "https://www.instagram.com/adarsh_raj18?igsh=MXhnbGJ2M3BzOGlieA==",
    "linkedin": "https://www.linkedin.com/in/iadarshraj/"
  },
  {
    "name": "Rishav Kumar",
    "position": "Vice President",
    "image": getImage("3.jpg"),
    "email": "rishavkumar3864@gmail.com",
    "instagram": "https://www.instagram.com/__rishavsingh12?igsh=MTZxcm5oOXRiNDhwNQ==",
    "linkedin": "https://www.linkedin.com/in/rishav-kumar-7089732b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Khushi Sharma",
    "position": "Vice President",
    "image": getImage("4.jpeg"),
    "email": "btech10007.22@bitmesra.ac.in",
    "instagram": "https://www.instagram.com/khushisharma_.15/",
    "linkedin": "https://www.linkedin.com/in/khushi-sharma-267108269/"
  },
  {
    "name": "Dishaan",
    "position": "Vice President",
    "image": getImage("5.JPG"),
    "email": "dishaand2003@gmail.com",
    "instagram": "https://www.instagram.com/dishaan_d_33?igsh=MXU5emo0Y3RjMnhscA==",
    "linkedin": "https://www.linkedin.com/in/dishaan-d-43890a2a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Aakanksha Pathak",
    "position": "Director",
    "image": getImage("6.jpg"),
    "email": "aakankshapathak03@gmail.com",
    "instagram": "https://www.instagram.com/aakanksha_2223/",
    "linkedin": "https://www.linkedin.com/in/aakanksha-pathak-786711290"
  },
  {
    "name": "Akash Kumar Tiwary",
    "position": "Senior Webmaster",
    "image": getImage("7.jpg"),
    "email": "1akashtiwary@gmail.com",
    "instagram": "https://www.instagram.com/akashdidwhat",
    "linkedin": "https://www.linkedin.com/in/akashkt10172"
  },  
  {
    "name": "Rajnish Kumar",
    "position": "Senior Events LEAD",
    "image": getImage("8.jpg"),
    "email": "rajnishtiwary23@gmail.com",
    "instagram": "https://www.instagram.com/rajjjjoooooo?igsh=MWcwaWllZmF2djNobA==",
    "linkedin": "https://www.linkedin.com/in/rajnish-tiwary2303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },  
  {
    "name": "PRANAV RAJ SRIVASTAV",
    "position": "Senior Events LEAD",
    "image": getImage("9.jpg"),
    "email": "rinshpranav12@gmail.com",
    "instagram": "https://www.instagram.com/pranav_raj_srivastav_03?igsh=MWkwZDhtZXByeGdzbw==",
    "linkedin": "https://www.linkedin.com/in/pranavrajsrivastav?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Tanuja Kumari",
    "position": "Publicity Head and Co-Director",
    "image": getImage("10.jpg"),
    "email": "tanujatanu0904@gmail.com",
    "instagram": "https://instagram.com/tanuzaa_tanu",
    "linkedin": "https://www.linkedin.com/in/tanuja-kumari-5b983325b"
  },
  {
    "name": "Nikunj Naman",
    "position": "Video Head",
    "image": getImage("11.jpg"),
    "email": "namannikunj24@gmail.com",
    "instagram": "https://www.instagram.com/nikunj_n_sharma?igsh=dHAxdXhkc2luc3B5",
    "linkedin": "https://www.linkedin.com/in/nikunj-sharma-7a0a0337b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },  
  {
    "name": "Divya Priyadarshini",
    "position": "Senior Executive Member",
    "image": getImage("12.png"),
    "email": "divyapriyadarshini193@gmail.com",
    "instagram": "https://www.instagram.com/divvvyap/",
    "linkedin": "https://www.linkedin.com/in/divya-priyadarshini/"
  },
  {
    "name": "Anjan kumar Rajak",
    "position": "Senior Executive member",
    "image": getImage("13.jpg"),
    "email": "anjanrajak2003@gmail.com",
    "instagram": "https://www.instagram.com/anjannnnn___?igsh=Y3JpczN3NjltaXZn",
    "linkedin": "https://www.linkedin.com/in/anjan-kumar-rajak-babb7b268?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Nishika Bhatia",
    "position": "Senior Executive Member",
    "image": getImage("14.jpg"),
    "email": "nishikaabhatia@gmail.com",
    "instagram": "https://www.instagram.com/nishikaabhatia/",
    "linkedin": "https://www.linkedin.com/in/nishika-bhatia-6601092a6/"
  },
  {
    "name": "Sanchay gupta",
    "position": "Executive Executive Member",
    "image": getImage("15.jpg"),
    "email": "sanchaygupta.72@gmail.com",
    "instagram": "",
    "linkedin": "https://www.linkedin.com/in/sanchay-gupta-5030a6365/"
  }
];

const juniorExecutives = [
  {
    "name": "Umang Srivastava",
    "position": "General Secretary",
    "image": getImage("16.jpg"),
    "email": "btech10271.23@bitmesra.ac.in",
    "instagram": "https://www.instagram.com/u_umang_srivastava_s?igsh=dXgzdHZqNGJ5anpi",
    "linkedin": "https://www.linkedin.com/in/umang-srivastava-339b131b6/"
  },
  {
  "name": "Hera Siddique",
  "position": "General Secretary",
  "image": getImage("17.jpg"),
  "email": "btech10004.23@bitmesra.ac.in",
  "instagram": "https://www.instagram.com/_.eraaaheyy._?igsh=cThkNjBrN3lvZ3h1",
  "linkedin": "https://www.linkedin.com/in/hera-siddique-9aa67b274?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
},
  {
    "name": "Sudhanshu",
    "position": "Joint Secretary",
    "image": getImage("18.jpg"),
    "email": "itssudhanshukumar@gmail.com",
    "instagram": "https://www.instagram.com/_.sudhanshu._27?igsh=MWxrcDJqemFyeG1xMA==",
    "linkedin": "https://www.linkedin.com/in/sudhanshu-kumar-1211011b4"
  },
  {
    "name": "Harish Miri",
    "position": "Treasurer",
    "image": getImage("19.jpg"),
    "email": "harishmiri58@gmail.com",
    "instagram": "https://www.instagram.com/harish_m_i_r_i?igsh=MW91cmZ6b2h3cXI5bQ==",
    "linkedin": "https://www.linkedin.com/in/miri-harish23"
  },
  {
    "name": "UDIT RAJ",
    "position": "Joint Treasurer",
    "image": getImage("20.jpg"),
    "email": "uditraj.studentvmc@gmail.com",
    "instagram": "https://www.instagram.com/uditraj1098?igsh=MXBneTB0OGpraTk1MQ==",
    "linkedin": "https://www.linkedin.com/in/udit-raj-7b2203245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Harshita Prasad",
    "position": "Events Lead",
    "image": getImage("21.jpg"),
    "email": "-",
    "instagram": "https://www.instagram.com/harshita._.prasad13",
    "linkedin": "-"
  },

  {
    "name": "Nandni",
    "position": "Events Lead",
    "image": getImage("32.jpg"),
    "email": "kumarinandni791@gmail.com",
    "instagram": "https://www.instagram.com/_nandni.k_?igsh=ZXBoYW8xNDA5M2o1",
    "linkedin": "https://www.linkedin.com/in/nandnikumari?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Anurag Gupta",
    "position": "Events head",
    "image": getImage("23.png"),
    "email": "anurag26032004@gmail.com",
    "instagram": "https://www.instagram.com/you.gotmethere._?igsh=emEwbDF4NDM3Mmp4",
    "linkedin": "https://www.linkedin.com/in/anurag-gupta-139a41306"
  },
  {
    "name": "SAHIB SINGH",
    "position": "Design head",
    "image": getImage("24.jpg"),
    "email": "shanspal1111@gmail.com",
    "instagram": "https://www.instagram.com/_.mr.singh.1111?igsh=MTBqOWVpcXFlN2IwdQ==",
    "linkedin": "https://www.linkedin.com/in/sahib-singh-hanspal-834056299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Prajukta Mandal",
    "position": "Design Head",
    "image": getImage("25.jpg"),
    "email": "prajuktamandal21@gmail.com",
    "instagram": "https://www.instagram.com/praju__321/profilecard/?igsh=MW43ZTZvbHljM2FydQ==",
    "linkedin": "https://www.linkedin.com/in/prajukta-mandal-6ba975294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    "name": "Shrid",
    "position": "Video lead",
    "image": getImage("26.jpg"),
    "email": "shridjha@gmail.com",
    "instagram": "https://www.instagram.com/shrid_jha/",
    "linkedin": "https://www.linkedin.com/in/shridjha/"
  },
  {
    "name": "Daksh Maheshwari",
    "position": "Video Head",
    "image": getImage("27.jpg"),
    "email": "dakshmaheshwari88@gmail.com",
    "instagram": "https://www.instagram.com/dakshmaheshwari88?igsh=d21pa210MWVqZzRn",
    "linkedin": "https://www.linkedin.com/in/daksh-maheshwari-48612328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },  
  {
    "name": "Utkarsh Sanu",
    "position": "Publicity Head",
    "image": getImage("28.jpeg"),
    "email": "Sanuutkarsh01@gmail.com",
    "instagram": "https://www.instagram.com/sannuuuuu_?igsh=MWJ3eDRjdTlwN2E4Ng==",
    "linkedin": "https://www.linkedin.com/in/utkarsh-sanu-025b99245?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
  },
  {
    "name": "Yash Paliwal",
    "position": "Publicity Head",
    "image": getImage("29.jpg"),
    "email": "paliwalyash1105@gmail.com",
    "instagram": "https://www.instagram.com/yashhhh___1105?igsh=a3Zqd2EzenR5M2w0",
    "linkedin": "."
  },
  {
    "name": "Manish Kumar Gupta",
    "position": "Resource Lead",
    "image": getImage("30.jpg"),
    "email": "asmkg55555@gmail.com",
    "instagram": "https://www.instagram.com/hsinam77777",
    "linkedin": "https://www.linkedin.com/in/manish-kumar-gupta-b63863327/"
  },
  {
    "name": "Suyash Jadhav",
    "position": "Resource Head",
    "image": getImage("31.jpg"),
    "email": "btech10779.23@bitmesra.ac.in",
    "instagram": "https://www.instagram.com/suyash_jdhv",
    "linkedin": "https://www.linkedin.com/in/suyash-pramod-jadhav"
  },
  
];

export { faculty, seniorExecutives, juniorExecutives };

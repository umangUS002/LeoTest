const images = import.meta.glob('/src/assets/team/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
});
const getImage = (filename) => images[`/src/assets/team/${filename}`];

const faculty = [
  {
    name: "Dr. Anjali Verma",
    position: "Faculty Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "anjali.verma@university.edu",
  },
  {
    name: "Dr. Anjali Verma",
    position: "Faculty Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "anjali.verma@university.edu",
  },
];

const seniorExecutives = [
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },
  {
    name: "Rahul Mehta",
    position: "President",
    image: getImage("teamgroup1.jpg"),
    email: "rahul.mehta@example.com",
    instagram: "https://instagram.com/rahulmehta",
    linkedin: "https://linkedin.com/in/rahulmehta",
  },

];

const juniorExecutives = [
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  {
    name: "Priya Sharma",
    position: "Event Coordinator",
    image: getImage("teamgroup1.jpg"),
    email: "priya.sharma@example.com",
    instagram: "https://instagram.com/priyasharma",
    linkedin: "https://linkedin.com/in/priyasharma",
  },
  
];

export { faculty, seniorExecutives, juniorExecutives };

import React from "react";

// import Message from "./Message";
// import Services from "./Services";
// import Students from "./Students";
// import Teachers from "./Teachers";
import Contact from "./Contact";
// import WhyScube from "../WhyScube/WhyScube";
import Menu from "../Menu/Menu";
// import Services from "./Services";
import Services from "../Services/Services";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { default as Footer1 } from "../Footer-1/Footer";
import Message from "../Message/Message";
import WhyScube from "../WhyScube1/WhyScube";
import Students from "../Students/Students";
import Teachers from "../Teachers/Teachers";
import Garden from "../Garden/Garden";
import { Routes } from "react-router-dom";
import NewServices from "./NewServices/NewServices";

const mansoura = {
  logo: "/assets/mansoura-logo.png",
  slides: [
    {
      title: "IPS Mansoura",
      description: "International Public School Mansoura",
      img: "/assets/mansoura-school-edited.jpg",
    },
    {
      title: "School Activities",
      description: "Some activities at the school",
      img: "/assets/mansoura-activities.jpg",
    },
    {
      title: "Get the maximum value",
      description:
        "The teacher is with you in the classroom for teaching and SCube goes with you to home for studying and learning",
      img: "/assets/idea-1.jpg",
    },
    {
      title: "Fun Learning",
      description: "Fun learning, no more tears",
      img: "/assets/mansoura-learning.jpg",
    },
    {
      title:
        "With the Adaptive/Personalized Learning of SCube، No more Private Tutoring",
      description:
        "SCube is the First e-Learning Platform that considers the individual learning differences for each learner",
      img: "/assets/idea-3.jpg",
    },
    {
      title: "Use your favorite language",
      description:
        "Use your favorite language when studying, SCube translates automatically",
      img: "/assets/idea-4.jpg",
    },
  ],
  message: {
    img: "/assets/principal-1.jpg",
    messages: [
      "International Public Schools started as an educational project and its goal is for our children to get the distinguished education they deserve at an affordable cost.",
      "Its goal is to build a person who is able to keep pace with development and is open to all cultures in the world while preserving the Egyptian identity and belonging to the land and soil of this country.",
      "Our goal is a generation that faces the challenges and successive developments in a world where those who do not evolve and adapt to the developments of life are extinct.",
      "To be a driving force for the advancement of our beloved country.",
      "God save Egypt and save its people.🇪🇬",
    ],
    signature: {
      gender: "Mr",
      name: "Muhammad Saad Al-Wakil",
    },
    vision:
      "To empower students to be future leaders to serve the community and keep the Egyptian identity.",
    mission:
      "We inspire and nurture students to be creative, critical thinkers and decision makers. Children will rise to be the challenge of life responsibly, confidently and ethically.",
  },
  info: {
    img: "/assets/mansoura-logo.png",
    address:
      "Mansoura Alnakhla street - school compound - behind Dakahliya Directorate of Education",
    phone: "050 2218999",
    email: "ms_elwakil2003@yahoo.com",
    to: "Mr Muhammad Saad Al-Wakil",
  },
};

const znc = {
  logo: "/assets/school-logo.png",
  slides: [
    {
      title: "IPS Zahraa Nasr City",
      description: "International Public School Zahraa Nasr City",
      img: "/assets/school.jpg",
    },
    {
      title: "School Activities",
      description: "Some activities at the school",
      img: "/assets/collection.png",
    },
    {
      title: "Get the maximum value",
      description:
        "The teacher is with you in the classroom for teaching and SCube goes with you to home for studying and learning",
      img: "/assets/idea-1.jpg",
    },
    {
      title: "Fun Learning",
      description: "Fun learning, no more tears",
      img: "/assets/idea-2.jpg",
    },
    {
      title:
        "With the Adaptive/Personalized Learning of SCube، No more Private Tutoring",
      description:
        "SCube is the First e-Learning Platform that considers the individual learning differences for each learner",
      img: "/assets/idea-3.jpg",
    },
    {
      title: "Use your favorite language",
      description:
        "Use your favorite language when studying, SCube translates automatically",
      img: "/assets/idea-4.jpg",
    },
  ],
  message: {
    img: "/assets/principal.jpg",
    messages: [
      "IPS ZNC School wishes you a very warm welcome to Our School. Our objective is to deliver excellent education by exceptional teachers in award winning facilities. We are making key strides towards creating a school that makes a significant difference to the community. The school hires the most competent teachers, constructs creative facilities and smart areas and labs, involves students with creative activities, etc. The school's objective is to get the maximum learning outcomes while enjoying studying and learning.",
      "We target building a healthy relationship between our school and the students via offering our students with the best learning environments inside and outside the school. Therefore, the school hired several online learning management and support systems; among them is the knowledge management system, SCube's SILK MS. Our highly qualified teachers exert their maximum with our students inside the class and at the school, while SCube SILK MS and all other online systems cooperate together to offer our  students with a unique study environment at home.",
      "Our goal is a generation that faces the challenges and successive developments in a world where those who do not evolve and adapt to the developments of life are extinct.",
      "To be a driving force for the advancement of our beloved country.",
      "God save Egypt and save its people.🇪🇬",
    ],
    signature: {
      gender: "Mrs",
      name: "Suzan Zakaria",
    },
    vision:
      "The children of today are the leaders of tomorrow” is our vision on which is centred our school system with all of its components with an eye on continuous maximization of the learning outcomes: very competent teachers, creative facilities, innovative teaching system, school activities, with special attention on recruiting advanced innovative technologies.",
    mission:
      "Our mission is to provide our students with high quality learning full of joy and enthusiasm and prepare them to become the leaders of the future; hence, offering the parents with serenity and contentment about the future of their children. Our continuously improving work process mandates employment of advanced technologies and innovative intelligent solutions to maximize the cost-benefit and improve the Efficiency, Efficacy, and Engagement of the Learning system. Our learning system follow the contemporary theories and new teaching paradigms to guarantee a top-level satisfaction and high learning outcomes.",
  },
  info: {
    img: "/assets/school-logo.png",
    address:
      "4000 Residences of the Armed Forces Officers - in front of Maj.Gen. Maged Saleh Mosque - Zahraa, Nasr City - Cairo",
    phone: "02 23835443 - 010 2412 1784",
    email: "ips.zahraanasrcity@gmail.com",
    to: "Mrs Suzan Zakaria",
  },
};

const scube = {
  logo: null,
  slides: [
    {
      title: "One Size Does Not Fit All",
      description:
        "Students come from a variety of backgrounds, cultures, schools, and learning abilities, so we cannot think that one curriculum, or one pair of pants, can fit all",
      img: "/static/images/3.jpg",
    },
    {
      title: "No More Private Tutoring",
      description:
        "SCube is the First e-Learning Platform that considers the individual learning differences for each learner",
      img: "/static/images/2.png",
    },
    {
      title: "SCube is Different",
      description:
        "Delivers Personalized teaching strategies to match each learner’s learning style Merged FSLSM + Kolb’s models (Scube Model)",
      img: "/static/images/4.png",
    },
    {
      title: "Get the maximum value",
      description:
        "The teacher is with you in the classroom for teaching and SCube goes with you to home for studying and learning",
      img: "/assets/idea-1.jpg",
    },
    {
      title: "Use your favorite language",
      description:
        "Use your favorite language when studying, SCube translates automatically",
      img: "/assets/idea-4.jpg",
    },
  ],
  message: {
    img: "/static/images/header3.png",
    messages: [
      "SCube for Education Technology is an Egyptian LLC Company that develops Smart Software Solutions (S3). SCube has developed several registered branded technologies and products. SCube has a strong committed, qualified, and aligned R&D team. Research-based innovative intelligent solutions is our business charter, and Asynchronous e-Learning is our focused domain of work.",
    ],
    signature: null,
    vision:
      "Our vision is to initiate and lead the science of Intelligent e- Learning and to pioneer and constantly grow to become the lead exporter of innovative Intelligent e-Learning technologies worldwide, and to become a leading performer in the competitive global marketplace of developing Intelligent solutions for the equitable access of lifelong learners (LLL) including those vulnerable and underserved.",
    mission:
      "Our mission is to provide our customers with high quality innovative intelligent solutions with maximized cost- benefit and expedited ROI via improving the Efficiency, Efficacy, and Engagement of the Learning systems. Our work processes and products lifecycle seamlessly integrate research and development for continuously exploring new innovative improvements and ideas to guarantee continuous evolution of the learning systems, while our products follow the contemporary theories and paradigm shifts to guarantee a top-level satisfaction of our end- users (the learners).",
  },
  info: false,
};

const Home = ({ schoolName }) => {
  const data = scube;
  // const data = schoolName === 'znc' ? znc : mansoura;

  return (
    <>
      <Menu logo={data.logo} />
      <Header slides={data.slides} />
      <WhyScube />
      <Message message={data.message} />
      <NewServices />
      {/* <Services /> */}
      {data !== scube && (
        <>
          <Students />
          <Garden />
          <Teachers />
        </>
      )}
      <Footer1 schoolName={schoolName} info={data.info} />
    </>
  );
};

export default Home;

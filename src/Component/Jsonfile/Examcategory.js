import Jee from "../../Jee.webp";
import iitjee from "../../iitjee.webp";
import school from "../../school.webp";
import upse from "../../upse.webp";
import govt from "../../govt.webp";
import defence from "../../defence.webp";
const Examcategory = [
  {
    id: 1,
    heading: "NEET",
    Classlist: [
      {
        class1: "class 11",
      },
      {
        class1: "class 12",
      },
      {
        class1: "Developer",
      },
    ],
    imgsrc: Jee,
  },
  {
    id: 2,
    heading: "IIT JEE",
    Classlist: [
      {
        id: 1,
        class1: "class 11",
      },
      {
        id: 2,
        class1: "class 12",
      },
      {
        id: 3,
        class1: "Developer",
      },
    ],
    imgsrc: iitjee,
  },
  {
    id: 3,
    heading: "School Preparation",
    Classlist: [
      {
        id: 1,
        class1: "class 6",
      },
      {
        id: 2,
        class1: "class 7",
      },
      {
        id: 3,
        class1: "class 7",
      },
      {
        id: 4,
        class1: "More",
      },
    ],
    imgsrc: school,
  },
  {
    id: 4,
    heading: "UPSE",
    Classlist: [
      {
        id: 1,
        class1: "IAS",
      },
      {
        id: 2,
        class1: "IPS",
      },
    ],
    imgsrc: upse,
  },
  {
    id: 5,
    heading: "Govt Job Exams",
    Classlist: [
      {
        id: 1,
        class1: "SSC",
      },
      {
        id: 2,
        class1: "Banking",
      },
      {
        id: 3,
        class1: "Teaching",
      },
      {
        id: 3,
        class1: "Judiciary",
      },
    ],
    imgsrc: govt,
  },
  {
    id: 6,
    heading: "Defence",
    Classlist: [
      {
        id: 1,
        class1: "NDA",
      },
      {
        id: 2,
        class1: "CDS",
      },
      {
        id: 3,
        class1: "AFCAT",
      },
      {
        id: 4,
        class1: "Agniveer",
      },
    ],
    imgsrc: defence,
  },
];
export default Examcategory;

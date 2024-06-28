import clarke from "./Images/clarke.jpg";
import drimsBatch from "./Images/drimsBatch.png";
import dad from "./Images/dad.jpg";

export const academicGallery = {
  images: [
    {
      source: clarke,
      description: "Our debate team in YOC-2023 Grand Finale",
      href: "#image1",
      iden: "container1",
      imageIndex: "1 / 5"
    },
    {
      source: clarke,
      description: "Champion of LINSU Quizzing Tournament 2023",
      href: "#image2",
      iden: "container2",
      imageIndex: "2 / 5"
    },
    {
      source: clarke,
      description: "Allen G. Clarke, our academic captian, 2021-2023",
      href: "#image3",
      iden: "container3",
      imageIndex: "3 / 5"
    },
    {
      source: clarke,
      description: "Two of our quizzers on Grand Bassa County Team 2023",
      href: "#image4",
      iden: "container4",
      imageIndex: "4 / 5"
    },
    {
      source: drimsBatch,
      description: "Wennie and Clarke, seniors - 2022/2023",
      href: "#image5",
      iden: "container5",
      imageIndex: "5 / 5"
    }
  ],
  lightboxes: [
    {
      iden: "image1",
      href: "#container1",
      source: clarke
    },
    {
      iden: "image2",
      href: "#container2",
      source: clarke
    },
    {
      iden: "image3",
      href: "#container3",
      source: clarke
    },
    {
      iden: "image4",
      href: "#container4",
      source: clarke
    },
    {
      iden: "image5",
      href: "#container5",
      source: drimsBatch
    }
  ]
};

export const administrationGallery = {
  images: [
    {
      source: drimsBatch,
      description: "Mr. Solomon Kahdyu, Principal",
      href: "#principal",
      iden: "principal-container",
      imageIndex: "1 / 5"
    },
    {
      source: clarke,
      description: "Mr. Sampson B. Doeyou,.VPA",
      href: "#vpa",
      iden: "vpa-container",
      imageIndex: "2 / 5"
    },
    {
      source: drimsBatch,
      description: "William T. Barckon, VPI",
      href: "#vpi",
      iden: "vpi-container",
      imageIndex: "3 / 5"
    }
  ],
  lightboxes: [
    {
      iden: "principal",
      href: "#principal-container",
      source: drimsBatch
    },
    {
      iden: "vpa",
      href: "#vpa-container",
      source: clarke
    },
    {
      iden: "vpi",
      href: "#vpi-container",
      source: drimsBatch
    }
  ]
};

export const sportsGallery = {
  images: [
    {
      source: dad,
      description: "Runner-up of the ISSA-2020 Junior High Division",
      href: "#sport-image1",
      iden: "sport-container1",
      imageIndex: "1 / 5"
    },
    {
      source: dad,
      description: "DRIMS Vs New Testament",
      href: "#sport-image2",
      iden: "sport-container2",
      imageIndex: "2 / 5"
    },
    {
      source: drimsBatch,
      description: "Brighter Future Academy Champion, 2023",
      href: "#sport-image3",
      iden: "sport-container3",
      imageIndex: "3 / 5"
    }
  ],
  lightboxes: [
    {
      iden: "sport-image1",
      href: "#sport-container1",
      source: dad
    },
    {
      iden: "sport-image2",
      href: "#sport-container2",
      source: dad
    },
    {
      iden: "sport-image3",
      href: "#sport-container3",
      source: drimsBatch
    }
  ]
};

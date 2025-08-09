import Fraudiye from "./assets/CategoriesImg/fraudiye.webp";
import BitByBit from "./assets/CategoriesImg/bitbybit.webp";
import CygnusVeil from "./assets/CategoriesImg/cygnusveil.webp";
import Daedalus from "./assets/CategoriesImg/daedalus.webp";
import Dassp from "./assets/CategoriesImg/dassp.webp";
import Enviorothon from "./assets/CategoriesImg/enviorothon.webp";
import Fantasm from "./assets/CategoriesImg/fantasm.webp";
import Feynmans from "./assets/CategoriesImg/feynmans.webp";
import Infinitesima from "./assets/CategoriesImg/infinitesima.webp";
import MindsInMotion from "./assets/CategoriesImg/mindsInMotion.webp";
import Panacea from "./assets/CategoriesImg/panacea.webp";
import Projectx from "./assets/CategoriesImg/projectx.webp";
import Steam from "./assets/CategoriesImg/steam.webp";
import Decodum from "./assets/CategoriesImg/decodum.png";

const categoryData = [
  {
    compulsory: true,
    img: Dassp,
    pdfLink: "https://jtinnoventions.com/studyguides/dassp.pdf",
    description:
      "As our first compulsory category, Dr. Abdus Salam Science Project combines pure sciences to produce a category that amalgamates chemical reactions, theoretical physics and anatomical biology. So delegates, are you ready to overcome the curveball in our indispensable category?",
    gradient: "from-blue-600/20 via-cyan-400/20 to-blue-500/20",
  },
  {
    compulsory: true,
    //TODO: need fraudiye pdf
    img: Fraudiye,
    pdfLink: "https://jtinnoventions.com/studyguides/fraudiye.pdf",
    description:
      "Did the butler do it? Did you do it? Unveil the mystery in our second compulsory category. Trust no statistic or as we at Fraudiye Files like to say; nothing is more deceptive than a simple fact.",
    gradient: "from-orange-600/20 via-red-500/20 to-orange-500/20",
  },
  {
    compulsory: false,
    img: Fantasm,
    pdfLink: "https://jtinnoventions.com/studyguides/fantasm.pdf",
    description:
      "The plot thickens in our literature-meets-science category. Fantasm expects nothing short of a novel's worth of world-building. Your ink-pot better be full, that Dune fan-fiction isn't going to write itself.",
    gradient: "from-red-700/20 via-red-500/20 to-orange-600/20",
  },
  {
    compulsory: false,
    img: Decodum,
    pdfLink: "https://jtinnoventions.com/studyguides/bitbybit.pdf",
    description:
      "Decipher cryptography, different languages and codes to assess pattern recognition in Decodum. In fact why wait, here's a code to get ahead: ... . . / -.-- --- ..- / --- -. / .---- ..---",
    gradient: "from-purple-600/20 via-blue-500/20 to-cyan-400/20",
  },
  {
    compulsory: false,
    img: MindsInMotion,
    pdfLink: "https://jtinnoventions.com/studyguides/mindsinmotion.pdf",
    description:
      "Achieve a fully functional frontal-lube before your mid-twenties with Minds in Motion. Side-effects may include: a crippling addiction to self-diagnose psychological illness.",
    gradient: "from-pink-500/20 via-purple-400/20 to-blue-500/20",
  },
  {
    compulsory: false,
    img: Panacea,
    pdfLink: "https://jtinnoventions.com/studyguides/panacea.pdf",
    description:
      "Practice life sciences and prescribe medicines to your own patients at Panacea, because who needs a residency when lives are on the line!",
    gradient: "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
  },
  {
    compulsory: false,
    img: Infinitesima,
    pdfLink: "https://jtinnoventions.com/studyguides/infinitesima.pdf",
    description:
      "A graphing calculator to show the imaginary solution to the under-root of a negative number would surely come in handy at Infinitesmia. Maybe the practical application of mathematical concepts is the friends we made along the way.",
    gradient: "from-blue-500/20 via-cyan-400/20 to-blue-600/20",
  },
  {
    compulsory: false,
    img: Steam,
    pdfLink: "https://jtinnoventions.com/studyguides/steAm.pdf",
    description:
      "Reveal the art and conceal the artist in steAm. Showcase your artistic impression in our category-fusion of arts and science. After all, all art is quite meaningless.",
    gradient: "from-purple-500/20 via-pink-400/20 to-purple-600/20",
  },
  {
    compulsory: false,
    img: Daedalus,
    pdfLink: "https://jtinnoventions.com/studyguides/daedalus.pdf",
    description:
      "Put your engineering prowess to the test, Daedalus Apprenticeship can simultaneously ask you to build a car chassis and a motor engine.",
    gradient: "from-blue-400/20 via-cyan-300/20 to-blue-500/20",
  },
  {
    compulsory: false,
    img: Feynmans,
    pdfLink: "https://jtinnoventions.com/studyguides/feynman.pdf",
    description:
      "Named after one of the greatest scientific minds, Feynman's Final Project calls for urgent scientific inquiry and curiosity. Delegates are expected to apply their knowledge of general sciences to real world problems.",
    gradient: "from-yellow-400/20 via-orange-300/20 to-yellow-500/20",
  },
  {
    compulsory: false,
    img: CygnusVeil,
    pdfLink: "https://jtinnoventions.com/studyguides/cygnusveil.pdf",
    description:
      "Identify hidden constellations and celestials in Cygnus' Viel, our astronomy category. You might even explore the origins of the world on your lookout!",
    gradient: "from-yellow-500/20 via-orange-400/20 to-yellow-600/20",
  },
  {
    compulsory: false,
    img: BitByBit,
    pdfLink: "https://jtinnoventions.com/studyguides/bitbybit.pdf",
    description:
      "Test your coding skills with Bit by Bit, our Information Technology and Computer Science category. The stronger the code, the higher the chances of winning.",
    gradient: "from-green-500/20 via-cyan-400/20 to-green-600/20",
  },
  {
    compulsory: false,
    img: Projectx,
    pdfLink: "https://jtinnoventions.com/studyguides/projectx.pdf",
    description:
      "Building Mindstorm Legos pays off in Project X. Program to perform autonomous functions and integrate coding with real-world applications in our robotics category.",
    gradient: "from-red-600/20 via-orange-500/20 to-red-500/20",
  },
  {
    compulsory: false,
    img: Enviorothon,
    pdfLink: "https://jtinnoventions.com/studyguides/enviorothon.pdf",
    description:
      "Global temperatures are rising! Investigate climate change and help pass ecological solutions to overcome a global catastrophe in our environment category.",
    gradient: "from-green-600/20 via-emerald-500/20 to-green-700/20",
  },
];

export default categoryData;
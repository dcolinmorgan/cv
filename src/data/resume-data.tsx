import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Daniel Colin Morgan",
  initials: "DCM",
  location: "Hong Kong, SAR",
  locationLink: "https://www.google.com/maps/place/HongKong",
  about:
    "Research Engineer focused on building products with extra attention to details",
  summary:
    "As a Bioinformaticist turned Engineer, I have successfully taken multiple products from 0 to 1. \
    I lead teams effectively, ensuring an environment where people can do their best work. \
    Currently, I work mostly with Python, CUDA/RAPIDS and Bash. \
    I have over 10 years of experience in working with universities and companies all around the world.",
  // avatarUrl: "",
  personalWebsiteUrl: "https://dcolinmorgan.github.io",
  contact: {
    email: "daniel.morgan@duck.com",
    tel: "+85270752663",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/dcolinmorgan",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/dcolinmorgan/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/dcolinmorgan",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Stockholm University",
      degree: "Doctoral Degree in Bioinformatics with thesis on control systems engineering of biological networks",
      start: "2015",
      end: "2019",
    },
    {
      school: "Ohio State University",
      degree: "Masters of Science Degree in Bioinformatics with thesis in biological networks clique merger algorithm",
      start: "2015",
      end: "2019",
    },
  ],
  work: [
    {
      company: "Graphistry",
      link: "https://graphistry.com",
      badges: ["Remote"],
      title: "Junior Research Engineer",
      // logo: GraphistryLogo,
      start: "2022",
      end: "tbd",
      description:
        "Implemented new speedier features for feature engineering and analyzing any and all data, Technologies: RAPIDS, CUDF, CUML, Python, Docker, Kubernetes, AWS",
    },
    {
      company: "Harvard Medical School",
      link: "hms.harvard.edu",
      badges: ["Boston, MA"],
      title: "Postdoctoral Research Fellow",
      // logo: HMSLogo,
      start: "2019",
      end: "2021",
      description:
        "Epigenetics analysis. Develop NetZoo, implement GPU speed increases, Technologies: Python, R, Bash",
    },
    {
      company: "Hong Kong Univeristy",
      link: "hku.hk",
      badges: [],
      title: "Research Fellow",
      // logo: HKULogo,
      start: "2021",
      end: "2022",
      description:
        "Research Lead for Metagenomics"
    },

  ],
  skills: [
    "Python",
    "RAPIDS/CUDA",
    "R",
    "Bash",
    "Bioinformatics",
    "Graph-Theory"
  ],
  projects: [
    {
      title: "cu-cat",
      techStack: [
        "python",
        "RAPIDS",
        "CUML/CUDF",
        "GPU",
      ],
      description: "An end-to-end gpu feature encoder developed for Graphistry",
      // logo: CUCATLogo,
      link: {
        label: "github.com/graphistry/cu-cat",
        href: "github.com/graphistry/cu-cat",
      },
    },
    {
      title: "graphistry",
      techStack: ["python", "RAPIDS", "GPU"],
      description:
        "Graph Vizualization built on GPUs",
      link: {
        label: "graphistry.com",
        href: "https://graphistry.com/",
      },
    },
    {
      title: "NetZoo",
      techStack: ["python","R","Bash"],
      description:
        "Message Passing Family of Algorithms for Inferring Biological Networks",
      // logo: NetZooLogo,
      link: {
        label: "github.com/NetZoo",
        href: "https://netzoo.github.io/",
      },
    },
    {
      title: "GeneSPIDER",
      techStack: ["MATLAB","R","python"],
      description:
        "Platform for synthetic biological data generation and network inference",
      // logo: Minimal,
      link: {
        label: "genespider.github.io",
        href: "https://genespider.github.io/",
      },
    },
  ],
  publications: [
    {
      title: "Using Methylation data to improve transctipion factor binding prediction",
      // techStack: ["PostDoc","Harvard","Python","Bash"],
      description:
        "Repurposing open-source data to improve TF-binding prediction over conventional inference methods",
      // logo: BarepapersLogo,
      tags: ["Bioinformatics", "Machine Learning", "Epigenetics"],
      link: {
        label: "KEPI 2309826",
        href: "https://doi.org/10.1080/15592294.2024.2309826",
      },
    },
    {
      title: "GeneSPIDER",
      // techStack: ["MATLAB"],
      description: "Inferring biological networks at scale from single-cell and bulk -omics data",
      // logo: GSLogo,
      tags: ["Bioinformatics", "Network Biology", "Machine Learning"],
      link: {
        label: "genespider.github.io",
        href: "https://genespider.github.io/",
      },
    },
  ],
} as const;

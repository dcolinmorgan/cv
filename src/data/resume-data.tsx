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
  location: "Hong Kong, HKSAR",
  locationLink: "https://www.google.com/maps/place/HongKong",
  alt_location: "Gotland, Sweden",
  alt_locationLink: "https://www.google.com/maps/place/Gotland",
  about:
    "Research Engineer focused on building products with extra attention to details",
  summary:
    "As a Bioinformaticist turned Engineer, I have successfully taken multiple products from 0 to 1. \
    I lead teams effectively, ensuring an environment where people can do their best work. \
    Currently, I work mostly with Python, CUDA/RAPIDS and Bash. \
    I have over 10 years of experience in working with universities and companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/1395951?v=4",
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
      start: "2012",
      end: "2014",
    },
  ],
  work: [
    {
      company: "Graphistry",
      link: "https://graphistry.com",
      badges: ["Remote"],
      title: "Junior Research Engineer",
      logo: "https://avatars.githubusercontent.com/u/6157633?s=200&v=4",
      start: "2022",
      end: "tbd",
      description:
        "Contribute to development of AI agents utilizing LLMs, develop GPU-accelerated network analysis toolkit and libraries, and build graph-based analysis and machine learning pipelines, Technologies: RAPIDS, CUDF, CUML, Python, Docker, Kubernetes, AWS",
    },
    {
      company: "Harvard Medical School",
      link: "https://hms.harvard.edu",
      badges: ["Boston, MA"],
      title: "Postdoctoral Research Fellow",
      logo: "https://hms.harvard.edu/themes/shared/harvardmedical/logo.svg",
      start: "2019",
      end: "2021",
      description:
        "Epigenetics analysis. Develop NetZoo, implement GPU speed increases, Technologies: Python, R, Bash",
    },
    {
      company: "Hong Kong Univeristy",
      link: "https://hku.hk",
      badges: ["Hong Kong, HKSAR"],
      title: "Research Fellow",
      logo: "https://hku.hk/assets/img/hku-logo.svg?t=1678891777",
      start: "2021",
      end: "2022",
      description:
        "Research Lead for Metagenomics"
    },

  ],
  skills: [
    "Graph-Theory",
    "Python",
    "RAPIDS/CUDA",
    "Machine Learning",
    "Bioinformatics",
    "singularity/docker",
    "snakemake"
  ],
  projects: [
    {
      title: "cu-cat",
      techStack: [
        "feature-engineering",
        "python",
        "RAPIDS",
        "CUML/CUDF",
        "GPU",
        "AI Agents/LLM",
      ],
      description: "An end-to-end gpu feature encoder developed for Graphistry",
      // logo: CUCATLogo,
      link: {
        label: "https://github.com/graphistry/cu-cat/",
        href: "https://github.com/graphistry/cu-cat/",
      },
    },
    {
      title: "graphistry",
      techStack: ["network science","python", "RAPIDS", "GPU"],
      description: "Graph Vizualization built on GPUs",
      avatarUrl: "https://avatars.githubusercontent.com/u/6157633?s=200&v=4",
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
      title: "Viral_Snake",
      techStack: ["singularity","snakemake","bioinformatics","python","Bash"],
      description:
        "Message Passing Family of Algorithms for Inferring Biological Networks",
      link: {
        label: "github.com/Viral_Snake",
        href: "https://github.com/dcolinmorgan/viral_snake",
      },
    },
    
    {
      title: "GeneSPIDER",
      techStack: ["MATLAB","R","python"],
      description:
        "Platform for synthetic biological data generation and network inference",
      // logo: Minimal,
      link: {
        label: "https://sonnhammer-tutorials.bitbucket.io/genespider.html",
        href: "https://sonnhammer-tutorials.bitbucket.io/genespider.html",
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
      title: "Altered human gut virome in patients undergoing antibiotics therapy for Helicobacter pylori",
      // techStack: ["PostDoc", "HKU", "Puthon", "Bash"],
      description:
        "demonstrate that H. pylori eradication therapies not only result in transient alteration in gut microbiota but also significantly alter the previously less known gut virome community.",
      // logo: BarepapersLogo,
      tags: ["Metagenomics","Bioinformatics"],
      link: {
        label: "Nature Communications",
        href: "https://doi.org/10.1038/s41467-023-37975-y",
      },
    },
    {
      title: "Perturbation-based gene regulatory network inference to unravel oncogenic mechanisms",
      // techStack: [],
      description:
        "",
      // logo: BarepapersLogo,
      tags: ["Gene regulatory networks","Microarrays","Regulatory networks","RNAi"],
      link: {
        label: "SciRep",
        href: "https://doi.org/10.1038/s41598-020-70941-y",
      },
    },
    {
      title: "A generalized framework for controlling FDR in gene regulatory network inference",
      description:
        "Repurposing open-source data to improve TF-binding prediction over conventional inference methods",
      // logo: BarepapersLogo,
      tags: ["Bioinformatics", "Machine Learning", "Epigenetics"],
      link: {
        label: "Bioinformatics2019",
        href: "https://doi.org/10.1093/bioinformatics/bty764",
      },
    },
    {
      title: "Altered human gut virome in patients undergoing antibiotics therapy for Helicobacter pylori",
      // techStack: ["PostDoc","HKU","Python","Bash"],
      description:
        "Our results demonstrate that H. pylori eradication therapies not only result in transient alteration in gut microbiota but also significantly alter the previously less known gut virome community.",
      // logo: BarepapersLogo,
      tags: ["Gastrointestinal diseases","Microbial ecology","Stomach diseases"],
      link: {
        label: "Nature Communications",
        href: "https://doi.org/10.1038/s41467-023-37975-y",
      },
    },
    {
      title: "GeneSPIDER",
      // techStack: ["MATLAB"],
      description: "Inferring biological networks at scale from single-cell and bulk -omics data",
      // logo: GSLogo,
      tags: ["Bioinformatics", "Network Biology", "Machine Learning"],
      link: {
        label: "https://bitbucket.org/sonnhammergrni/genespider/src/master/",
        href: "https://bitbucket.org/sonnhammergrni/genespider/src/master/",
      },
    },
  ],
} as const;

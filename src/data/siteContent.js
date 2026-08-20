import {
  faCss3Alt,
  faHtml5,
  faNodeJs,
  faReact,
  faSquareJs,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowTrendUp,
  faBolt,
  faBoxOpen,
  faGlobe,
  faLayerGroup,
  faPhoneVolume,
  faRocket,
  faServer,
  faShieldHalved,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

import ecommerceDesktop from "../assets/imgs/e-comerceDesktop.png";
import lindoyaPreview from "../assets/imgs/lindoya.png";

export const coreStack = [
  {
    label: "React",
    hoverBackground: "rgba(97, 218, 251, 0.18)",
    hoverBorder: "rgba(97, 218, 251, 0.5)",
    hoverColor: "#9ee9ff",
  },
  {
    label: "JavaScript",
    hoverBackground: "rgba(247, 223, 30, 0.18)",
    hoverBorder: "rgba(247, 223, 30, 0.42)",
    hoverColor: "#ffe45f",
  },
  {
    label: "Node.js",
    hoverBackground: "rgba(104, 160, 99, 0.2)",
    hoverBorder: "rgba(104, 160, 99, 0.45)",
    hoverColor: "#9edb95",
  },
  {
    label: "APIs",
    hoverBackground: "rgba(56, 189, 248, 0.18)",
    hoverBorder: "rgba(56, 189, 248, 0.45)",
    hoverColor: "#8be2ff",
  },
  {
    label: "HTML5",
    hoverBackground: "rgba(227, 79, 38, 0.18)",
    hoverBorder: "rgba(227, 79, 38, 0.45)",
    hoverColor: "#ff9a73",
  },
  {
    label: "CSS3",
    hoverBackground: "rgba(38, 77, 228, 0.18)",
    hoverBorder: "rgba(38, 77, 228, 0.42)",
    hoverColor: "#8aa8ff",
  },
  {
    label: "Styled Components",
    hoverBackground: "rgba(219, 112, 147, 0.18)",
    hoverBorder: "rgba(219, 112, 147, 0.44)",
    hoverColor: "#ffadd1",
  },
  {
    label: "Vite",
    hoverBackground: "rgba(189, 52, 254, 0.16)",
    hoverBorder: "rgba(255, 196, 87, 0.36)",
    hoverColor: "#d1b3ff",
  },
];

export const aboutHighlights = [
  {
    icon: faRocket,
    title: "Experiência prática desde 2022",
    description:
      "Venho construindo projetos para web com foco em responsividade, clareza visual e uma experiência mais direta para quem navega.",
  },
  {
    icon: faLayerGroup,
    title: "Base técnica que sustenta a entrega",
    description:
      "Minha formação une prática de mercado, curso técnico e graduação em Ciência da Computação para dar mais consistência ao que eu construo.",
  },
  {
    icon: faShieldHalved,
    title: "Do visual à estrutura da aplicação",
    description:
      "Hoje eu trabalho tanto na interface quanto nas integrações e na lógica que fazem uma solução web funcionar de ponta a ponta.",
  },
];

export const careerTimeline = [
  {
    year: "2020",
    title: "Primeiro contato com desenvolvimento",
    description:
      "Foi quando comecei a estudar lógica de programação ainda no ensino médio, aprendendo C++ e dando meus primeiros passos em projetos para web.",
  },
  {
    year: "2022",
    title: "Evolução em desenvolvimento web",
    description:
      "Nesse período aprofundei meus estudos em front-end com React JS e usei projetos pessoais para ganhar prática com interface, estrutura e construção visual.",
  },
  {
    year: "2023",
    title: "Graduação, APIs e arquitetura",
    description:
      "Com o início da graduação em Ciência da Computação, ampliei minha visão sobre aplicações web, integração de APIs, Sass e organização de projetos em um nível mais avançado.",
  },
  {
    year: "2024",
    title: "Experiência profissional com sistemas",
    description:
      "Atuando com suporte de sistemas no Ministério Público do Estado do Pará, passei a lidar mais de perto com problemas reais, fluxos de software e visão prática de operação.",
  },
  {
    year: "2026",
    title: "Certificação em desenvolvimento fullstack web completo",
    description:
      "Esse passo consolidou ainda mais meu repertório em interfaces, integrações, lógica de negócio e construção de soluções web completas, do início ao fim.",
  },
];

export const realProjects = [
  {
    badge: "Site institucional publicado",
    title: "Niágara Lindóya",
    subtitle: "Um site que apresenta a marca com clareza, destaca os produtos e aproxima novos clientes da Niágara Lindóya.",
    description:
      "A Niágara Lindóya nasceu em 2004, evoluiu de distribuidora para marca própria e hoje carrega uma proposta baseada em qualidade, atendimento e responsabilidade ambiental. O projeto foi pensado para mostrar essa trajetória com mais força, valorizar os produtos e transmitir a confiança que a marca quer passar no digital.",
    preview: lindoyaPreview,
    previewLabel: "",
    stats: [
      { icon: faGlobe, label: "Apresentação institucional da marca" },
      { icon: faBoxOpen, label: "Exposição organizada da linha de produtos" },
      { icon: faPhoneVolume, label: "Contato comercial mais direto" },
    ],
    technologies: [
      { name: "Marca", icon: faLayerGroup },
      { name: "Produtos", icon: faBoxOpen },
      { name: "Comercial", icon: faPhoneVolume },
      { name: "Site oficial", icon: faGlobe },
    ],
    primaryAction: {
      label: "Visitar site",
      url: "https://www.niagaralindoya.com/",
    },
  },
  {
    badge: "Projeto de prática",
    title: "ShoppBee E-commerce",
    subtitle: "Uma loja virtual pensada para apresentar produtos com clareza e dar uma navegação simples para quem compra.",
    description:
      "Nesse projeto, a ideia foi criar uma experiência de e-commerce mais limpa, responsiva e pronta para crescer, com vitrine de produtos, navegação consistente e base visual forte.",
    preview: ecommerceDesktop,
    previewLabel: "",
    stats: [
      { icon: faBolt, label: "Layout responsivo" },
      { icon: faTimeline, label: "Fluxo de navegação enxuto" },
      { icon: faArrowTrendUp, label: "Interface pensada para conversão" },
    ],
    technologies: [
      { name: "React", icon: faReact },
      { name: "JavaScript", icon: faSquareJs },
      { name: "Node-ready", icon: faNodeJs },
      { name: "APIs", icon: faServer },
      { name: "HTML5", icon: faHtml5 },
      { name: "CSS3", icon: faCss3Alt },
    ],
    primaryAction: {
      label: "Abrir projeto",
      url: "https://ecomerce-puce.vercel.app/",
    },
    secondaryAction: {
      label: "Ver repositório",
      url: "https://github.com/williamwallace076/ecomerce",
    },
  },
];

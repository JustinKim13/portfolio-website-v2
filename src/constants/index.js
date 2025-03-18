import {
mobile,
backend,
creator,
web,
javascript,
typescript,
html,
css,
reactjs,
nodejs,
git,
docker,
movierec,
astro,
entegral,
denari,
uwmadison,
python,
java,
c,
django,
postgresql,
flask,
pytorch,
aws,
mlquiz,
deepseekr1

} from "../assets";

export const navLinks = [
{
  id: "about",
  title: "About",
},
{
  id: "experience",
  title: "Experience",
},
{
  id: "works",
  title: "Projects",
},
{
  id: "contact",
  title: "Contact",
},
];

const services = [
{
  title: "CS/DS Student",
  icon: web,
},
{
  title: "Machine Learning Researcher",
  icon: mobile,
},
{
  title: "Backend Developer",
  icon: backend,
},
{
  title: "Curious Problem Solver",
  icon: creator,
},
];

const technologies = [
{
  name: "Python",
  icon: python,
},
{
  name: "Java",
  icon: java,
},
{
  name: "HTML 5",
  icon: html,
},
{
  name: "CSS 3",
  icon: css,
},
{
  name: "JavaScript",
  icon: javascript,
},
// {
//   name: "TypeScript",
//   icon: typescript,
// },
{
  name: "C",
  icon: c,
},
{
  name: "React JS",
  icon: reactjs,
},
{
  name: "Node/Express JS",
  icon: nodejs,
},
{
  name: "Django",
  icon: django,
},
{
  name: "PostgreSQL",
  icon: postgresql,
},
// {
//   name: "Flask",
//   icon: flask,
// },
{
  name: "PyTorch",
  icon: pytorch,
},
{
  name: "AWS",
  icon: aws,
},
// {
//   name: "git",
//   icon: git,
// },
{
  name: "docker",
  icon: docker,
},
];

const experiences = [
{
  title: "Software Engineer",
  company_name: "Entegral",
  icon: entegral,
  iconBg: "#004a87",
  date: "May 2025 - August 2025",
  points: [
    "Incoming Software Engineer Intern",
  ],
},
{
  title: "Software Engineer",
  company_name: "Denari",
  icon: denari,
  iconBg: "#5032df",
  date: "March 2020 - April 2021",
  points: [
    "Building a RAG pipeline for accounting firms, leveraging OpenAI embeddings, TimescaleDB, and AWS S3 to ensure accurate citations, enhance real-time knowledge retrieval, and optimize query accuracy.",
  ],
},
{
  title: "Machine Learning Engineer",
  company_name: "Astro AI Trading",
  icon: astro,
  iconBg: "#00262d",
  date: "Jun 2024 - Jan 2025",
  points: [
    "Led a team of 3 engineers automating data pipelines for 1,400+ sources, increasing processing speed by 28% to handle real-time financial data while ensuring high code quality through regular reviews.",
    "Utilized GitHub Actions and Docker to simplify CI/CD pipelines, reducing deployment time to internal environments by 45% and improving test coverage in development and staging.",
    "Designed and optimized PostgreSQL database systems for efficient retrieval of time-series data, reducing query time by 36% and scaling to handle increasing data ingestion with minimal latency.",
    "Developed and fine-tuned stock prediction models using BERT embeddings, improving accuracy by 12%.",
  ],
},
{
  title: "AI & Data Engineer",
  company_name: "Astro AI Trading",
  icon: astro,
  iconBg: "#00262d",
  date: "Jan 2024 - Jun 2024",
  points: [
    "Built sentiment analysis models with FinBERT (financial news) and VADER (social media), achieving 82% accuracy, enabling real-time insights into market sentiment for improved trading decisions.",
    "Optimized data processing with PySpark, improving speed by 25% in distributed environments.",
    "Contributed to stock models with RandomForestRegressor, achieving a 84% R² score.",
  ],
},
{
  title: "Undergraduate ML Researcher",
  company_name: "University of Wisconsin, Madison",
  icon: uwmadison,
  iconBg: "#ffffff",
  date: "Jun 2024 - Aug 2024",
  points: [
    "Trained machine learning models to predict material phase transitions from experimental datasets.",
    "Utilized spaCy for entity recognition, identifying key material properties and enhancing data labeling by 31%, leading to more accurate predictions of material behavior and enabling more targeted experimental designs.",
  ],
},
];

const projects = [
{
  name: "ML Multiplayer Quiz Platform",
  description:
    "Developed a real-time multiplayer quiz platform with WebSocket updates and ML-powered personalized question generation using OCR for PDF processing and HuggingFace T5, supporting 100+ concurrent players.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "node.js",
      color: "green-text-gradient",
    },
    {
      name: "websocket",
      color: "pink-text-gradient",
    },
    {
      name: "AWS",
      color: "blue-text-gradient",
    },
    {
      name: "OCR",
      color: "green-text-gradient",
    },
  ],
  image: mlquiz,
  source_code_link: "https://github.com/JustinKim13/ml_quizmaker",
},
{
  name: "DeepSeek R1 From Scratch",
  description:
    "Built DeepSeek R1 from scratch, optimizing RWKV for efficient training and inference. Trained a scaled-down variant with comparable perplexity and deployed optimized models on AWS with TensorRT acceleration.",
  tags: [
    {
      name: "pytorch",
      color: "blue-text-gradient",
    },
    {
      name: "RWKV",
      color: "green-text-gradient",
    },
    {
      name: "AWS",
      color: "pink-text-gradient",
    },
    {
      name: "TensorRT",
      color: "blue-text-gradient",
    },
  ],
  image: deepseekr1,
  source_code_link: "https://github.com/",
},
{
  name: "ML Movie Recommendation App",
  description:
    "Developed a dynamic movie review platform with instant search, ratings, saving, and an 85%-accurate cosine similarity recommendation system, secured with JWT authentication and optimized RESTful APIs.",
  tags: [
    {
      name: "django",
      color: "blue-text-gradient",
    },
    {
      name: "react",
      color: "green-text-gradient",
    },
    {
      name: "JWT",
      color: "pink-text-gradient",
    },
    {
      name: "scikit-learn",
      color: "blue-text-gradient",
    },
    {
      name: "postgres",
      color: "green-text-gradient",
    },
  ],
  image: movierec,
  source_code_link: "https://github.com/JustinKim13/Movie-Review-Rec-App",
},
];

export { services, technologies, experiences, projects };
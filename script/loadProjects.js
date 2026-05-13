const project7 = {
    title: "RAG & Context Engineering Pipeline ",
    location: "La Jolla, CA",
    time: "Apr 2026 – May 2026",
    imgSrc: "",
    item1: "Built a single-turn Q&A Retrieval-Augmented Generation system over a technical OSS documentation corpus, enforcing a strict 2,000-token per-query context budget",
    item2: "Conducted a systematic sweep of 8+ configurations (varying chunk size, embedding model, retrieval strategy, and reranker settings) to optimize retrieval and generation quality",
    item3: "Achieved 0.93 Correctness and 1.00 Faithfulness by implementing parent-document retrieval with BM25/vector hybrid search, a BGE cross-encoder reranker, and a dual-citation few-shot prompting strategy",
    link: "n/a"
}

const project6 = {
    title: "Security Analysis of Apple Intelligence",
    location: "La Jolla, CA",
    time: "Oct 2025 - Dec 2025",
    imgSrc: "",
    item1: "Reverse-engineered macOS binaries using Ghidra to reconstruct the information flow between user input, Generative AI models, and local storage",
    item2: "Identified a privacy vulnerability where the system persisted unencrypted sensitive personal information to local directories, bypassing the ephemeral-only privacy policy",
    item3: "Developed a Python forensic script to simulate TCC (Transparency, Consent, and Control) inheritance attacks, successfully exfiltrating sensitive user data from sandboxed environments",
    link: "https://drive.google.com/file/d/11rkXLmg64RDYaL7tZD3tpFTOID81ykX4/view?usp=sharing"
}
const project5 = {
    title: "User Intent Prediction on Shopping Sites",
    location: "La Jolla, CA",
    time: "Oct 2025 - Dec 2025",
    imgSrc: "",
    item1: "Developed a dual Hidden Markov Model (HMM) system with the hmmlearn library to predict user purchase intent from clickstream data, achieving 90.4% accuracy and 0.92 precision on the RetailRocket dataset",
    item2: "Engineered a high-volume data pipeline to process 2.7 million behavioral events, implementing a dynamic algorithm to reconstruct user browsing sessions",
    item3: "Implemented the Baum-Welch algorithm for unsupervised training and the Forward algorithm for inference, classifying user sessions by comparing log-likelihood ratios between the two HMMs",
    link: "https://github.com/jankwong705/cse250a_proj"
}
const project4 = {
    title: "Multi-Agent System for Science",
    location: "La Jolla, CA",
    time: "April 2025 - Aug 2025",
    imgSrc: "",
    item1: "Managed a Kubernetes-based deployment pipeline to orchestrate multi-LLM-agent workloads across tasks on math problem-solving and complex conversations",
    item2: "Profiled computational bottlenecks and memory usage across agent interactions using NVIDIA Nsight Systems, identifying key inefficiencies in concurrent agent execution",
    item3: "Conducted system-level performance analysis to support research targeting architecture conferences",
    link: "n/a"
};
const project3 = {
    title: "Analysis of Pixar Movie Success",
    location: "La Jolla, CA",
    time: "September 2024 - December 2024",
    imgSrc: "img/movie_pj.png",
    altText: "Character types vs. revenue visualzied in a boxplot.",
    item1: "Collaborated with a team of 4 members to analyze the influence of character types on Pixar movies revenue",
    item2: "Performed data cleaning and exploratory data analysis to gain insights into the data of 28 Pixar movies",
    item3: "Concluded the absence of a correlation between character types and box office using permutation testing",
    link: "https://github.com/COGS108/Group137-FA24/blob/master/FinalProject_Group137-FA24.ipynb"
};
const project2 = {
    title: "Streak-Based Developer Journal",
    location: "La Jolla, CA",
    time: "April 2024 - June 2024",
    imgSrc: "img/devjourn_pj.png",
    altText: "Home page of the developer journal, showcasing the plant-based theme",
    item1: "Collaborated with a team of 11 members through Agile practices, participating in daily stand-ups, sprint planning, and conducting retrospectives to ensure smooth and efficient project progress",
    item2: "Developed the tagging feature using JavaScript, allowing users to organize journal entries effectively",
    item3: "Contributed to end-to-end Puppeteer testing, improving the reliability and robustness of the application",
    link: "https://cse110-sp24-group22.github.io/cse110-sp24-group22/src/html/home.html"
};
const project1 = {
    title: "Evaluation of Speech Recognition AI",
    location: "La Jolla, CA",
    time: "January 2024 - December 2024",
    imgSrc: "img/whisper_pj.png",
    altText: "Poster showcasing the resutls of the project.",
    item1: "Evaluated the performance of OpenAI’s Whisper against 75 human transcribers on a dataset of 300 English sentences spoken by 20 speakers with varying accents",
    item2: "Discovered that sentence context differentially affected model and human performance",
    item3: "Observed that humans outperformed models on isolated words, suggesting potential limitations in models’ training data or acoustic context requirements",
    link: "https://osf.io/preprints/psyarxiv/8dhua_v1"
};

const projects = [project6, project5, project4, project3, project2, project1];
localStorage.setItem("projects", JSON.stringify(projects));
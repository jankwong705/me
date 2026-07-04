// Project data. Each entry is rendered by the shared <info-card> component.
export const projects = [
    {
        title: "picoLM: Compact Language Model",
        time: "Apr 2026 – Jun 2026",
        link: "https://huggingface.co/jankwong705/picoLM",
        items: [
            "Pretrained a 98M-parameter decoder-only transformer (GQA, SwiGLU, RoPE) in PyTorch on a single shared, interruptible GPU, achieving ~41 perplexity on a 5M-token web-text validation set",
            "Built a streaming data pipeline over FineWeb, SlimPajama, DCLM, and RedPajama-V2 with on-the-fly hash deduplication and token packing, never materializing the corpus on disk",
            "Applied knowledge distillation from GPT-Neo-2.7B, combining teacher-imitation and ground-truth losses"
        ]
    },
    {
        title: "RAG & Context Engineering Pipeline",
        time: "Apr 2026 – May 2026",
        items: [
            "Built a single-turn Q&A Retrieval-Augmented Generation system over a technical OSS documentation corpus, enforcing a strict 2,000-token per-query context budget",
            "Conducted a systematic sweep of 8+ configurations (varying chunk size, embedding model, retrieval strategy, and reranker settings) to optimize retrieval and generation quality",
            "Achieved 0.93 Correctness and 1.00 Faithfulness by implementing parent-document retrieval with BM25/vector hybrid search, a BGE cross-encoder reranker, and a dual-citation few-shot prompting strategy"
        ]
    },
    {
        title: "Security Analysis of Apple Intelligence",
        time: "Oct 2025 - Dec 2025",
        link: "https://drive.google.com/file/d/11rkXLmg64RDYaL7tZD3tpFTOID81ykX4/view?usp=sharing",
        items: [
            "Reverse-engineered macOS binaries using Ghidra to reconstruct the information flow between user input, Generative AI models, and local storage",
            "Identified a privacy vulnerability where the system persisted unencrypted sensitive personal information to local directories, bypassing the ephemeral-only privacy policy",
            "Developed a Python forensic script to simulate TCC (Transparency, Consent, and Control) inheritance attacks, successfully exfiltrating sensitive user data from sandboxed environments"
        ]
    },
    {
        title: "User Intent Prediction on Shopping Sites",
        time: "Oct 2025 - Dec 2025",
        link: "https://github.com/jankwong705/cse250a_proj",
        items: [
            "Developed a dual Hidden Markov Model (HMM) system with the hmmlearn library to predict user purchase intent from clickstream data, achieving 90.4% accuracy and 0.92 precision on the RetailRocket dataset",
            "Engineered a high-volume data pipeline to process 2.7 million behavioral events, implementing a dynamic algorithm to reconstruct user browsing sessions",
            "Implemented the Baum-Welch algorithm for unsupervised training and the Forward algorithm for inference, classifying user sessions by comparing log-likelihood ratios between the two HMMs"
        ]
    },
    {
        title: "Multi-Agent System for Science",
        time: "April 2025 - Aug 2025",
        items: [
            "Managed a Kubernetes-based deployment pipeline to orchestrate multi-LLM-agent workloads across tasks on math problem-solving and complex conversations",
            "Profiled computational bottlenecks and memory usage across agent interactions using NVIDIA Nsight Systems, identifying key inefficiencies in concurrent agent execution",
            "Conducted system-level performance analysis to support research targeting architecture conferences"
        ]
    },
    {
        title: "Analysis of Pixar Movie Success",
        time: "September 2024 - December 2024",
        imgSrc: "img/movie_pj.png",
        altText: "Character types vs. revenue visualized in a boxplot.",
        link: "https://github.com/COGS108/Group137-FA24/blob/master/FinalProject_Group137-FA24.ipynb",
        items: [
            "Collaborated with a team of 4 members to analyze the influence of character types on Pixar movies revenue",
            "Performed data cleaning and exploratory data analysis to gain insights into the data of 28 Pixar movies",
            "Concluded the absence of a correlation between character types and box office using permutation testing"
        ]
    },
    {
        title: "Streak-Based Developer Journal",
        time: "April 2024 - June 2024",
        imgSrc: "img/devjourn_pj.png",
        altText: "Home page of the developer journal, showcasing the plant-based theme",
        link: "https://cse110-sp24-group22.github.io/cse110-sp24-group22/src/html/home.html",
        items: [
            "Collaborated with a team of 11 members through Agile practices, participating in daily stand-ups, sprint planning, and conducting retrospectives to ensure smooth and efficient project progress",
            "Developed the tagging feature using JavaScript, allowing users to organize journal entries effectively",
            "Contributed to end-to-end Puppeteer testing, improving the reliability and robustness of the application"
        ]
    },
    {
        title: "Evaluation of Speech Recognition AI",
        time: "January 2024 - December 2024",
        imgSrc: "img/whisper_pj.png",
        altText: "Poster showcasing the results of the project.",
        link: "https://osf.io/preprints/psyarxiv/8dhua_v1",
        items: [
            "Evaluated the performance of OpenAI’s Whisper against 75 human transcribers on a dataset of 300 English sentences spoken by 20 speakers with varying accents",
            "Discovered that sentence context differentially affected model and human performance",
            "Observed that humans outperformed models on isolated words, suggesting potential limitations in models’ training data or acoustic context requirements"
        ]
    }
];

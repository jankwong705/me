// Experience data. Each entry is rendered by the shared <info-card> component.
export const experiences = [
    {
        title: "AI/LLM Engineer",
        employer: "QualiFly",
        location: "Remote",
        time: "April 2026 - Present",
        items: [
            "Built text-type-specific prompts and a shared guardrail for QWriter’s LLM writing tutor, routing 6 text types and 4 languages through a title-based type detector so feedback and scoring match each text type",
            "Built a generate → self-check → repair loop for quiz generation, using structured JSON output, schema validation and prompt versioning to clear stale cached quizzes",
            "Prototyped a low-temperature LLM grader for Cambridge young-learner writing exams that checks answers against the accepted answers and the official wordlist, choosing it over an embedding-similarity approach"
        ]
    },
    {
        title: "Graduate Teaching Assistant",
        employer: "UC San Diego",
        location: "La Jolla, CA",
        time: "April 2026 - Present",
        items: [
            "Leads weekly discussion sections for Intro to Research and Neurobiology of Cognition, mentoring sections of ~80 students through empirical study design, statistical validation, and core neuroscience concepts",
            "Designs weekly review slides and multiple-choice practice questions aligned with lecture content, holds weekly office hours, and gives students concrete feedback on assessments to help them grasp difficult ideas and improve their work"
        ]
    },
    {
        title: "Computer Science Tutor",
        employer: "UC San Diego",
        location: "La Jolla, CA",
        time: "April 2024 - Jun 2025",
        items: [
            "Provided clarification and support to about 200 students enrolled in courses “Theory of Computation” and “Advanced Data Structures” during office hours",
            "Evaluated students’ homework assignments and exams, offering detailed feedback to aid their understanding",
            "Participated in weekly meetings with the teaching team of 10 to discuss course progress and address challenges"
        ]
    },
    {
        title: "Undergraduate Research Assistant",
        employer: "UC San Diego LASR Lab",
        employerLink: "https://quote.ucsd.edu/lasr/",
        location: "La Jolla, CA",
        time: "Jan 2024 - December 2024",
        items: [
            "Co-authored a paper (accepted for publication in JASA) benchmarking OpenAI Whisper against 75 human transcribers on 300 English sentences from 20 diverse accented speakers",
            "Automated WER computation with Python scripts, discovering that humans significantly outperform models on isolated words, suggesting potential limitations in models’ training data or acoustic context requirements"
        ]
    },
    {
        title: "Instructional Apprentice",
        employer: "UC San Diego",
        location: "La Jolla, CA",
        time: "September 2023 - December 2023",
        items: [
            "Assisted teaching assistants in hosting studio sessions for the “The Design of Everyday Things” course",
            "Evaluated student projects, providing constructive feedback to support their learning objectives",
            "Attended weekly meetings with the teaching team to assess course progress and identify areas for improvement"
        ]
    }
];

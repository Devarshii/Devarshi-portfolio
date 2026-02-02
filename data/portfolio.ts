export const portfolio = {
  name: "Devarshi Trivedi",
  location: "Dallas, TX",
  headline: "Business Analyst | CS Engineer | Machine Learning | Quantum ML",

  email: "your-email@example.com",
  github: "https://github.com/Devarshii",
  linkedin: "https://www.linkedin.com/in/your-link/",

  about: {
    intro:
      "I build practical machine learning systems and data-driven products that transform complex datasets into clear, actionable insights.",
    details:
      "My work spans risk modeling, recommender systems, predictive analytics, and database-backed applications—focused on real-world impact and clean delivery.",
    highlights: [
      "Risk scoring • Clustering • Random Forest",
      "SQL • Database design • Query optimization",
      "Streamlit apps • Analytics • Product thinking",
      "ML + emerging tech interest (Quantum ML)",
    ],
  },

  projects: [
    {
      title: "Smart Loan Recovery Model",
      href: "https://github.com/Devarshii/Smart-Loan-Recovery-Model",
      description:
        "A smart loan recovery system using ML to predict recovery chances. Uses clustering + Random Forest to assign risk scores and recovery strategies.",
      tags: ["ML", "Clustering", "Random Forest", "Risk Scoring"],
    },
    {
      title: "Comet Movie Recommender",
      href: "https://github.com/Devarshii/Comet-Movie-Recommender-",
      description:
        "Content-based movie recommendation system using metadata like genre, cast, and keywords. Built with Python and Streamlit for interactive discovery.",
      tags: ["Recommender", "Python", "Streamlit", "NLP"],
    },
    {
      title: "Art Gallery Management",
      href: "https://github.com/Devarshii/Art-Gallery-Management-",
      description:
        "Relational database system for artwork inventory, artist profiles, and exhibitions. Optimized SQL queries for reporting and analysis.",
      tags: ["SQL", "Database", "Design", "Optimization"],
    },
    {
      title: "Music Popularity Model",
      href: "https://github.com/Devarshii/Music-Popularity-Predictive-Model",
      description:
        "Predicts song popularity using Spotify audio features like energy, danceability, and loudness. Trained a Random Forest model to identify success patterns.",
      tags: ["ML", "Spotify", "Feature Engineering", "Random Forest"],
    },
  ],
};

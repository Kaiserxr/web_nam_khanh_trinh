export interface Experience {
  date: string;
  title: string;
  company: string;
  description: string;
  techStack: string[];
  bulletPoints: string[];
}

// Add one object per role, newest first. Copy an entry to add more.
export const experiences: Experience[] = [
  {
    date: "October 2026 - Present",
    title: "Technical Lead",
    company: "Society of Competitive Programmers (SCP), University of South Florida",
    description:
      "Technical Lead of the Society of Competitive Programmers at the University of South Florida.",
    techStack: ["C++", "Python", "Algorithms", "Data Structures"],
    bulletPoints: [
      "Technical Lead of the Society of Competitive Programmers at the University of South Florida.",
    ],
  },
  {
    date: "September 2025",
    title: "Published Researcher",
    company: "IJSRM (International Journal of Scientific Research and Management)",
    description:
      "Published research comparing five machine-learning algorithms for predicting hotel booking cancellations; Random Forest reached 91.0% accuracy.",
    techStack: ["Python", "scikit-learn", "Pandas", "Machine Learning"],
    bulletPoints: [
      "Evaluated Random Forest, k-Nearest Neighbors, Naive Bayes, SVM, and Decision Tree to predict hotel booking cancellations.",
      "Trained and tested models on 36,300 customer records (25,000 training, 11,300 testing) using 13 booking features.",
      "Random Forest achieved the highest accuracy at 91.0%, outperforming k-NN (82.5%), Naive Bayes (82.0%), SVM (80.0%), and Decision Tree (79.0%).",
    ],
  },
  {
    date: "2025",
    title: "AI & Robotics Projects",
    company: "Hanoi-Amsterdam High School for the Gifted",
    description:
      "Built computer-vision and machine-learning projects that won three international Gold Medals in Singapore, Korea, and Croatia.",
    techStack: ["Python", "Ultralytics YOLO", "Computer Vision", "Object Detection", "Arduino", "Raspberry Pi"],
    bulletPoints: [
      "Diabetic Retinopathy Detection: ML pipeline for retinal fundus images; Gold Medal, Advanced Innovation Global Competition, Singapore (May 2025).",
      "AI-Activated Robotic Arm: YOLO object detection driving robotic-arm movement; Gold Medal, World Invention Creativity Olympic and Conference, Korea (July 2025).",
      "ECO SMART RAIL TRANSIT: AI railway safety monitoring with YOLO; Gold Medal, INOVA 2025, Croatia (September 2025).",
    ],
  },
];

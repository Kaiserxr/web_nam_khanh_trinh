// ===============================================================
//  "Selected work" on the home page, directly under the first screen.
//  Newest or most important first. Copy an entry to add more.
// ===============================================================

export interface FeaturedWork {
  // Short date shown in the left column, e.g. "May 2025"
  date: string;
  // Where it happened (city, lab, journal...). Optional.
  place?: string;
  title: string;
  // One or two sentences: what you built and how.
  description: string;
  // The result: an award, a publication, or your current role.
  outcome: string;
  // What kind of outcome, which picks the small icon next to it.
  outcomeKind: "award" | "publication" | "current";
  // Hard numbers worth scanning for. Optional, keep to 1–2.
  metrics?: string[];
  // Tools used. Optional.
  tools?: string[];
  // Where a visitor can check the work (paper, repo, results page). Optional.
  link?: { href: string; label: string };
}

export const featuredWork: FeaturedWork[] = [
  {
    date: "Oct 2026 – now",
    place: "ERA Lab",
    title: "3D Sonar Detection",
    description:
      "Research on detecting objects in 3D sonar data, working with point-cloud representations, sparse voxel attention, and fusion architectures.",
    outcome: "Undergraduate Research Assistant, ERA Lab, USF",
    outcomeKind: "current",
    tools: ["Point Clouds", "Sparse Voxel Attention", "Sensor Fusion", "Deep Learning"],
  },
  {
    date: "Sep 2025",
    place: "IJSRM",
    title: "Predicting Hotel Booking Cancellations",
    description:
      "Compared five machine-learning algorithms on 36,300 customer records with 13 booking features; Random Forest outperformed k-NN, Naive Bayes, SVM and Decision Tree.",
    outcome: "Published in IJSRM, September 2025",
    outcomeKind: "publication",
    metrics: ["91.0% accuracy", "36,300 records"],
    tools: ["Python", "scikit-learn", "Pandas"],
    link: { href: "https://ijsrm.net/index.php/ijsrm/article/view/6631", label: "Read the paper" },
  },
  {
    date: "Sep 2025",
    place: "Croatia",
    title: "ECO SMART RAIL TRANSIT",
    description:
      "A computer-vision system for railway safety monitoring: an object-detection model trained to spot hazards on the tracks, from data preparation to evaluation.",
    outcome: "Gold Medal, INOVA 2025",
    outcomeKind: "award",
    tools: ["Python", "Ultralytics YOLO", "Object Detection"],
  },
  {
    date: "Jul 2025",
    place: "Korea",
    title: "AI-Activated Robotic Arm",
    description:
      "Trained an object-detection model and wrote the integration code that turns its detections into robotic-arm movements.",
    outcome: "Gold Medal, World Invention Creativity Olympic",
    outcomeKind: "award",
    tools: ["Ultralytics YOLO", "Computer Vision", "Robotics"],
  },
  {
    date: "May 2025",
    place: "Singapore",
    title: "Diabetic Retinopathy Detection",
    description:
      "A machine-learning pipeline that detects diabetic retinopathy from retinal fundus images, covering preprocessing, training and evaluation.",
    outcome: "Gold Medal, Advanced Innovation Global Competition",
    outcomeKind: "award",
    tools: ["Python", "Computer Vision", "Machine Learning"],
  },
];

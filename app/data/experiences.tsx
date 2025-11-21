import { Award, TrendingUp, Users, Zap } from "lucide-react";



export const experiencesPage  = {
  title: "Professional Experience",
  desc : "2+ years journey from part-time to full-time frontend developer"
}

export const experiences = [
  {
    year: "2025",
    positions: [
      {
        title: "Frontend Developer",
        company: "OttoDigital Group",
        period: "Dec 2022 - Mar 2025",
        type: "Full-time",
        typeColor: " text-[#7BA7D8] border-[#7BA7D8]",
        achievements: [
          {
            icon: Users,
            text: "Participated in daily stand-ups and sprint planning",
          },
          {
            icon: Zap,
            text: "Delivered features ahead of schedule across dev, staging & prod",
          },
          {
            icon: Award,
            text: "Promoted from probation to permanent (Mar 2023)",
          },
        ],
        tech: ["Next.js", "TypeScript", "Angular", "Flutter", "Figma", "Git"],
      },
    ],
  },
  {
    year: "2022",
    positions: [
      {
        title: "Frontend Developer Intern",
        company: "KawanBantu",
        period: "Sep 2022 - Dec 2022",
        type: "Internship",
        typeColor: "text-[#7BA7D8] border-[#7BA7D8]",
        achievements: [
          {
            icon: Zap,
            text: "Created a reusable design system for consistent layouts",
          },
          {
            icon: Award,
            text: "Applied component architecture for scalable and maintainable design",
          },
        ],
        tech: ["React JS", "Tailwind CSS", "Storybook", "Figma", "Git"],
      },
      {
        title: "Frontend Developer Intern",
        company: "PT. Doa anak digital",
        period: "Aug 2022 - Nov 2022",
        type: "Internship",
        typeColor: "text-[#7BA7D8] border-[#7BA7D8]",
        achievements: [
          {
            icon: Users,
            text: "Collaborated with Product Owner, QA, UI/UX, and Engineer teams",
          },
          { icon: Zap, text: "Ensured layout consistency across devices" },
          {
            icon: Award,
            text: "Completed first collaborative project, gaining practical team experience",
          },
        ],
        tech: ["React Native", "Figma", "Git"],
      },
      {
        title: "Part-Time Front End Developer",
        company: "PT Gugus Bengawan Asia",
        period: "Jun 2022",
        type: "Part-Time",
        typeColor: "text-[#7BA7D8] border-[#7BA7D8]",
        achievements: [
          {
            icon: TrendingUp,
            text: "Delivered secure, high-quality implementation aligned with modern best practices",
          },
          {
            icon: TrendingUp,
            text: "Optimized for SEO performance (score 92)",
          },
        ],
        tech: ["React JS", "SASS"],
      },
    ],
  },
];

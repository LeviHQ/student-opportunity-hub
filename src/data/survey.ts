// Survey data reproduced from the Google Forms summary charts.
// value: null => percentage not visible in the source chart; needs verification.
export type Slice = { label: string; value: number | null };
export type Question = { id: string; title: string; responses: number; slices: Slice[]; insight: string; featured?: boolean };

export const PALETTE = ["#8B5CF6", "#38BDF8", "#34D399", "#F59E0B", "#F472B6", "#94A3B8", "#64748B"];

export const questions: Question[] = [
  { id: "year", title: "Which course or year are you currently studying?", responses: 103,
    slices: [{ label: "FY (First Year)", value: 28.2 }, { label: "SY (Second Year)", value: 26.2 }, { label: "TY (Third Year)", value: 29.1 }, { label: "Other", value: 16.5 }],
    insight: "Responses came from students at multiple study stages, with TY representing the largest single category at 29.1%." },
  { id: "confidence", title: "How confident are you in finding scholarships suitable for you?", responses: 103, featured: true,
    slices: [{ label: "Very confident", value: 28.2 }, { label: "Somewhat confident", value: 31.1 }, { label: "Not very confident", value: 28.2 }, { label: "Not sure where to start", value: 12.6 }],
    insight: "40.8% selected either ‘Not very confident’ or ‘Not sure where to start’, indicating a meaningful need for clearer scholarship discovery guidance." },
  { id: "search", title: "Have you searched for scholarships or financial assistance in the past 12 months?", responses: 103,
    slices: [{ label: "Yes", value: 53.4 }, { label: "No", value: 46.6 }],
    insight: "More than half of respondents had searched for scholarships or financial assistance in the past 12 months." },
  { id: "online", title: "How often do you use free online courses to learn new skills?", responses: 103,
    slices: [{ label: "Often", value: 30.1 }, { label: "Sometimes", value: 35.9 }, { label: "Rarely", value: 22.3 }, { label: "Never", value: 11.7 }],
    insight: "66.0% selected ‘Often’ or ‘Sometimes’, suggesting that free online learning is relevant to many respondents." },
  { id: "guidance", title: "Where do you usually get career guidance?", responses: 103,
    slices: [{ label: "Teachers or college", value: 21.4 }, { label: "Friends or family", value: 18.4 }, { label: "Websites or blogs", value: 15.5 }, { label: "YouTube or social media", value: 19.4 }, { label: "Career counsellor", value: 9.7 }, { label: "I do not usually get career guidance", value: null }, { label: "Other", value: null }],
    insight: "Respondents reported using several different sources for career guidance, including educational institutions, personal networks, websites and social media." },
  { id: "difficult", title: "Which information is most difficult for you to find?", responses: 102,
    slices: [{ label: "Scholarships and financial aid", value: 32.4 }, { label: "Free online courses", value: 15.7 }, { label: "Career options and roadmaps", value: 19.6 }, { label: "Skills required for jobs", value: 14.7 }, { label: "Internships and job opportunities", value: 11.8 }, { label: "None of these", value: null }],
    insight: "Scholarships and financial aid were the largest reported information difficulty, selected by 32.4% of respondents." },
  { id: "trust", title: "How often do you check whether a scholarship or course website is official and trustworthy?", responses: 103,
    slices: [{ label: "Always", value: 30.1 }, { label: "Sometimes", value: 32.0 }, { label: "Rarely", value: 19.4 }, { label: "Never", value: 8.7 }, { label: "Not sure how to check", value: 9.7 }],
    insight: "30.1% reported always checking source trustworthiness. The remaining response categories show that verification habits vary among respondents." },
  { id: "central", title: "Would a single digital page containing verified scholarship, course and career links be useful to you?", responses: 103, featured: true,
    slices: [{ label: "Yes", value: 35.0 }, { label: "Maybe", value: 42.7 }, { label: "No", value: 22.3 }],
    insight: "35.0% answered Yes and 42.7% answered Maybe. Together, 77.7% expressed definite or potential interest in the concept, although this does not establish actual future usage." },
  { id: "priority", title: "Which resource would you like us to prioritise on our digital resource page?", responses: 103, featured: true,
    slices: [{ label: "Scholarships and financial aid", value: 22.3 }, { label: "Free online courses", value: 17.5 }, { label: "Career roadmaps", value: 22.3 }, { label: "Job-ready skills", value: 26.2 }, { label: "Internships and job resources", value: 11.7 }],
    insight: "Job-ready skills received the highest share at 26.2%, followed by scholarships and career roadmaps at 22.3% each." },
];

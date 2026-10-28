import { createFileRoute } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  GraduationCap, Menu, X, Award, Compass, BookOpen, Briefcase, FileText, Send, Inbox, BarChart3, Lightbulb, Target,
  Map, Mic, ArrowRight, ArrowUp, Code2, Search, ClipboardList, Landmark, CheckCircle2, Users, ListChecks,
} from "lucide-react";
import { questions } from "@/data/survey";
import { SurveyChart } from "@/components/SurveyChart";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Career & Scholarship Resource — CEP 2026–27" },
      { name: "description", content: "B.Sc. Computer Science Sem V Community Engagement Project: student survey insights on scholarships, careers and learning resources." },
      { property: "og:title", content: "Digital Career & Scholarship Resource — CEP 2026–27" },
      { property: "og:description", content: "Survey insights and a proposed centralised resource for students — SDSM Palghar." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["overview", "Overview"], ["problem", "Problem"], ["insights", "Survey Insights"],
  ["solution", "Our Solution"], ["team", "Team"], ["conclusion", "Conclusion"],
] as const;

function Section({ id, eyebrow, title, sub, children }: { id?: string; eyebrow?: string; title: string; sub?: string; children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      {eyebrow && <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">{eyebrow}</p>}
      <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
      <div className="mt-10">{children}</div>
    </section>
  );
}

function IconBox({ children, tone = "primary" }: { children: ReactNode; tone?: "primary" | "sky" | "positive" }) {
  const t = { primary: "bg-primary/15 text-primary", sky: "bg-sky/15 text-sky", positive: "bg-positive/15 text-positive" }[tone];
  return <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${t}`}>{children}</div>;
}

function Index() {
  const [open, setOpen] = useState(false);
  const q = Object.fromEntries(questions.map((x) => [x.id, x]));

  return (
    <div id="top" className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><GraduationCap size={20} /></span>
            <span className="min-w-0">
              <span className="block truncate font-semibold">Career Resource CEP</span>
              <span className="hidden truncate text-[11px] text-muted-foreground sm:block">B.Sc. Computer Science | Semester V | 2026–27</span>
            </span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-elevated hover:text-foreground">{l}</a>
            ))}
          </nav>
          <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded-md p-2 text-muted-foreground hover:bg-elevated lg:hidden">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border px-5 py-3 lg:hidden">
            {nav.map(([id, l]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block rounded-md px-3 py-2.5 text-muted-foreground hover:bg-elevated hover:text-foreground">{l}</a>
            ))}
            <p className="px-3 pt-2 text-xs text-muted-foreground">B.Sc. Computer Science | Semester V | 2026–27</p>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 md:pt-24">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-sky">Community Engagement Project · 2026–27</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">
            Making Career, Scholarship & <span className="text-gradient">Learning Resources</span> Easier to Discover.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            We surveyed college students to understand the challenges they face while discovering scholarships, career guidance, online courses and job-ready skills. Our project uses these findings to propose a centralised digital resource that helps students discover useful opportunities more easily.
          </p>
          <div className="mt-8 grid max-w-3xl gap-3 text-sm sm:grid-cols-2">
            {[
              [Landmark, "Sonopant Dandekar Shikshan Mandali, Palghar"],
              [GraduationCap, "Under the Guidance of Prof. Bhakti Raut"],
              [Code2, "B.Sc. Computer Science — Semester V"],
              [Users, "Community Engagement Project | Academic Year 2026–27"],
            ].map(([I, t], i) => {
              const Ic = I as typeof Landmark;
              return <div key={i} className="flex items-center gap-2.5 text-foreground"><Ic size={16} className="shrink-0 text-primary" />{t as string}</div>;
            })}
          </div>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#insights" className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium text-primary-foreground transition hover:brightness-110">Explore Survey Insights <ArrowRight size={16} /></a>
            <a href="#solution" className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 font-medium transition hover:bg-elevated">Discover Our Solution</a>
          </div>
          <div className="mt-12 grid max-w-3xl grid-cols-3 gap-3">
            {[["103", "responses for most survey questions"], ["10", "survey questions"], ["3", "project team members"]].map(([n, l]) => (
              <div key={l} className="card-surface p-4">
                <div className="text-2xl font-bold md:text-3xl">{n}</div>
                <div className="mt-1 text-xs text-muted-foreground md:text-sm">{l}</div>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">Response counts vary by question.</p>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="overview" eyebrow="Overview" title="About the Project">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-muted-foreground">
            <p>Students may encounter difficulties finding relevant scholarship information, career guidance, free online courses, internships and practical skill-development opportunities across different sources.</p>
            <p>To understand these information needs, our team conducted a questionnaire-based survey with college students. We analysed the responses to identify reported challenges and determine which resource categories students would like to prioritise.</p>
            <p>Based on these findings, we propose a centralised digital resource containing organised, verified links and useful guidance.</p>
            <p className="text-sm"><span className="text-foreground">Tools:</span> Google Forms, Google Sheets and web technologies.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              [ClipboardList, "Project Type", "Community Engagement Project"],
              [BarChart3, "Research Method", "Student questionnaire and descriptive analysis"],
              [Users, "Target Audience", "College students"],
              [Target, "Proposed Intervention", "Centralised digital career and learning resource"],
            ].map(([I, k, v]) => {
              const Ic = I as typeof Users;
              return (
                <div key={k as string} className="card-surface reveal p-5">
                  <Ic size={18} className="text-sky" />
                  <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{k as string}</p>
                  <p className="mt-1 font-medium">{v as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* PROBLEM */}
      <div className="border-y border-border bg-secondary">
        <Section id="problem" eyebrow="Problem investigated" title="Students Need More Than Scattered Links." sub="Four information areas this project set out to investigate — not difficulties assumed for every student.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Award, "Scholarship Discovery", "Students may struggle to find suitable scholarships, understand eligibility criteria, and identify official application sources."],
              [Compass, "Career Direction", "Students need clearer information about job roles, career pathways, required skills and growth opportunities."],
              [BookOpen, "Practical Learning", "Students need accessible learning resources, courses and hands-on projects that connect academic knowledge with practical skills."],
              [Briefcase, "Job Readiness", "Students may need support with internships, resume preparation, interviews and communication skills."],
            ].map(([I, t, d]) => {
              const Ic = I as typeof Award;
              return (
                <div key={t as string} className="card-surface reveal p-6">
                  <IconBox><Ic size={20} /></IconBox>
                  <h3 className="mt-4 font-semibold">{t as string}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* METHODOLOGY */}
      <Section eyebrow="Methodology" title="From Student Feedback to Research Insights.">
        <ol className="relative grid gap-4 border-l border-border pl-6 md:grid-cols-3 md:border-0 md:pl-0 lg:grid-cols-6">
          {[
            [FileText, "Questionnaire Design", "Prepared a structured questionnaire about career guidance, scholarships, online learning and job readiness."],
            [Send, "Student Outreach", "Shared the survey with college students."],
            [Inbox, "Response Collection", "Collected genuine responses through Google Forms."],
            [BarChart3, "Data Analysis", "Reviewed response distributions and created charts to understand reported preferences and challenges."],
            [Lightbulb, "Insight Identification", "Identified recurring information needs and prioritised resource categories."],
            [Target, "Proposed Solution", "Mapped survey findings to a centralised digital resource concept."],
          ].map(([I, t, d], i) => {
            const Ic = I as typeof Send;
            return (
              <li key={t as string} className="card-surface reveal relative p-5">
                <span className="absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full bg-primary md:hidden" />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <Ic size={16} className="text-muted-foreground" />
                </div>
                <h3 className="mt-3 font-semibold">{t as string}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
              </li>
            );
          })}
        </ol>
      </Section>

      {/* DASHBOARD */}
      <div className="border-y border-border bg-secondary">
        <Section id="insights" eyebrow="Survey analytics" title="Survey Insights Dashboard" sub="Interactive charts for nine survey questions. Hover or tap a slice to see its value.">
          <div className="grid gap-5 lg:grid-cols-2">
            {questions.map((x, i) => <SurveyChart key={x.id} q={x} index={i} />)}
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Percentages are reproduced from the Google Forms survey charts and may reflect rounding; totals may not equal exactly 100%. Values marked “Needs verification” were not labelled in the source chart and should be confirmed from the response export.
          </p>
        </Section>
      </div>

      {/* KEY INSIGHTS */}
      <Section eyebrow="Key findings" title="What Did Students Tell Us?">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            ["01", "Scholarship Discovery", "40.8%", "Selected either ‘Not very confident’ or ‘Not sure where to start’ when finding suitable scholarships.", q.confidence.title],
            ["02", "Career Information Is Fragmented", "Multiple", "Respondents use multiple channels for career guidance, including teachers, personal networks, websites and social media.", q.guidance.title],
            ["03", "Job-Ready Skills Lead", "26.2%", "Job-ready skills received the highest share of resource priorities, while scholarships and career roadmaps each received 22.3%.", q.priority.title],
            ["04", "Potential Interest in One Central Resource", "77.7%", "Respondents answered Yes or Maybe when asked whether a single digital page of verified scholarship, course and career links would be useful.", q.central.title],
          ].map(([n, t, big, d, src]) => (
            <div key={n} className="card-surface reveal bg-elevated p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-sky">Insight {n} — {t}</p>
              <p className="mt-4 text-5xl font-bold text-gradient">{big}</p>
              <p className="mt-3 text-foreground">“{d}”</p>
              <p className="mt-4 border-t border-border pt-3 text-xs text-muted-foreground">Evidence: {src}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-3xl text-sm text-muted-foreground">
          These findings support exploring a resource that combines scholarship discovery, career roadmaps, practical learning and job readiness. Results describe the respondents who participated and should not be generalised to all students.
        </p>
      </Section>

      {/* SOLUTION */}
      <div className="border-y border-border bg-secondary">
        <Section id="solution" eyebrow="Proposed Solution" title="One Place. More Opportunities to Discover." sub="A centralised digital resource designed around student information needs. The modules below are planned features — not yet completed functionality.">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [Map, "Career Roadmaps and Guidance", "Detailed career pathways explaining job roles, required skills, growth opportunities, and beginner-friendly guides to help students explore options and plan their future from the start of college.", ["Career roadmaps", "Required skill guides", "Role comparison and career exploration resources"], "Career direction"],
              [Award, "Scholarship Information and Tools", "A centralised collection of verified scholarship information, eligibility criteria, application steps, required documents and deadline information.", ["Official scholarship portals", "Eligibility checklists", "Application guidance", "Links to official announcements"], "Scholarship discovery"],
              [Briefcase, "Internships and Job Portals", "Curated links to internship and entry-level opportunities for freshers, including stipend, eligibility and direct application links when verified.", ["Internship portals", "Entry-level job resources", "Application preparation guidance"], "Job readiness"],
              [BookOpen, "Practical Learning and Courses", "Curated collections of free or affordable courses and hands-on projects organised by subject and difficulty level to connect academic knowledge with industry practices.", ["Beginner-friendly courses", "Project ideas", "Learning roadmaps", "Certificate information where confirmed"], "Practical learning"],
              [Mic, "Interview and Workplace Preparation", "Resources to help students improve resume preparation, interview confidence, communication and workplace readiness.", ["Resume-building guides", "Mock interview practice resources", "Communication skill tips", "Information about workshops and professional development"], "Job readiness"],
            ].map(([I, t, d, items, need], i) => {
              const Ic = I as typeof Map;
              const tone = (["primary", "sky", "positive"] as const)[i % 3];
              return (
                <div key={t as string} className="card-surface reveal flex flex-col p-6">
                  <div className="flex items-center justify-between">
                    <IconBox tone={tone}><Ic size={20} /></IconBox>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">Planned</span>
                  </div>
                  <p className="mt-4 font-mono text-xs text-muted-foreground">Feature {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-lg font-semibold">{t as string}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{d as string}</p>
                  <ul className="mt-4 space-y-1.5 text-sm">
                    {(items as string[]).map((x) => <li key={x} className="flex gap-2"><CheckCircle2 size={15} className="mt-0.5 shrink-0 text-positive" />{x}</li>)}
                  </ul>
                  <p className="mt-auto pt-5 text-xs text-sky">Addresses: {need as string}</p>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* MAPPING */}
      <Section eyebrow="Evidence-based design" title="From Evidence to Action">
        <div className="space-y-3">
          {[
            ["40.8% were not very confident or unsure where to start with scholarships.", "Organised scholarship resources, eligibility guidance and links to official portals."],
            ["Career guidance comes from multiple sources.", "Structured career roadmaps and centralised career information."],
            ["66.0% often or sometimes use free online courses.", "Curated learning resources and practical project ideas."],
            ["Job-ready skills received the highest resource priority at 26.2%.", "Skill-development guides, hands-on projects and job-readiness resources."],
            ["77.7% answered Yes or Maybe about a central resource page.", "Explore a simple, accessible centralised resource and collect feedback on its usefulness."],
          ].map(([f, r]) => (
            <div key={f} className="card-surface reveal grid items-center gap-4 p-5 md:grid-cols-[1fr_auto_1fr]">
              <div><p className="text-xs uppercase tracking-wider text-sky">Survey finding</p><p className="mt-1">{f}</p></div>
              <ArrowRight className="hidden text-primary md:block" />
              <div><p className="text-xs uppercase tracking-wider text-positive">Proposed response</p><p className="mt-1 text-muted-foreground">{r}</p></div>
            </div>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">These proposed actions are informed by survey responses; their effectiveness must be assessed after implementation.</p>
      </Section>

      {/* TEAM */}
      <div className="border-y border-border bg-secondary">
        <Section id="team" eyebrow="Team" title="Meet the Project Team" sub="Three members working together to understand student needs and propose a practical digital solution.">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["AM", "Adarsh Mishra", "Technical Work, Website Development & Data Analysis", Code2, ["Developing the project showcase website.", "Creating and organising the survey analytics dashboard.", "Analysing and presenting survey findings.", "Coordinating technical presentation of the proposed resource."]],
              ["AM", "Aditya Mishra", "Resource Research", Search, ["Researching useful scholarship resources.", "Identifying career guidance and learning opportunities.", "Finding relevant skill-development resources.", "Organising useful links and information for students."]],
              ["NJ", "Nilesh Jha", "Survey & Data Collection", ListChecks, ["Preparing and sharing the questionnaire.", "Reaching student respondents.", "Coordinating survey data collection.", "Maintaining survey documentation."]],
            ].map(([ini, name, role, I, resp], i) => {
              const Ic = I as typeof Code2;
              const tone = (["primary", "sky", "positive"] as const)[i];
              return (
                <div key={name as string} className="card-surface reveal p-6">
                  <div className="flex items-center gap-4">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-border bg-elevated text-lg font-bold">{ini as string}</div>
                    <IconBox tone={tone}><Ic size={18} /></IconBox>
                  </div>
                  <h3 className="mt-5 text-xl font-bold">{name as string}</h3>
                  <p className="mt-1 text-sm text-sky">{role as string}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {(resp as string[]).map((r) => <li key={r} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />{r}</li>)}
                  </ul>
                </div>
              );
            })}
          </div>
        </Section>
      </div>

      {/* FACULTY */}
      <section className="mx-auto max-w-6xl px-5 py-20">
        <div className="card-surface reveal grid gap-6 bg-elevated p-8 md:grid-cols-[auto_1fr] md:p-10">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary"><Landmark size={30} /></div>
          <dl className="grid gap-5 sm:grid-cols-2">
            {[
              ["Project", "Digital Career and Scholarship Resource for Students"],
              ["College", "Sonopant Dandekar Shikshan Mandali, Palghar"],
              ["Under the Guidance of", "Prof. Bhakti Raut"],
              ["Programme", "B.Sc. Computer Science — Semester V"],
              ["Academic Year", "2026–27"],
            ].map(([k, v]) => (
              <div key={k}><dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt><dd className="mt-1 font-medium">{v}</dd></div>
            ))}
          </dl>
        </div>
      </section>

      {/* CONCLUSION */}
      <div className="border-t border-border bg-secondary">
        <Section id="conclusion" eyebrow="Conclusion" title="Turning Student Feedback into a Useful Resource">
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>Our project uses direct student feedback to explore information gaps related to scholarships, career planning, online learning and job readiness. The survey identifies scholarship discovery as an important reported difficulty and job-ready skills as the most selected resource priority.</p>
            <p>Based on these findings, we propose a centralised digital resource that organises useful, verified information in one accessible place. The next step is to curate the resources, develop the planned modules, and gather user feedback to evaluate their usefulness.</p>
          </div>
          <blockquote className="hero-glow card-surface mt-12 p-8 text-2xl font-semibold leading-snug md:p-12 md:text-3xl">
            Built around student needs. Guided by real survey responses. <span className="text-gradient">Designed to make useful opportunities easier to discover.</span>
          </blockquote>
        </Section>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 text-sm text-muted-foreground md:grid-cols-[1fr_auto]">
          <div className="space-y-1.5">
            <p className="font-semibold text-foreground">Digital Career and Scholarship Resource for Students</p>
            <p>Sonopant Dandekar Shikshan Mandali, Palghar</p>
            <p>Under the Guidance of Prof. Bhakti Raut</p>
            <p>B.Sc. Computer Science — Semester V</p>
            <p>Community Engagement Project | Academic Year 2026–27</p>
            <p className="pt-2"><span className="text-foreground">Team:</span> Adarsh Mishra · Aditya Mishra · Nilesh Jha</p>
          </div>
          <a href="#top" className="inline-flex h-fit items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground hover:bg-elevated"><ArrowUp size={16} /> Back to Top</a>
        </div>
      </footer>
    </div>
  );
}

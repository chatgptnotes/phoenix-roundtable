import { Calendar, GitBranch, Clock } from "lucide-react";

const features = [
  {
    title: "Weekly Vibe Sessions",
    desc: "Live build-alongs and lightning talks to sharpen your skills.",
    Icon: Calendar,
  },
  {
    title: "Open-Source Collabs",
    desc: "Pair up and contribute to real projects with guidance.",
    Icon: GitBranch,
  },
  {
    title: "Mentor Office Hours",
    desc: "Get unstuck faster with friendly, hands-on help.",
    Icon: Clock,
  },
];

const Features = () => {
  return (
    <section id="features" aria-label="Features" className="py-16 md:py-24">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What you'll get</h2>
          <p className="mt-3 text-muted-foreground">Practical, people-first experiences designed to help you ship more, together.</p>
        </header>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ title, desc, Icon }) => (
            <article key={title} className="rounded-xl border bg-card p-6 text-card-foreground transition-shadow hover:shadow-glow animate-fade-in">
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg border bg-background">
                <Icon />
              </div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

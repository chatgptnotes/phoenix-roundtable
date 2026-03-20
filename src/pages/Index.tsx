import { Calendar, Clock, Laptop, Video, Users, BadgeCheck, Phone, Mail, ExternalLink, Bot, Cpu, Cog, Zap, BrainCircuit, CircuitBoard, Target, TrendingUp, Lightbulb, Network, GraduationCap, Factory, Wrench, Building2, MapPin } from "lucide-react";

const Index = () => {
  return (
    <main className="min-h-screen w-full bg-hero">
      <section className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        {/* Poster container */}
        <article className="rounded-3xl p-6 md:p-10 text-center text-primary-foreground elevated">
          {/* Header */}
          <header className="mb-10 md:mb-12">
            <div className="mb-6">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-primary-foreground animate-enter">
                AI in Automation Engineering
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>
                Live Round Table Discussion
              </p>
            </div>
            <p className="mt-4 text-lg md:text-2xl text-primary-foreground/80">
              🚀 Join industry leaders for an engaging round table on how AI is transforming Automation Engineering! 🎯 Practical insights, real-world use cases, and live Q&A.
            </p>
          </header>

          {/* Hero Visual */}
          <div className="glass-panel rounded-3xl p-8 md:p-12 mb-10 md:mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 20% 30%, hsl(var(--brand-accent)) 1px, transparent 1px), radial-gradient(circle at 80% 70%, hsl(var(--brand-accent)) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="flex items-center justify-center gap-6 md:gap-10">
                <BrainCircuit size={64} className="md:hidden" color="hsl(var(--brand-accent))" />
                <BrainCircuit size={96} className="hidden md:block" color="hsl(var(--brand-accent))" />
                <div className="text-4xl md:text-6xl font-black" style={{ color: "hsl(var(--brand-accent))" }}>+</div>
                <Cog size={64} className="md:hidden animate-spin" style={{ animationDuration: "8s", color: "hsl(var(--brand-accent))" }} />
                <Cog size={96} className="hidden md:block animate-spin" style={{ animationDuration: "8s", color: "hsl(var(--brand-accent))" }} />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-center">Where Artificial Intelligence Meets Industrial Automation</h2>
              <div className="grid grid-cols-3 gap-6 md:gap-12 mt-4">
                <div className="flex flex-col items-center gap-2">
                  <Bot size={40} color="hsl(var(--brand-accent))" />
                  <span className="text-sm md:text-base text-primary-foreground/70 text-center">Smart Systems</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <CircuitBoard size={40} color="hsl(var(--brand-accent))" />
                  <span className="text-sm md:text-base text-primary-foreground/70 text-center">PLC & SCADA</span>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Zap size={40} color="hsl(var(--brand-accent))" />
                  <span className="text-sm md:text-base text-primary-foreground/70 text-center">Industry 4.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Speakers */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8">Round Table Speakers</h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-10 md:mb-12">
            {/* Speaker 1 */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-40 w-40 md:h-44 md:w-44 rounded-full ring-4 flex items-center justify-center" style={{
                boxShadow: "var(--shadow-glow)",
                backgroundColor: "hsl(var(--brand-accent) / 0.15)",
              }}>
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>BK</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Dr. Murali BK</h2>
              <p className="mt-1 font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>
                Healthcare Innovator & Tech Entrepreneur
              </p>
              <ul className="mt-5 space-y-3 text-left max-w-md mx-auto">
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>CTO</span>, Bettroi</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Phoenix Group</span> of Companies</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80">Pioneer in <span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>AI-powered healthcare</span> solutions</span></li>
              </ul>
            </div>

            {/* Speaker 2 */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-40 w-40 md:h-44 md:w-44 rounded-full ring-4 flex items-center justify-center" style={{
                boxShadow: "var(--shadow-glow)",
                backgroundColor: "hsl(var(--brand-accent) / 0.15)",
              }}>
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>BT</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Biji (BT) Tharakan Thomas</h2>
              <p className="mt-1 font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>
                Growth Strategist & Business Leader
              </p>
              <ul className="mt-5 space-y-3 text-left max-w-md mx-auto">
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Growth Strategist</span> & Founder</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Board Member</span>, Multiple Organizations</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80">Former <span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>GE</span> Executive</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80">Based in <span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Dubai, UAE</span></span></li>
              </ul>
            </div>

            {/* Speaker 3 */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-40 w-40 md:h-44 md:w-44 rounded-full overflow-hidden ring-4 flex items-center justify-center" style={{
                boxShadow: "var(--shadow-glow)",
                backgroundColor: "hsl(var(--brand-accent) / 0.15)",
              }}>
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>SD</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Saikat Dutta</h2>
              <p className="mt-1 font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>
                Industrial Automation Engineer
              </p>
              <ul className="mt-5 space-y-3 text-left max-w-md mx-auto">
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Phoenix Group</span> of Companies</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Specialist</span> in Industrial Automation & AI</span></li>
              </ul>
            </div>

            {/* Speaker 4 */}
            <div className="glass-panel rounded-3xl p-6 md:p-8 transition-transform duration-300 hover:-translate-y-1">
              <div className="mx-auto mb-6 h-40 w-40 md:h-44 md:w-44 rounded-full overflow-hidden ring-4 flex items-center justify-center" style={{
                boxShadow: "var(--shadow-glow)",
                backgroundColor: "hsl(var(--brand-accent) / 0.15)",
              }}>
                <span className="text-5xl font-bold" style={{ color: "hsl(var(--brand-accent))" }}>AB</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">Akhil Bahale</h2>
              <p className="mt-1 font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>
                Industrial Instrumentation Engineer
              </p>
              <ul className="mt-5 space-y-3 text-left max-w-md mx-auto">
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Founder</span>, Sterling Electricals and Technologies</span></li>
                <li className="flex gap-3"><BadgeCheck className="shrink-0" color="hsl(var(--brand-accent))" /> <span className="text-primary-foreground/80"><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Expert</span> in Industrial Instrumentation & AI</span></li>
              </ul>
            </div>
          </div>

          {/* Who Should Attend */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 text-left mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Who Should Attend?</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-4 items-start">
                <Factory className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Automation & Instrumentation Engineers</p>
                  <p className="text-primary-foreground/70">Looking to integrate AI into PLC, SCADA, and DCS systems</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Wrench className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Plant & Maintenance Managers</p>
                  <p className="text-primary-foreground/70">Seeking predictive maintenance and smart monitoring solutions</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Building2 className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Business Owners & Entrepreneurs</p>
                  <p className="text-primary-foreground/70">Exploring AI-driven efficiency and cost reduction in operations</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <GraduationCap className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Engineering Students & Educators</p>
                  <p className="text-primary-foreground/70">Wanting exposure to real-world AI applications in industry</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Network className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>IT & OT Professionals</p>
                  <p className="text-primary-foreground/70">Bridging the gap between information technology and operational technology</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Lightbulb className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Anyone Curious About AI + Industry</p>
                  <p className="text-primary-foreground/70">No prior AI experience needed — just bring your curiosity</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 text-left mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Benefits of Attending</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex gap-4 items-start">
                <Target className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Real-World Use Cases</p>
                  <p className="text-primary-foreground/70">Learn how AI is being applied in actual industrial automation projects today</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Users className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Network with Industry Leaders</p>
                  <p className="text-primary-foreground/70">Connect directly with experienced professionals from automation and AI</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <TrendingUp className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Stay Ahead of the Curve</p>
                  <p className="text-primary-foreground/70">Understand emerging trends in Industry 4.0, IIoT, and AI-driven automation</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <BrainCircuit className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Practical Insights, Not Theory</p>
                  <p className="text-primary-foreground/70">Hands-on discussions with actionable takeaways you can implement immediately</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <Zap className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Live Q&A with Experts</p>
                  <p className="text-primary-foreground/70">Get your specific questions answered by the panel in real time</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <BadgeCheck className="shrink-0 mt-1" color="hsl(var(--brand-accent))" size={28} />
                <div>
                  <p className="font-semibold text-lg" style={{ color: "hsl(var(--brand-accent))" }}>Certificate of Participation</p>
                  <p className="text-primary-foreground/70">Receive a certificate to showcase your commitment to continuous learning</p>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 text-left mb-10 md:mb-12">
            <div className="flex items-center gap-4 text-lg md:text-2xl mb-4">
              <Calendar color="hsl(var(--brand-accent))" />
              <div><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Every Sunday</span></div>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl mb-4">
              <Clock color="hsl(var(--brand-accent))" />
              <div>
                <span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>11:00 AM - 11:30 AM IST</span>
                <span className="text-primary-foreground/80"> (9:30 AM - 10:00 AM Dubai Time)</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl mb-4">
              <Laptop color="hsl(var(--brand-accent))" />
              <div><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Hybrid Format:</span> Zoom & In-Person</div>
            </div>
            <div className="flex items-center gap-4 text-lg md:text-2xl">
              <MapPin color="hsl(var(--brand-accent))" />
              <div><span className="font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>In-Person Venue:</span> Hope Hospital, Director's Chamber</div>
            </div>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12">
            <div className="glass-panel rounded-3xl p-6">
              <Video className="mx-auto mb-3" color="hsl(var(--brand-accent))" size={48} />
              <h3 className="font-bold text-xl">Session Recordings</h3>
              <p className="mt-2 text-primary-foreground/80">Access to all session recordings for the entire month</p>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <Users className="mx-auto mb-3" color="hsl(var(--brand-accent))" size={48} />
              <h3 className="font-bold text-xl">Speaker Access</h3>
              <p className="mt-2 text-primary-foreground/80">Direct access to speakers for questions and guidance</p>
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <BadgeCheck className="mx-auto mb-3" color="hsl(var(--brand-accent))" size={48} />
              <h3 className="font-bold text-xl">Certificate</h3>
              <p className="mt-2 text-primary-foreground/80">Certificate of participation for all attendees</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 mb-10 md:mb-12">
            <h2 className="text-2xl md:text-4xl font-bold">Pricing</h2>
            <div className="mt-6 flex items-end justify-center gap-4">
              <div className="text-5xl md:text-6xl font-black" style={{ color: "hsl(var(--brand-accent))" }}>$249</div>
              <div className="text-left text-primary-foreground/80 text-base md:text-lg">per participant<br/>for all month</div>
            </div>
            <div className="mt-6 rounded-2xl p-4 md:p-6" style={{
              backgroundColor: "hsl(var(--brand-accent) / 0.25)",
              border: "4px solid hsl(var(--brand-accent))",
            }}>
              <p className="font-bold text-lg md:text-2xl">🎁 NO CHARGE if you register through this invitation link!</p>
            </div>
          </div>

          {/* Registration */}
          <div className="glass-panel rounded-3xl p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-4xl font-bold">Register Now</h2>
            <a
              className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-lg font-bold transition-transform duration-300 hover:-translate-y-0.5 focus:outline-none focus:ring-4"
              href="https://us06web.zoom.us/meeting/register/kcmlTLqzS5SE0fDQ6vLh6g"
              target="_blank"
              rel="noreferrer"
              style={{
                backgroundColor: "hsl(var(--brand-accent))",
                color: "hsl(var(--brand-end))",
                boxShadow: "var(--shadow-glow)",
              }}
            >
              <ExternalLink size={20} /> Click to Register
            </a>

            <p className="mt-4 text-base md:text-lg">
              You can pay through this link: <a href="https://rzp.io/rzp/SRpQFvs" target="_blank" rel="noopener" className="underline font-semibold" style={{ color: "hsl(var(--brand-accent))" }}>Razorpay</a>
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-left">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <Phone color="hsl(var(--brand-accent))" />
                  <span className="text-lg">+91 9373111709</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone color="hsl(var(--brand-accent))" />
                  <span className="text-lg">+971 54 714 8580</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3">
                  <Mail color="hsl(var(--brand-accent))" />
                  <span className="text-lg">cmd@hopehospital.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail color="hsl(var(--brand-accent))" />
                  <span className="text-lg">bt.thomas@bettroi.com</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Index;

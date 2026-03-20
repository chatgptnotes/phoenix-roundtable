import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Sparkles, ArrowRight, Users } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <section aria-label="Hero" className="mt-10">
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className="relative overflow-hidden rounded-3xl border bg-gradient-hero p-8 md:p-12 shadow-glow"
      >
        <div className="pointer-events-none absolute inset-0 gradient-spotlight" aria-hidden="true" />

        <div className="relative z-10 grid max-w-none items-center gap-8 md:grid-cols-2">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/10 px-3 py-1 text-xs text-primary-foreground backdrop-blur">
              <Sparkles className="opacity-90" />
              Join the Vibe coding community
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-primary-foreground animate-enter">
              Learn, build, and ship together
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
              A welcoming community of builders. Weekly sessions, collaborative projects, and hands-on mentorship to level up your craft.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="hero" size="lg" className="hover-scale">
                <a href="#join" aria-label="Join the community">
                  <Users className="mr-2" /> Join the community
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-scale">
                <a href="#features" aria-label="Explore features">
                  Explore features <ArrowRight className="ml-2" />
                </a>
              </Button>
            </div>
          </div>

          <aside aria-label="Community portraits" className="relative">
            <div className="overflow-hidden rounded-2xl border bg-background/30 backdrop-blur-sm">
              <AspectRatio ratio={4/3}>
                <div className="grid grid-cols-2 h-full w-full">
                  <img
                    src="/lovable-uploads/cb0433f7-a831-4014-9605-5f0574dc2f93.png"
                    alt="Community member portrait"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <img
                    src="/lovable-uploads/5a097bcf-6fa9-4029-88f2-30cb0ee1edd7.png"
                    alt="Community member portrait"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </AspectRatio>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Hero;

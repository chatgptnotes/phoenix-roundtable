import { useEffect } from "react";
import { Users, Target, Heart, Code } from "lucide-react";

const About = () => {
  useEffect(() => {
    document.title = "About Us — codeyourvibe.tech";
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="font-bold tracking-tight inline-flex items-center gap-2">
            <img src="/logo-cyv.svg" alt="codeyourvibe.tech logo" className="h-6 w-6" />
            <span className="text-gradient-brand text-2xl">codeyourvibe.tech</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/" className="story-link">Home</a>
            <a href="/about" className="story-link text-primary font-medium">About</a>
            <a href="/#features" className="story-link">Features</a>
            <a href="/#join" className="story-link">Join</a>
            <a href="/#contact" className="story-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              About <span className="text-gradient-brand">codeyourvibe.tech</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're a passionate community of developers, creators, and learners building the future together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                To create an inclusive and supportive environment where developers of all skill levels can learn, 
                collaborate, and build amazing projects together. We believe in the power of community-driven learning 
                and hands-on experience.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Heart className="text-primary" />
                Our Values
              </h2>
              <ul className="text-muted-foreground space-y-2">
                <li>• Inclusive and welcoming community</li>
                <li>• Learning through building</li>
                <li>• Collaborative growth</li>
                <li>• Sharing knowledge freely</li>
                <li>• Supporting each other's journey</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 rounded-lg border">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Community First</h3>
              <p className="text-muted-foreground">
                We prioritize building meaningful connections and fostering a supportive environment.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border">
              <Code className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Learn by Doing</h3>
              <p className="text-muted-foreground">
                Hands-on projects and real-world experience drive our learning approach.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Goal Oriented</h3>
              <p className="text-muted-foreground">
                We help members set and achieve their coding and career goals.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're just starting your coding journey or you're an experienced developer looking to give back, 
              there's a place for you in our community.
            </p>
            <a 
              href="/#join" 
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Users className="h-4 w-4" />
              Join the Community
            </a>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        <div className="container">© {new Date().getFullYear()} Vibe Coding Community</div>
      </footer>
    </>
  );
};

export default About;
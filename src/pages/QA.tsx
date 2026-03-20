import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MessageSquare, ThumbsUp, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const QA = () => {
  const [questions, setQuestions] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = "Q&A — codeyourvibe.tech";
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [questionsRes, categoriesRes, tagsRes] = await Promise.all([
        supabase
          .from('questions')
          .select(`
            *,
            categories(name, color),
            user_profiles(display_name),
            question_tags(tags(name)),
            _count:answers(count)
          `)
          .order('created_at', { ascending: false })
          .limit(10),
        supabase.from('categories').select('*').order('name'),
        supabase.from('tags').select('*').order('question_count', { ascending: false }).limit(10)
      ]);

      if (questionsRes.data) setQuestions(questionsRes.data);
      if (categoriesRes.data) setCategories(categoriesRes.data);
      if (tagsRes.data) setTags(tagsRes.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="font-bold tracking-tight inline-flex items-center gap-2">
            <img src="/logo-cyv.svg" alt="codeyourvibe.tech logo" className="h-6 w-6" />
            <span className="text-gradient-brand text-2xl">codeyourvibe.tech</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="/about" className="story-link">About</a>
            <a href="/qa" className="story-link text-primary">Q&A</a>
            <a href="/#features" className="story-link">Features</a>
            <a href="/#join" className="story-link">Join</a>
            <a href="/#contact" className="story-link">Contact</a>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 space-y-6">
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <nav className="space-y-2">
                <a href="#" className="block text-sm hover:text-primary">All Questions</a>
                {categories.map((category) => (
                  <a 
                    key={category.id} 
                    href="#" 
                    className="block text-sm hover:text-primary"
                  >
                    {category.name}
                  </a>
                ))}
              </nav>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag.id} variant="secondary">{tag.name}</Badge>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <h1 className="text-3xl font-bold">Questions & Answers</h1>
              <Button className="flex items-center gap-2" onClick={() => window.location.href = '/qa/ask'}>
                <Plus className="h-4 w-4" />
                Ask Question
              </Button>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search questions..." 
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Question List */}
            <div className="space-y-4">
              {loading ? (
                <div className="text-center py-8">Loading questions...</div>
              ) : questions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  No questions found. Be the first to ask!
                </div>
              ) : (
                questions.map((question) => (
                  <Card key={question.id} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start gap-4">
                        <CardTitle 
                          className="text-lg hover:text-primary cursor-pointer" 
                          onClick={() => window.location.href = `/qa/question/${question.id}`}
                        >
                          {question.title}
                        </CardTitle>
                        <div className="flex gap-4 text-sm text-muted-foreground whitespace-nowrap">
                          <div className="flex items-center gap-1">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{question.vote_score || 0}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>{question.answer_count || 0}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="h-4 w-4" />
                            <span>{question.view_count || 0}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground mb-3 line-clamp-2">
                        {question.content.length > 150 
                          ? question.content.substring(0, 150) + "..." 
                          : question.content}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {question.question_tags?.map((qt: any) => (
                          <Badge key={qt.tags.name} variant="outline">
                            {qt.tags.name}
                          </Badge>
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Asked by{' '}
                        <span className="font-medium">
                          @{question.user_profiles?.display_name || 'Anonymous'}
                        </span>{' '}
                        • {new Date(question.created_at).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline">Load More Questions</Button>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t py-8 text-center text-sm text-muted-foreground mt-16">
        <div className="container">© {new Date().getFullYear()} Vibe Coding Community</div>
      </footer>
    </>
  );
};

export default QA;
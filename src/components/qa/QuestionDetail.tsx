import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ThumbsUp, ThumbsDown, MessageSquare, Check, Eye, Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const QuestionDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [newAnswer, setNewAnswer] = useState("");
  const [question, setQuestion] = useState<any>(null);
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Question Details — codeyourvibe.tech";
    if (id) {
      fetchQuestion();
    }
  }, [id]);

  const fetchQuestion = async () => {
    try {
      const { data, error } = await supabase
        .from('questions')
        .select(`
          *,
          categories(name, color),
          user_profiles(display_name),
          question_tags(tags(name))
        `)
        .eq('id', id)
        .single();

      if (error) throw error;
      
      // Increment view count
      await supabase
        .from('questions')
        .update({ view_count: (data.view_count || 0) + 1 })
        .eq('id', id);

      setQuestion(data);
      fetchAnswers();
    } catch (error) {
      console.error('Error fetching question:', error);
      toast.error('Question not found');
      navigate('/qa');
    }
  };

  const fetchAnswers = async () => {
    try {
      const { data, error } = await supabase
        .from('answers')
        .select(`
          *,
          user_profiles(display_name)
        `)
        .eq('question_id', id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAnswers(data || []);
    } catch (error) {
      console.error('Error fetching answers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAnswer = async () => {
    if (!newAnswer.trim()) return;
    
    setSubmitting(true);
    try {
      const { error } = await supabase
        .from('answers')
        .insert({
          content: newAnswer,
          question_id: id,
          user_id: 'anonymous' // TODO: Replace with actual user ID when auth is implemented
        });

      if (error) throw error;
      
      toast.success('Answer submitted successfully!');
      setNewAnswer("");
      fetchAnswers(); // Refresh answers
    } catch (error) {
      console.error('Error submitting answer:', error);
      toast.error('Authentication required to post answers');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading question...</div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Question not found</div>
      </div>
    );
  }

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
        <div className="mb-6">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/qa")}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Questions
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Question */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="text-2xl">{question.title}</CardTitle>
                  <div className="flex gap-4 text-sm text-muted-foreground whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4" />
                      <span>{question.vote_score || 0}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-4 w-4" />
                      <span>{answers.length}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{question.view_count || 0}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-sm max-w-none mb-4">
                  <pre className="whitespace-pre-wrap">{question.content}</pre>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.question_tags?.map((qt: any) => (
                    <Badge key={qt.tags.name} variant="outline">{qt.tags.name}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span>Asked by <strong>@{question.user_profiles?.display_name || 'Anonymous'}</strong></span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(question.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Answers */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">
                {answers.length} Answer{answers.length !== 1 ? 's' : ''}
              </h2>
              
              {answers.map((answer) => (
                <Card key={answer.id} className={answer.is_accepted ? "border-green-200 bg-green-50/50" : ""}>
                  <CardContent className="pt-6">
                    {answer.is_accepted && (
                      <div className="flex items-center gap-2 text-green-600 mb-3">
                        <Check className="h-4 w-4" />
                        <span className="text-sm font-medium">Accepted Answer</span>
                      </div>
                    )}
                    <div className="prose prose-sm max-w-none mb-4">
                      <pre className="whitespace-pre-wrap">{answer.content}</pre>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{answer.vote_score || 0}</span>
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ThumbsDown className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <span>Answered by <strong>@{answer.user_profiles?.display_name || 'Anonymous'}</strong> • {new Date(answer.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Answer Form */}
            <Card>
              <CardHeader>
                <CardTitle>Your Answer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Textarea
                    placeholder="Write your answer here... You can use markdown formatting."
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    className="min-h-[150px]"
                  />
                  <Button 
                    onClick={handleSubmitAnswer} 
                    disabled={!newAnswer.trim() || submitting}
                  >
                    {submitting ? 'Posting...' : 'Post Your Answer'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Related Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px]">
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="text-sm">
                        <a href="#" className="text-primary hover:underline line-clamp-2">
                          How to handle form validation in React with TypeScript?
                        </a>
                        <div className="text-muted-foreground text-xs mt-1">
                          3 answers • 15 votes
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default QuestionDetail;
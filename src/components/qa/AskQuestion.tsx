import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, Plus, X, HelpCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const AskQuestion = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");
  const [categories, setCategories] = useState<any[]>([]);
  const [availableTags, setAvailableTags] = useState<any[]>([]);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Ask a Question — codeyourvibe.tech";
    fetchCategories();
    fetchTags();
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase.from('categories').select('*').order('name');
    if (data) setCategories(data);
  };

  const fetchTags = async () => {
    const { data } = await supabase.from('tags').select('*').order('question_count', { ascending: false }).limit(20);
    if (data) setAvailableTags(data);
  };

  const handleAddTag = (tagName: string) => {
    if (tagName && !tags.includes(tagName) && tags.length < 5) {
      setTags([...tags, tagName]);
      setCurrentTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim() || !category) return;
    
    setSubmitting(true);
    try {
      // Find category ID
      const selectedCategory = categories.find(cat => cat.slug === category);
      if (!selectedCategory) {
        toast.error('Please select a valid category');
        return;
      }

      // Create question
      const { data: questionData, error: questionError } = await supabase
        .from('questions')
        .insert({
          title: title.trim(),
          content: content.trim(),
          category_id: selectedCategory.id,
          user_id: 'anonymous', // TODO: Replace with actual user ID when auth is implemented
          slug: title.toLowerCase().replace(/[^\w\s]/gi, '').replace(/\s+/g, '-')
        })
        .select()
        .single();

      if (questionError) throw questionError;

      // Add tags if any
      if (tags.length > 0 && questionData) {
        for (const tagName of tags) {
          // Find or create tag
          let { data: tagData } = await supabase
            .from('tags')
            .select('id')
            .eq('name', tagName)
            .single();

          if (!tagData) {
            const { data: newTag } = await supabase
              .from('tags')
              .insert({ name: tagName })
              .select()
              .single();
            tagData = newTag;
          }

          if (tagData) {
            await supabase
              .from('question_tags')
              .insert({
                question_id: questionData.id,
                tag_id: tagData.id
              });
          }
        }
      }

      toast.success('Question posted successfully!');
      navigate("/qa");
    } catch (error) {
      console.error('Error submitting question:', error);
      toast.error('Authentication required to post questions');
    } finally {
      setSubmitting(false);
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

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  Ask a Question
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Question Title *</Label>
                  <Input
                    id="title"
                    placeholder="Be specific and imagine you're asking a question to another person"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Make your title clear and specific. Good titles get better answers.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="category">Category *</Label>
                  <Select onValueChange={setCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((cat) => (
                        <SelectItem key={cat.id} value={cat.slug}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="content">Question Details *</Label>
                  <Textarea
                    id="content"
                    placeholder="Include all the information someone would need to answer your question. You can use markdown formatting."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className="min-h-[200px]"
                  />
                  <p className="text-sm text-muted-foreground">
                    Include code samples, error messages, and what you've already tried.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (up to 5)</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                        {tag}
                        <X 
                          className="h-3 w-3 cursor-pointer" 
                          onClick={() => handleRemoveTag(tag)}
                        />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="tags"
                      placeholder="Add a tag"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddTag(currentTag);
                        }
                      }}
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={() => handleAddTag(currentTag)}
                      disabled={!currentTag || tags.includes(currentTag) || tags.length >= 5}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {availableTags.slice(0, 10).map((tag) => (
                      <Button
                        key={tag.id}
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-6 text-xs"
                        onClick={() => handleAddTag(tag.name)}
                        disabled={tags.includes(tag.name) || tags.length >= 5}
                      >
                        {tag.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button 
                    onClick={handleSubmit}
                    disabled={!title.trim() || !content.trim() || !category || submitting}
                    className="flex-1"
                  >
                    {submitting ? 'Posting...' : 'Post Your Question'}
                  </Button>
                  <Button variant="outline" onClick={() => navigate("/qa")}>
                    Cancel
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Writing Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-medium mb-1">Good Question Titles:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>"How to handle async/await in React useEffect?"</li>
                    <li>"TypeError: Cannot read property 'map' of undefined"</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Include in Your Question:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>What you're trying to achieve</li>
                    <li>What you've already tried</li>
                    <li>Error messages (if any)</li>
                    <li>Relevant code snippets</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-1">Markdown Support:</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Use `backticks` for inline code</li>
                    <li>Use ```code blocks``` for multi-line code</li>
                    <li>Use **bold** and *italic* formatting</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default AskQuestion;
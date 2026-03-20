-- Create categories table
CREATE TABLE public.categories (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    slug TEXT NOT NULL UNIQUE,
    color TEXT DEFAULT '#6366f1',
    icon TEXT,
    question_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create tags table  
CREATE TABLE public.tags (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    description TEXT,
    question_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create questions table
CREATE TABLE public.questions (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    category_id UUID NOT NULL,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    vote_score INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    answer_count INTEGER DEFAULT 0,
    is_answered BOOLEAN DEFAULT FALSE,
    accepted_answer_id UUID,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    CONSTRAINT fk_questions_category FOREIGN KEY (category_id) REFERENCES public.categories(id) ON DELETE CASCADE
);

-- Create answers table
CREATE TABLE public.answers (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    question_id UUID NOT NULL,
    content TEXT NOT NULL,
    vote_score INTEGER DEFAULT 0,
    is_accepted BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    CONSTRAINT fk_answers_question FOREIGN KEY (question_id) REFERENCES public.questions(id) ON DELETE CASCADE
);

-- Create question_tags junction table
CREATE TABLE public.question_tags (
    question_id UUID NOT NULL,
    tag_id UUID NOT NULL,
    PRIMARY KEY (question_id, tag_id),
    CONSTRAINT fk_question_tags_question FOREIGN KEY (question_id) REFERENCES public.questions(id) ON DELETE CASCADE,
    CONSTRAINT fk_question_tags_tag FOREIGN KEY (tag_id) REFERENCES public.tags(id) ON DELETE CASCADE
);

-- Create votes table
CREATE TABLE public.votes (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    target_id UUID NOT NULL,
    target_type TEXT NOT NULL CHECK (target_type IN ('question', 'answer')),
    vote_type TEXT NOT NULL CHECK (vote_type IN ('up', 'down')),
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE(user_id, target_id, target_type)
);

-- Create comments table
CREATE TABLE public.comments (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL,
    target_id UUID NOT NULL,
    target_type TEXT NOT NULL CHECK (target_type IN ('question', 'answer')),
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_profiles table for additional user info
CREATE TABLE public.user_profiles (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL UNIQUE,
    display_name TEXT,
    bio TEXT,
    avatar_url TEXT,
    reputation INTEGER DEFAULT 0,
    questions_asked INTEGER DEFAULT 0,
    answers_given INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.answers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.question_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for categories and tags (public read, admin write)
CREATE POLICY "Categories are viewable by everyone" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can manage categories" ON public.categories FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Tags are viewable by everyone" ON public.tags FOR SELECT USING (true);
CREATE POLICY "Only authenticated users can manage tags" ON public.tags FOR ALL USING (auth.role() = 'authenticated');

-- RLS Policies for questions
CREATE POLICY "Questions are viewable by everyone" ON public.questions FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create questions" ON public.questions FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own questions" ON public.questions FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own questions" ON public.questions FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for answers
CREATE POLICY "Answers are viewable by everyone" ON public.answers FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create answers" ON public.answers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own answers" ON public.answers FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own answers" ON public.answers FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for question_tags
CREATE POLICY "Question tags are viewable by everyone" ON public.question_tags FOR SELECT USING (true);
CREATE POLICY "Question authors can manage tags" ON public.question_tags FOR ALL USING (
    EXISTS (SELECT 1 FROM public.questions WHERE questions.id = question_tags.question_id AND questions.user_id = auth.uid())
);

-- RLS Policies for votes
CREATE POLICY "Votes are viewable by everyone" ON public.votes FOR SELECT USING (true);
CREATE POLICY "Authenticated users can vote" ON public.votes FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own votes" ON public.votes FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own votes" ON public.votes FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for comments
CREATE POLICY "Comments are viewable by everyone" ON public.comments FOR SELECT USING (true);
CREATE POLICY "Authenticated users can create comments" ON public.comments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own comments" ON public.comments FOR UPDATE USING (auth.uid() = user_id);
CREATE POLICY "Users can delete their own comments" ON public.comments FOR DELETE USING (auth.uid() = user_id);

-- RLS Policies for user_profiles
CREATE POLICY "User profiles are viewable by everyone" ON public.user_profiles FOR SELECT USING (true);
CREATE POLICY "Users can create their own profile" ON public.user_profiles FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own profile" ON public.user_profiles FOR UPDATE USING (auth.uid() = user_id);

-- Create updated_at triggers
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON public.categories FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_questions_updated_at BEFORE UPDATE ON public.questions FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_answers_updated_at BEFORE UPDATE ON public.answers FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_comments_updated_at BEFORE UPDATE ON public.comments FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON public.user_profiles FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX idx_questions_user_id ON public.questions(user_id);
CREATE INDEX idx_questions_category_id ON public.questions(category_id);
CREATE INDEX idx_questions_created_at ON public.questions(created_at DESC);
CREATE INDEX idx_questions_vote_score ON public.questions(vote_score DESC);
CREATE INDEX idx_questions_slug ON public.questions(slug);

CREATE INDEX idx_answers_question_id ON public.answers(question_id);
CREATE INDEX idx_answers_user_id ON public.answers(user_id);
CREATE INDEX idx_answers_created_at ON public.answers(created_at);
CREATE INDEX idx_answers_vote_score ON public.answers(vote_score DESC);

CREATE INDEX idx_votes_target ON public.votes(target_id, target_type);
CREATE INDEX idx_votes_user_id ON public.votes(user_id);

CREATE INDEX idx_comments_target ON public.comments(target_id, target_type);
CREATE INDEX idx_comments_user_id ON public.comments(user_id);

CREATE INDEX idx_user_profiles_user_id ON public.user_profiles(user_id);

-- Insert default categories
INSERT INTO public.categories (name, description, slug, color, icon) VALUES
('JavaScript', 'Questions about JavaScript programming language', 'javascript', '#f7df1e', 'Code'),
('React', 'Questions about React.js framework', 'react', '#61dafb', 'Component'),
('Node.js', 'Questions about Node.js runtime environment', 'nodejs', '#68a063', 'Server'),
('Python', 'Questions about Python programming language', 'python', '#3776ab', 'FileCode'),
('Web Development', 'General web development questions', 'web-dev', '#e34c26', 'Globe'),
('Mobile Development', 'Questions about mobile app development', 'mobile', '#a4c639', 'Smartphone'),
('Database', 'Questions about databases and SQL', 'database', '#336791', 'Database'),
('DevOps', 'Questions about deployment and operations', 'devops', '#326ce5', 'Settings');

-- Insert some popular tags
INSERT INTO public.tags (name, description) VALUES
('react', 'React.js library questions'),
('javascript', 'JavaScript language questions'),
('typescript', 'TypeScript language questions'),
('css', 'CSS styling questions'),
('html', 'HTML markup questions'),
('nodejs', 'Node.js runtime questions'),
('python', 'Python programming questions'),
('api', 'API development and integration'),
('database', 'Database design and queries'),
('authentication', 'User authentication and authorization'),
('deployment', 'Application deployment questions'),
('testing', 'Software testing questions'),
('performance', 'Performance optimization'),
('debugging', 'Debugging and troubleshooting');
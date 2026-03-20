export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      answers: {
        Row: {
          content: string
          created_at: string
          id: string
          is_accepted: boolean | null
          question_id: string
          updated_at: string
          user_id: string
          vote_score: number | null
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          is_accepted?: boolean | null
          question_id: string
          updated_at?: string
          user_id: string
          vote_score?: number | null
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          is_accepted?: boolean | null
          question_id?: string
          updated_at?: string
          user_id?: string
          vote_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_answers_question"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
        ]
      }
      articles: {
        Row: {
          author: string
          category: string
          content: string
          created_at: string | null
          date: string | null
          id: string
          image_url: string | null
          newsletter_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          author: string
          category: string
          content: string
          created_at?: string | null
          date?: string | null
          id?: string
          image_url?: string | null
          newsletter_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          author?: string
          category?: string
          content?: string
          created_at?: string | null
          date?: string | null
          id?: string
          image_url?: string | null
          newsletter_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "articles_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          created_at: string
          description: string | null
          icon: string | null
          id: string
          name: string
          question_count: number | null
          slug: string
          updated_at: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          question_count?: number | null
          slug: string
          updated_at?: string
        }
        Update: {
          color?: string | null
          created_at?: string
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          question_count?: number | null
          slug?: string
          updated_at?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          target_id: string
          target_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          target_id: string
          target_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          target_id?: string
          target_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          active: boolean | null
          address: string
          created_at: string | null
          email: string | null
          emergency_phone: string | null
          hospital_name: string
          id: string
          operating_hours: string | null
          phone: string
          services: string[] | null
          social_media: Json | null
          updated_at: string | null
          website: string | null
        }
        Insert: {
          active?: boolean | null
          address: string
          created_at?: string | null
          email?: string | null
          emergency_phone?: string | null
          hospital_name: string
          id?: string
          operating_hours?: string | null
          phone: string
          services?: string[] | null
          social_media?: Json | null
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          active?: boolean | null
          address?: string
          created_at?: string | null
          email?: string | null
          emergency_phone?: string | null
          hospital_name?: string
          id?: string
          operating_hours?: string | null
          phone?: string
          services?: string[] | null
          social_media?: Json | null
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      events: {
        Row: {
          created_at: string | null
          date: string | null
          description: string
          icon: string | null
          id: string
          location: string | null
          newsletter_id: string | null
          title: string
        }
        Insert: {
          created_at?: string | null
          date?: string | null
          description: string
          icon?: string | null
          id?: string
          location?: string | null
          newsletter_id?: string | null
          title: string
        }
        Update: {
          created_at?: string | null
          date?: string | null
          description?: string
          icon?: string | null
          id?: string
          location?: string | null
          newsletter_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "events_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
        ]
      }
      images: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          file_path: string
          file_size: number | null
          filename: string
          id: string
          mime_type: string | null
          original_name: string
          uploaded_by: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_path: string
          file_size?: number | null
          filename: string
          id?: string
          mime_type?: string | null
          original_name: string
          uploaded_by?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          file_path?: string
          file_size?: number | null
          filename?: string
          id?: string
          mime_type?: string | null
          original_name?: string
          uploaded_by?: string | null
        }
        Relationships: []
      }
      join_requests: {
        Row: {
          city: string
          created_at: string
          email: string
          id: string
          mobile: string
          name: string
          updated_at: string
        }
        Insert: {
          city: string
          created_at?: string
          email: string
          id?: string
          mobile: string
          name: string
          updated_at?: string
        }
        Update: {
          city?: string
          created_at?: string
          email?: string
          id?: string
          mobile?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      leadership: {
        Row: {
          active: boolean | null
          created_at: string | null
          email: string | null
          experience: string | null
          id: string
          image_url: string | null
          name: string
          order_index: number | null
          phone: string | null
          qualification: string | null
          role_description: string | null
          specialization: string | null
          title: string
          training: string | null
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          email?: string | null
          experience?: string | null
          id?: string
          image_url?: string | null
          name: string
          order_index?: number | null
          phone?: string | null
          qualification?: string | null
          role_description?: string | null
          specialization?: string | null
          title: string
          training?: string | null
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          email?: string | null
          experience?: string | null
          id?: string
          image_url?: string | null
          name?: string
          order_index?: number | null
          phone?: string | null
          qualification?: string | null
          role_description?: string | null
          specialization?: string | null
          title?: string
          training?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      newsletters: {
        Row: {
          created_at: string | null
          id: string
          issue: number
          metadata: Json | null
          published: boolean | null
          title: string
          updated_at: string | null
          volume: number
          week_end: string
          week_start: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          issue: number
          metadata?: Json | null
          published?: boolean | null
          title: string
          updated_at?: string | null
          volume: number
          week_end: string
          week_start: string
        }
        Update: {
          created_at?: string | null
          id?: string
          issue?: number
          metadata?: Json | null
          published?: boolean | null
          title?: string
          updated_at?: string | null
          volume?: number
          week_end?: string
          week_start?: string
        }
        Relationships: []
      }
      question_tags: {
        Row: {
          question_id: string
          tag_id: string
        }
        Insert: {
          question_id: string
          tag_id: string
        }
        Update: {
          question_id?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_question_tags_question"
            columns: ["question_id"]
            isOneToOne: false
            referencedRelation: "questions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_question_tags_tag"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
        ]
      }
      questions: {
        Row: {
          accepted_answer_id: string | null
          answer_count: number | null
          category_id: string
          content: string
          created_at: string
          id: string
          is_answered: boolean | null
          slug: string
          title: string
          updated_at: string
          user_id: string
          view_count: number | null
          vote_score: number | null
        }
        Insert: {
          accepted_answer_id?: string | null
          answer_count?: number | null
          category_id: string
          content: string
          created_at?: string
          id?: string
          is_answered?: boolean | null
          slug: string
          title: string
          updated_at?: string
          user_id: string
          view_count?: number | null
          vote_score?: number | null
        }
        Update: {
          accepted_answer_id?: string | null
          answer_count?: number | null
          category_id?: string
          content?: string
          created_at?: string
          id?: string
          is_answered?: boolean | null
          slug?: string
          title?: string
          updated_at?: string
          user_id?: string
          view_count?: number | null
          vote_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_questions_category"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
        ]
      }
      staff_highlights: {
        Row: {
          achievement_type: string | null
          created_at: string | null
          description: string
          id: string
          image_url: string | null
          name: string
          newsletter_id: string | null
          title: string
        }
        Insert: {
          achievement_type?: string | null
          created_at?: string | null
          description: string
          id?: string
          image_url?: string | null
          name: string
          newsletter_id?: string | null
          title: string
        }
        Update: {
          achievement_type?: string | null
          created_at?: string | null
          description?: string
          id?: string
          image_url?: string | null
          name?: string
          newsletter_id?: string | null
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "staff_highlights_newsletter_id_fkey"
            columns: ["newsletter_id"]
            isOneToOne: false
            referencedRelation: "newsletters"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          question_count: number | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          question_count?: number | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          question_count?: number | null
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          approved: boolean | null
          created_at: string | null
          id: string
          image_url: string | null
          patient_name: string
          rating: number | null
          review: string
          share_permission: boolean | null
          treatment: string
          updated_at: string | null
          video_url: string | null
        }
        Insert: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          patient_name: string
          rating?: number | null
          review: string
          share_permission?: boolean | null
          treatment: string
          updated_at?: string | null
          video_url?: string | null
        }
        Update: {
          approved?: boolean | null
          created_at?: string | null
          id?: string
          image_url?: string | null
          patient_name?: string
          rating?: number | null
          review?: string
          share_permission?: boolean | null
          treatment?: string
          updated_at?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      user_profiles: {
        Row: {
          answers_given: number | null
          avatar_url: string | null
          bio: string | null
          created_at: string
          display_name: string | null
          id: string
          questions_asked: number | null
          reputation: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          answers_given?: number | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          questions_asked?: number | null
          reputation?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          answers_given?: number | null
          avatar_url?: string | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          questions_asked?: number | null
          reputation?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      videos: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          duration: number | null
          file_path: string
          file_size: number | null
          filename: string
          id: string
          mime_type: string | null
          original_name: string
          thumbnail_url: string | null
          uploaded_by: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_path: string
          file_size?: number | null
          filename: string
          id?: string
          mime_type?: string | null
          original_name: string
          thumbnail_url?: string | null
          uploaded_by?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          duration?: number | null
          file_path?: string
          file_size?: number | null
          filename?: string
          id?: string
          mime_type?: string | null
          original_name?: string
          thumbnail_url?: string | null
          uploaded_by?: string | null
        }
        Relationships: []
      }
      votes: {
        Row: {
          created_at: string
          id: string
          target_id: string
          target_type: string
          user_id: string
          vote_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          target_id: string
          target_type: string
          user_id: string
          vote_type: string
        }
        Update: {
          created_at?: string
          id?: string
          target_id?: string
          target_type?: string
          user_id?: string
          vote_type?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

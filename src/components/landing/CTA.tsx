
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

const JoinSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  mobile: z.string().min(7, "Enter a valid phone").max(20),
  email: z.string().email("Enter a valid email"),
  city: z.string().min(2, "Enter your city"),
});

const CTA = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof JoinSchema>>({
    resolver: zodResolver(JoinSchema),
    defaultValues: { name: "", mobile: "", email: "", city: "" },
  });

  const onSubmit = async (values: z.infer<typeof JoinSchema>) => {
    console.log("Join form submitted", values);
    const payload = {
      name: values.name,
      mobile: values.mobile,
      email: values.email,
      city: values.city,
    };
    const { error } = await supabase.from("join_requests").insert(payload);
    if (error) {
      console.error("Failed to save join request:", error);
      toast({
        title: "Something went wrong",
        description: "We couldn't save your request. Please try again.",
        variant: "destructive",
      });
      return;
    }
    toast({ title: "Thanks for joining!", description: "We'll be in touch soon." });
    form.reset();
  };

  return (
    <section id="join" aria-label="Join" className="py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-brand p-8 md:p-12 shadow-glow">
          <div className="relative z-10 flex flex-col items-start md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground">Ready to catch the vibe?</h2>
              <p className="mt-2 text-primary-foreground/90">Jump in, say hi, and start building with friendly folks.</p>
            </div>

            <div className="w/full md:max-w-md" id="join-form">
              <div className="rounded-xl border bg-background p-4 md:p-6 shadow">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4" aria-label="Join form">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your full name" autoComplete="name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="mobile"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Mobile</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g., +1 555 123 4567"
                              type="tel"
                              inputMode="tel"
                              autoComplete="tel"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" type="email" autoComplete="email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem className="md:col-span-2">
                          <FormLabel>City</FormLabel>
                          <FormControl>
                            <Input placeholder="Your city" autoComplete="address-level2" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="md:col-span-2">
                      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? "Submitting..." : "Join now"}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

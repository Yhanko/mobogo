import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const NewsletterSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="contacto">
      {/* Background with slight tint */}
      <div className="absolute inset-0 bg-surface-elevated/30 z-0" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12 text-center border-border-subtle relative overflow-hidden">
          {/* Decorative glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-32 bg-primary/10 blur-[80px] pointer-events-none" />

          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border border-border-subtle mb-6 shadow-sm">
            <Mail className="w-8 h-8 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4 tracking-tight">
            Fique a par das novidades
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Subscreva a nossa newsletter e receba atualizações sobre novas
            funcionalidades, integrações e dicas de mobilidade urbana.
          </p>

          <form
            className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="O seu melhor e-mail"
              className="flex-1 h-14 px-5 rounded-xl bg-input-bg border border-border-subtle text-text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-secondary/50"
              required
            />
            <Button
              type="submit"
              className="h-14 px-8 bg-primary hover:bg-primary-hover text-black font-bold rounded-xl shadow-[0_0_15px_rgba(253,185,19,0.15)] hover:shadow-[0_0_25px_rgba(253,185,19,0.3)] transition-all"
            >
              Subscrever
            </Button>
          </form>
          <p className="text-xs text-text-secondary/70 mt-4">
            Não enviamos spam. Pode cancelar a subscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

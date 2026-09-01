import { motion } from 'framer-motion';
import {
  FileText,
  CheckCircle2,
  Zap,
  Download
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 md:pt-40 pb-16 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-background z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/10 rounded-full blur-[120px] z-0 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="flex flex-col space-y-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]">
              Pagamentos de <br className="hidden md:block" />
              Táxi, <br />
              <span className="text-primary text-glow-gold relative inline-block">
                Sem Complicações.
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-2 left-0 h-3 bg-primary/20 -z-10"
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-[600px] leading-relaxed">
              A plataforma MobGo moderniza o pagamento de táxis, interligando
              passageiros, motoristas e despachantes numa única carteira digital
              segura e rápida.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/login">
                <Button className="h-14 px-8 text-base bg-primary hover:bg-primary-hover text-black font-bold shadow-[0_0_20px_rgba(253,185,19,0.2)] hover:shadow-[0_0_30px_rgba(253,185,19,0.4)] transition-all flex items-center gap-2 w-full sm:w-auto">
                  Baixa o app
                  <Download className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/sobre">
                <Button
                  variant="outline"
                  className="h-14 px-8 text-base border-border-subtle hover:bg-surface-elevated text-text-primary w-full sm:w-auto"
                >
                  Saber Mais
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual Content / Abstract Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-[600px] mx-auto"
          >
            {/* Main Glass Panel */}
            <div className="glass-card rounded-2xl p-6 shadow-2xl relative z-10 border-border-subtle overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

              <div className="flex items-center justify-between mb-8 border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-text-primary font-bold text-sm">
                      Pagamento de Viagem
                    </h3>
                    <p className="text-text-secondary text-xs">
                      Processamento em Tempo Real
                    </p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-success-bg/20 border border-success-bg/50 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-success-text" />
                  <span className="text-xs font-bold text-success-text uppercase tracking-wider">
                    Concluído
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-xl bg-surface-elevated border border-border-subtle"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-surface border border-border-subtle flex items-center justify-center text-xs font-mono text-text-secondary">
                        0{i}
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 w-24 bg-border-subtle rounded-full" />
                        <div className="h-1.5 w-16 bg-border-subtle/50 rounded-full" />
                      </div>
                    </div>
                    <div className="h-2.5 w-16 bg-primary/40 rounded-full" />
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-border-subtle flex items-center justify-between">
                <div>
                  <p className="text-xs text-text-secondary mb-1">
                    Viagem Paga
                  </p>
                  <p className="text-2xl font-mono font-bold text-text-primary">
                    1.500.00 AOA
                  </p>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -right-6 -top-6 glass-card p-4 rounded-xl border border-border-subtle shadow-xl z-20"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold text-text-primary">
                  API Online
                </span>
              </div>
              <p className="text-[10px] text-text-secondary mt-1 font-mono">
                24ms response time
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute -left-8 -bottom-8 glass-card p-4 rounded-xl border border-border-subtle shadow-xl z-20"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-success-bg/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-success-text" />
                </div>
                <div>
                  <p className="text-xs font-bold text-text-primary">
                    Saldo Atualizado
                  </p>
                  <p className="text-[10px] text-text-secondary font-mono">
                    Última sync: Agora
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

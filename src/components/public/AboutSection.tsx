import { motion } from 'framer-motion';
import {
  Target,
  Zap,
  Building,
  UserCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

export const AboutSection = () => {
  return (
    <section
      id="sobre"
      className="py-24 bg-surface-elevated/20 border-y border-border-subtle relative overflow-hidden"
    >
      {/* Decorative blurred background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Parte 1: Quem Somos */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-elevated border border-border-subtle mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-text-secondary tracking-widest uppercase">
              Quem Somos
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary mb-6 tracking-tight">
            Mobilidade urbana de{' '}
            <span className="text-primary text-glow-gold">alta precisão.</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
            A MobGo nasceu da necessidade de modernizar e descomplicar o
            pagamento e gestão de táxis em Angola. Não somos apenas um
            aplicativo; somos a infraestrutura que conecta passageiros,
            motoristas e lotadores numa única rede unificada, segura e sem
            burocracias.
          </p>
        </div>

        {/* Parte 2: Solução para Clientes e Empresas */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              Uma solução, múltiplas escalas
            </h3>
            <p className="text-text-secondary mt-3">
              Como resolvemos os problemas da sua operação, quer seja motorista,
              lotador ou passageiro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Empresas / Corporativo */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-border-subtle relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full blur-2xl transition-all group-hover:bg-primary/20" />
              <div className="w-14 h-14 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center mb-6">
                <Building className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-4">
                Para Motoristas & Lotadores
              </h4>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Motoristas com alto volume de corridas sofrem com a gestão de
                trocos e segurança do dinheiro físico. A nossa carteira digital
                permite receber pagamentos instantâneos, partilhar receitas com
                lotadores e monitorar as suas rotas via GPS em tempo real.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-text shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Recebimentos automáticos via QR Code e Código de Viagem.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-text shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Gestão de parceiros (Lotadores) e partilha de lucros.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-text shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Monitoramento GPS e métricas de desempenho.
                  </span>
                </li>
              </ul>
            </div>

            {/* Particulares / PMEs */}
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-border-subtle relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="w-14 h-14 rounded-2xl bg-surface border border-border-subtle flex items-center justify-center mb-6">
                <UserCheck className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-xl font-bold text-text-primary mb-4">
                Para Passageiros
              </h4>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Passageiros precisam de apanhar o táxi no momento exato, sem
                complicações de dinheiro em espécie. A MobGo permite comprar
                bilhetes com antecedência, scanear QR Codes no táxi e ter um
                histórico completo das suas viagens na palma da mão.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Pagamentos digitais imediatos e sem trocos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Histórico de viagens e recibos eletrónicos.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-text-secondary">
                    Transferência de bilhetes e recargas da Wallet.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Parte 3: Processo de Aquisição */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
              Como aceder ao serviço?
            </h3>
            <p className="text-text-secondary mt-3">
              Um processo de transição ("onboarding") feito para ser simples e
              rápido.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-border-subtle" />

            {/* Step 1 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-surface border-[4px] border-background flex items-center justify-center mb-6 shadow-xl">
                <span className="text-3xl font-black text-primary">1</span>
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                Registo Simples
              </h4>
              <p className="text-sm text-text-secondary">
                Crie a sua conta de passageiro, motorista ou lotador usando
                apenas o seu número de telefone e dados básicos.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-surface border-[4px] border-background flex items-center justify-center mb-6 shadow-xl">
                <span className="text-3xl font-black text-primary">2</span>
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                Carregamento e Configuração
              </h4>
              <p className="text-sm text-text-secondary">
                Carregue a sua Wallet (carteira digital). Se for motorista,
                adicione os dados da viatura e ligue-se aos seus parceiros
                lotadores.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative text-center z-10 flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-primary border-[4px] border-background flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(253,185,19,0.3)]">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <h4 className="text-lg font-bold text-text-primary mb-2">
                Viagens Imediatas
              </h4>
              <p className="text-sm text-text-secondary">
                Está pronto para rodar. Compre bilhetes, escaneie no táxi e
                viaje com pagamentos validados em tempo real, sem dinheiro em
                mãos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

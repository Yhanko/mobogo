import { Link } from 'react-router-dom';
import {
  Car,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export const FooterPublic = () => {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith('/#')) {
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        window.history.pushState({}, '', href);
      }
    }
  };

  return (
    <footer className="bg-surface border-t border-border-subtle pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <Car className="w-6 h-6 text-primary" />
              <span className="font-bold text-lg text-text-primary tracking-tight">
                Mob<span className="text-primary font-black">Go</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Plataforma tecnológica líder para mobilidade urbana, pagamentos
              digitais e gestão integrada de táxis em Angola.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-surface-elevated border border-border-subtle flex items-center justify-center text-text-secondary hover:text-primary hover:border-primary transition-all"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              A Plataforma
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#sobre"
                  onClick={(e) => handleNavClick(e, '/#sobre')}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="/#clientes"
                  onClick={(e) => handleNavClick(e, '/#clientes')}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Parceiros & Frota
                </a>
              </li>
              <li>
                <a
                  href="/#funcionalidades"
                  onClick={(e) => handleNavClick(e, '/#funcionalidades')}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="/#precos"
                  onClick={(e) => handleNavClick(e, '/#precos')}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Planos & Preços
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Recursos
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/docs"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Documentação e Guia
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  API Reference
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Termos de Serviço
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-text-primary uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">
                  Edifício Cipher, Talatona
                  <br />
                  Luanda, Angola
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-text-secondary">
                  +244 900 000 000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-sm text-text-secondary">
                  geral@mobgo.co.ao
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-secondary">
            &copy; {new Date().getFullYear()} MobGo Angola. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

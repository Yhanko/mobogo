import {
  LayoutDashboard,
  FileText,
  GitBranch,
  Key,
  User,
  Search,
  ShieldCheck,
  BookOpen,
} from 'lucide-react';

export const navItems = [
  { to: '/tenant/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/tenant/sandbox', icon: FileText, label: 'Sandbox' },
  { to: '/tenant/faturas', icon: FileText, label: 'Faturas' },
  { to: '/tenant/series', icon: GitBranch, label: 'Séries' },
  { to: '/tenant/chaves', icon: Key, label: 'NIF & Chave' },
  { to: '/tenant/consultar', icon: Search, label: 'Consultar Fatura' },
  { to: '/tenant/listar-faturas', icon: FileText, label: 'Listar Faturas' },
  { to: '/tenant/validar', icon: ShieldCheck, label: 'Validar Documento' },
  { to: '/tenant/docs', icon: BookOpen, label: 'Documentação' },
  { to: '/tenant/perfil', icon: User, label: 'Perfil' },
];

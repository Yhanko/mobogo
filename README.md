# Mobogo Admin Panel (Frontend)

O **Mobogo Admin Panel** é o painel de administração e backoffice (Backoffice Web) do sistema integrado de mobilidade urbana e transportes públicos de Angola — **Mobogo**. Através deste painel, administradores conseguem gerir a frota, os passageiros, agentes no terreno, despachantes (lotadores), assim como monitorizar toda a parte financeira (carteiras digitais e bilhética).

---

## 🚌 O Negócio (Domínio)

A aplicação suporta os fluxos críticos de transporte de passageiros através de bilhética digital. Os principais domínios geridos no painel incluem:

1. **Gestão de Identidade (IAM):** Controlo e gestão de perfis para:
   - **Passageiros:** Utilizadores finais do transporte.
   - **Motoristas/Taxistas:** Operadores dos veículos.
   - **Agentes:** Pessoal autorizado a emitir bilhetes no terreno.
   - **Lotadores:** Despachantes e organizadores de paragens.
2. **Carteira Digital (Wallet):** Gestão de saldos virtuais associados a cada passageiro e motorista. Carregamentos (Top-ups), levantamentos e histórico global de transações (ex: integração com Multicaixa Express).
3. **Bilhética (Tickets):** Emissão de bilhetes e passes digitais com QR Code dinâmico, dedução atómica na carteira do utilizador aquando da leitura do bilhete no veículo, e cancelamentos.
4. **Viagens e Localização (Rides & Location):** Acompanhamento do estado das viagens em tempo real.

---

## 🚀 Tecnologias e Stack

Este projeto foi construído com as melhores e mais modernas práticas do ecossistema React, focado em performance, tipagem forte e interfaces bonitas:

- **Core:** [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler:** [Vite](https://vitejs.dev/) (Rápido e otimizado)
- **Routing:** [React Router DOM](https://reactrouter.com/) (Navegação SPA)
- **Data Fetching & Cache:** [TanStack React Query](https://tanstack.com/query/v5) (Gestão de estados assíncronos e cache da API)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (Estilização utilitária)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/) (Componentes acessíveis construídos com [Radix UI](https://www.radix-ui.com/))
- **Formulários & Validação:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Gestão de Estado Global:** [Zustand](https://zustand-demo.pmnd.rs/)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Data & Tabela:** `@tanstack/react-table` (Tabelas de dados ricas em funcionalidades)

---

## 📁 Arquitetura e Organização de Pastas

A arquitetura do frontend baseia-se numa separação lógica por _features/módulos_, para escalar de forma limpa:

```text
src/
├── app/                  # (Pages/Routes) Lógica de páginas agrupada por funcionalidade
│   ├── admin/
│   │   ├── dashboard/    # Visão geral e métricas
│   │   ├── iam/          # Utilizadores, Motoristas, Agentes
│   │   ├── lotadores/    # Gestão de Lotadores
│   │   ├── rides/        # Histórico de viagens
│   │   ├── tickets/      # Gestão de bilhetes digitais
│   │   └── wallet/       # Carregamentos e transações financeiras
│   └── auth/             # Login, Recuperação de Senha
│
├── components/           # Componentes UI reutilizáveis (Dumb Components)
│   ├── layouts/          # Estruturas base de página (AdminLayout, Sidebar)
│   └── ui/               # Componentes base (Botões, Inputs, Dialogs, Skeletons - shadcn)
│
├── hooks/                # Custom React Hooks
│   ├── useApi.ts         # Wrapper do TanStack Query p/ integração com API
│   └── use-toast.ts      # Hook de notificações globais
│
├── lib/                  # Utilitários, configurações e constantes globais
│   ├── api.ts            # Configuração base do Axios (Interceptors, Tokens)
│   └── utils.ts          # Helpers de CSS (ex: cn wrapper do clsx/tailwind-merge)
│
└── main.tsx              # Ponto de entrada (Entrypoint) da aplicação React
```

---

## 🛠️ Como Iniciar (Setup Local)

### 1. Pré-requisitos

- [Node.js](https://nodejs.org/en/) (Versão 18+)
- Gestor de pacotes (`npm`, `yarn` ou `pnpm`)

### 2. Instalar Dependências

Na raiz do diretório `mobogo-admin-frontend`, execute:

```bash
npm install
```

### 3. Variáveis de Ambiente

Crie um ficheiro `.env` na raiz do projeto e configure o endpoint da API:

```env
VITE_API_URL=http://localhost:3000/api
```

### 4. Executar Servidor de Desenvolvimento

```bash
npm run dev
```

A aplicação ficará disponível em `http://localhost:3333` (ou na porta definida pelo Vite).

---

## 📐 Padrões Adotados (Guidelines)

1. **Carregamento de Dados (Skeletons):**
   - Utilizamos o componente `TableSkeleton` durante o estado `isLoading` nas chamadas via _React Query_. Isto melhora massivamente a experiência do utilizador ao evitar ecrãs em branco ou _layout shifts_.
2. **Separação de Responsabilidades:**
   - As Páginas (`src/app`) são responsáveis por orquestrar a lógica (buscar dados, lidar com estados de formulário).
   - Componentes UI (`src/components`) não devem conhecer o contexto de negócio. Devem receber propriedades e emitir eventos (callbacks).
3. **Formatação e Validação:**
   - Todos os formulários que interagem com a API usam a combinação `React Hook Form` + esquema `Zod` de modo a barrar erros de input antes sequer de tocarem na rede.
4. **Layout Colapsável:**
   - A _Sidebar_ suporta um modo compacto para expandir o ecrã útil ao analisar as extensas tabelas de dados de transações e bilhética.

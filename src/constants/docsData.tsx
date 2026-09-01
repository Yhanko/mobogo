import {
  BookOpen,
  LayoutDashboard,
  Car,
  Users,
  Wallet,
  MapPin,
  ShieldCheck,
} from 'lucide-react';

export const docsData = [
  {
    slug: 'introducao',
    title: 'Introdução ao MobGo',
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Bem-vindo ao Painel de Gestão MobGo
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          O MobGo é a plataforma tecnológica líder em Angola dedicada à
          modernização da mobilidade urbana. Este painel foi desenhado para
          oferecer um controlo total sobre motoristas, lotadores, passageiros e
          transações financeiras da rede de táxis.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          O que pode fazer no Painel de Administração?
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-text-secondary mt-4">
          <li>
            <strong className="text-text-primary">
              Gestão de Utilizadores:
            </strong>{' '}
            Adicionar, bloquear e verificar perfis de motoristas, lotadores e
            passageiros.
          </li>
          <li>
            <strong className="text-text-primary">Controlo Financeiro:</strong>{' '}
            Acompanhar carregamentos, pagamentos de viagens e transferências na
            Wallet global.
          </li>
          <li>
            <strong className="text-text-primary">Gestão de Frota:</strong>{' '}
            Monitorizar as viagens em tempo real e a localização GPS das
            viaturas registadas.
          </li>
          <li>
            <strong className="text-text-primary">Auditoria e Logs:</strong>{' '}
            Acesso ao registo imutável de todas as ações de suporte para
            garantir a máxima segurança.
          </li>
        </ul>

        <div className="p-4 rounded-xl bg-surface-elevated border border-border-subtle mt-8">
          <div className="flex gap-3">
            <ShieldCheck className="w-6 h-6 text-primary shrink-0" />
            <div>
              <h4 className="font-bold text-text-primary text-sm">
                Segurança de Dados e Transações
              </h4>
              <p className="text-sm text-text-secondary mt-1">
                Todas as viagens e movimentos de dinheiro são protegidos por
                criptografia ponta a ponta e estão em conformidade com as regras
                de pagamentos eletrónicos.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    slug: 'dashboard',
    title: 'Métricas e Estatísticas',
    icon: LayoutDashboard,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          O seu Dashboard
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          O Dashboard é a central de comando da operação da MobGo. Ele fornece
          uma visão panorâmica em tempo real do ecossistema de táxis, desde o
          volume de viagens ao saldo transacionado.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Indicadores Chave
        </h3>
        <p className="text-text-secondary mt-2">
          No topo do dashboard, encontra os cartões de performance diária:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 rounded-lg bg-surface border border-border-subtle">
            <h5 className="font-bold text-sm text-text-primary">
              Viagens Concluídas
            </h5>
            <p className="text-xs text-text-secondary mt-1">
              O número total de corridas pagas com sucesso através da
              plataforma.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border-subtle">
            <h5 className="font-bold text-sm text-text-primary">
              Volume Transacionado
            </h5>
            <p className="text-xs text-text-secondary mt-1">
              O montante global movimentado pelas carteiras digitais no dia.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-surface border border-border-subtle">
            <h5 className="font-bold text-sm text-text-primary">
              Motoristas Ativos
            </h5>
            <p className="text-xs text-text-secondary mt-1">
              Quantidade de taxistas atualmente online e a aceitar passageiros.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Gráficos de Tendência
        </h3>
        <p className="text-text-secondary mt-2">
          Use os gráficos de linha e barras para analisar a evolução semanal do
          cadastro de novos utilizadores e os horários de pico nas viagens,
          ajudando a focar as equipas de suporte e marketing.
        </p>
      </div>
    ),
  },
  {
    slug: 'viagens',
    title: 'Gestão de Viagens e Tickets',
    icon: Car,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Gestão de Viagens e Tickets
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          A aba de Tickets (Bilhetes de Viagem) permite monitorar as transações
          individuais que ocorrem entre passageiros e motoristas.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Listagem de Bilhetes
        </h3>
        <p className="text-text-secondary mt-2">
          Pode procurar bilhetes pelo código, motorista ou passageiro. O estado
          do bilhete pode ser:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mt-4">
          <li>
            <strong>PENDENTE:</strong> O passageiro comprou mas ainda não
            escaneou no táxi.
          </li>
          <li>
            <strong>USADO:</strong> A viagem foi efetivada e o motorista recebeu
            o pagamento.
          </li>
          <li>
            <strong>CANCELADO:</strong> O utilizador anulou o bilhete e o valor
            foi devolvido.
          </li>
          <li>
            <strong>EXPIRADO:</strong> Prazo de validade do bilhete foi
            ultrapassado.
          </li>
        </ul>

        <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 mt-6">
          <h4 className="font-bold text-primary text-sm mb-1">
            Resolução de Disputas
          </h4>
          <p className="text-sm text-text-secondary">
            Em caso de queixas, o administrador tem a capacidade de consultar o
            percurso associado a um bilhete e acionar o reembolso manual (se
            aprovado pela equipa).
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: 'utilizadores',
    title: 'Controlo de Utilizadores',
    icon: Users,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Controlo de Utilizadores
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          Neste painel fará a gestão diária de todos os atores da rede MobGo:
          Passageiros, Motoristas, Lotadores, e outros Agentes Administrativos.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Ações Permitidas
        </h3>
        <div className="space-y-4 text-text-secondary mt-4">
          <p>
            <strong>Edição de Perfis:</strong> Pode atualizar os dados de
            contacto, e regularizar documentos dos motoristas.
          </p>
          <p>
            <strong>Bloqueio de Contas:</strong> Perante comportamento
            fraudulento, a conta pode ser desativada com um motivo documentado,
            impedindo o acesso à App.
          </p>
          <p>
            <strong>Parcerias de Lotador:</strong> Visualize e faça a gestão dos
            motoristas que estão associados a um dado Lotador.
          </p>
        </div>
      </div>
    ),
  },
  {
    slug: 'wallet',
    title: 'Wallet e Finanças',
    icon: Wallet,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Wallet e Finanças
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          A Wallet (Carteira) é o coração financeiro da MobGo. Esta página exibe
          o saldo consolidado de um utilizador e o seu extrato de movimentos.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Tipos de Transação
        </h3>
        <p className="text-text-secondary mt-2">
          O sistema regista transações financeiras de forma estrita para evitar
          divergências. Estas incluem:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary mt-4">
          <li>
            <strong>TOPUP (Carregamento):</strong> Dinheiro que entrou via
            banco, multicaixa ou agente.
          </li>
          <li>
            <strong>PAYMENT (Pagamento):</strong> Débito por compra de bilhete
            de táxi.
          </li>
          <li>
            <strong>TRANSFER_IN / OUT:</strong> Transferência de fundos entre
            contas MobGo.
          </li>
          <li>
            <strong>WITHDRAWAL (Levantamento):</strong> Dinheiro retirado do
            sistema para conta bancária do Motorista.
          </li>
        </ul>
      </div>
    ),
  },
  {
    slug: 'localizacao',
    title: 'Monitoramento GPS',
    icon: MapPin,
    content: (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-text-primary mb-2">
          Monitoramento GPS
        </h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          A segurança da frota e dos passageiros é uma prioridade. O módulo de
          localização recolhe as coordenadas em tempo real das viaturas em
          serviço.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Mapa em Tempo Real
        </h3>
        <p className="text-text-secondary mt-2">
          Permite visualizar todos os motoristas ativos na cidade. É possível
          selecionar um motorista específico para ver a velocidade atual e as
          últimas paragens.
        </p>

        <h3 className="text-xl font-bold text-text-primary mt-8">
          Histórico de Rota
        </h3>
        <p className="text-text-secondary mt-2">
          Selecione uma data e um motorista para reproduzir a rota efetuada. É
          útil para resolver queixas de desvio de rota ou para análise de
          tráfego.
        </p>
      </div>
    ),
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen bg-ekd-black text-ekd-pearl px-8 py-32 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-ekd-pink mb-6">
        Sobre o E-Marketing - (EdenKingDom Marketing)
      </h1>

      <p className="mb-6">
        O E-Marketing é uma divisão oficial da EdenKingDom Corporation,
        criada para gerar crescimento real, mensurável e sustentável das
        marcas e serviços da corporação.
      </p>

      <h2 className="text-2xl font-semibold text-ekd-yellow mt-12 mb-4">
        O que NÃO somos
      </h2>

      <ul className="list-disc ml-6 space-y-3">
        <li>Não somos plataformas de tarefas artificiais</li>
        <li>Não prometemos retorno financeiro fixo</li>
        <li>Não pagamos por cliques ou existência</li>
        <li>Não operamos modelos de redistribuição fechada</li>
      </ul>

      <h2 className="text-2xl font-semibold text-ekd-ocean mt-12 mb-4">
        O que somos
      </h2>

      <ul className="list-disc ml-6 space-y-3">
        <li>Marketing institucional real</li>
        <li>Métricas reais: views, retenção, impacto</li>
        <li>Liderança baseada em score e mérito</li>
        <li>Economia de marca, não pirâmide</li>
      </ul>
    </section>
  );
}

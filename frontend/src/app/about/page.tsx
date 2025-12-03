function About() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <section className="max-w-3xl w-full bg-white rounded-2xl shadow-md p-8 space-y-6">
        <header className="space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">
            Sobre a aplicação 🎓
          </h1>
          <p className="text-gray-600">
            Essa aplicação foi criada para facilitar a visualização e o gerenciamento
            de produtos no carrinho, oferecendo uma experiência simples, rápida e intuitiva.
          </p>
        </header>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            O que você pode fazer aqui
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Visualizar a lista de produtos disponíveis</li>
            <li>Adicionar e remover itens do carrinho</li>
            <li>Acompanhar rapidamente a quantidade de cada produto</li>
            <li>Navegar para a página de detalhes de cada item</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Tecnologias utilizadas
          </h2>
          <p className="text-gray-700">
            A aplicação foi desenvolvida utilizando:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Next.js e React</li>
            <li>TypeScript</li>
            <li>Context API para gerenciamento do carrinho</li>
            <li>Tailwind CSS e Flowbite para o layout e componentes</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-900">
            Objetivo
          </h2>
          <p className="text-gray-700">
            O objetivo principal é servir como base para estudos e evolução
            em desenvolvimento front-end, boas práticas de arquitetura e
            organização de estado em aplicações React/Next.
          </p>
        </section>

        <footer className="pt-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span>Feito com 💻 e ☕</span>
          <span>Versão 1.0.0</span>
        </footer>
      </section>
    </main>
  );
}

export default About;

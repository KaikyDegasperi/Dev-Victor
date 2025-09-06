import { ArrowRight, Rocket, Sparkles } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-black/5 bg-white/70 backdrop-blur">
        <nav className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex size-8 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600" />
            <span className="font-semibold tracking-tight">Victor Degasperi</span>
          </a>
          <div className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#sobre" className="hover:opacity-80">Sobre</a>
            <a href="#contato" className="hover:opacity-80">Contato</a>
            <a href="#cta" className="px-4 py-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-500 inline-flex items-center gap-2">
              Começar <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full">
              <Sparkles className="w-4 h-4" /> Página de apresentação
            </p>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight">
              Automação, cientista de dados e Desenvolvedor fullstack <span className="text-indigo-600">sem complicação</span>.
            </h1>
            <p className="mt-4 text-gray-600">
              Eu sou o Victor Kaíky Oliveira Degasperi. Construo soluções simples e escaláveis:
              bots de automação, APIs e integrações com foco em resultados. Possuo experiência com análise de dados e desenvolvimento fullstack em diferentes stacks.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 inline-flex items-center gap-2">
                Fale comigo <ArrowRight className="w-4 h-4" />
              </a>
              <a href="https://github.com/KaikyDegasperi" className="px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50 inline-flex items-center gap-2">
                Ver projetos
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
              <Rocket className="w-16 h-16 text-indigo-600" />
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-16">
        <div className="rounded-2xl border border-gray-200 p-6">
          <h2 className="text-2xl font-bold">Sobre</h2>
          <p className="mt-3 text-gray-700">
            Desenvolvedor back-end com foco em automação de portais, integração com bancos de dados
            e construção de APIs. Trabalho com Python, Java e Laravel/Livewire, sempre priorizando
            robustez, logs claros e reprodutibilidade (Docker/CI).
          </p>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mx-auto max-w-6xl px-4 py-20">
        <div className="rounded-3xl border border-gray-200 p-8 md:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Vamos trabalhar juntos?</h2>
          <p className="mt-2 text-gray-600">Me chame e conte o que você precisa.</p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="mailto:victorkaiky.degasperi@gmail.com" className="px-5 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500">
              Enviar e-mail
            </a>
            <a href="https://www.linkedin.com/in/victor-degasperi-3ab903206/" target="_blank" className="px-5 py-3 rounded-xl border border-gray-200 hover:bg-gray-50">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="border-t border-gray-200 py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Victor Degasperi — GitHub Pages
      </footer>
    </div>
  );
}

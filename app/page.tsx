export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-white flex items-center justify-center">
              <span className="text-black font-bold text-sm">SL</span>
            </div>
            <span className="text-xl font-bold tracking-tight">Saka Labs</span>
          </div>
          <a href="mailto:hello@sakalabs.co" className="text-sm text-white/60 hover:text-white transition-colors">
            hello@sakalabs.co
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">Laboratorio experimental</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          Construimos productos con
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            IA y Blockchain
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
          Saka Labs es un laboratorio donde experimentamos con Inteligencia Artificial
          y tecnologia Blockchain para crear productos que resuelven problemas reales
          en industrias tradicionales.
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-8">Productos</p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Glorita */}
          <a
            href="https://glorita.co"
            target="_blank"
            rel="noopener"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold">G</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Glorita</h3>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">IA</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Plataforma de administracion residencial potenciada con IA.
              Cobro de cartera por WhatsApp, actas de reunion automaticas y comunicaciones inteligentes
              para administradores de conjuntos residenciales en Colombia.
            </p>
            <p className="mt-4 text-sm text-white/30 group-hover:text-white/50 transition-colors">
              glorita.co →
            </p>
          </a>

          {/* Planea.ai */}
          <a
            href="https://planea.ai"
            target="_blank"
            rel="noopener"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold">P</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Planea.ai</h3>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">IA</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">
              Plataforma de planificacion y gestion de eventos con IA.
              Un equipo completo de agentes de IA que planifica, organiza y ejecuta
              eventos de principio a fin.
            </p>
            <p className="mt-4 text-sm text-white/30 group-hover:text-white/50 transition-colors">
              planea.ai →
            </p>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-6">Sobre nosotros</p>
          <div className="max-w-2xl">
            <p className="text-white/60 leading-relaxed">
              Saka Labs nace de la curiosidad por explorar como la Inteligencia Artificial
              y el Blockchain pueden transformar industrias que llevan decadas haciendo las cosas
              de la misma manera. No somos una agencia ni una consultora — somos un laboratorio
              que construye, prueba y lanza productos propios.
            </p>
            <p className="mt-4 text-white/60 leading-relaxed">
              Cada producto que creamos resuelve un problema especifico y real.
              Desde la administracion de conjuntos residenciales hasta la planificacion de eventos,
              buscamos oportunidades donde la tecnologia puede hacer una diferencia tangible.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-white flex items-center justify-center">
              <span className="text-black font-bold text-xs">SL</span>
            </div>
            <span className="text-sm text-white/40">Saka Labs</span>
          </div>
          <p className="text-sm text-white/30">Colombia</p>
        </div>
      </footer>
    </div>
  );
}

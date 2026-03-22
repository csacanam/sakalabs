'use client'

import { useEffect, useState } from 'react'

const t = {
  es: {
    subtitle: 'Laboratorio experimental',
    heroTitle1: 'Construimos productos con',
    heroTitle2: 'IA y Blockchain',
    heroDesc: 'Saka Labs es un laboratorio donde experimentamos con tecnologias de Inteligencia Artificial y Blockchain para crear productos que resuelven problemas reales en industrias tradicionales.',
    products: 'Productos',
    hashproofDesc: 'Plataforma de verificacion y certificacion de documentos en blockchain. Prueba de existencia, integridad y autenticidad para archivos digitales.',
    gloritaDesc: 'Plataforma de administracion residencial potenciada con IA. Cobro de cartera por WhatsApp, actas de reunion automaticas y comunicaciones inteligentes para administradores de conjuntos residenciales en Colombia.',
    about: 'Sobre nosotros',
    aboutP1: 'Saka Labs nace de la curiosidad por explorar como la Inteligencia Artificial y el Blockchain pueden transformar industrias que llevan decadas haciendo las cosas de la misma manera.',
    aboutP2: 'No somos una agencia ni una consultora. Somos un laboratorio que construye y lanza sus propios productos.',
  },
  en: {
    subtitle: 'Experimental lab',
    heroTitle1: 'We build products with',
    heroTitle2: 'AI and Blockchain',
    heroDesc: 'Saka Labs is a laboratory where we experiment with AI and Blockchain technologies to create products that solve real problems in traditional industries.',
    products: 'Products',
    hashproofDesc: 'Blockchain-based document verification and certification platform. Proof of existence, integrity, and authenticity for digital files.',
    gloritaDesc: 'AI-powered residential management platform. WhatsApp debt collection, automated meeting minutes, and smart communications for residential complex administrators in Colombia.',
    about: 'About us',
    aboutP1: 'Saka Labs was born from the curiosity to explore how Artificial Intelligence and Blockchain can transform industries that have been doing things the same way for decades.',
    aboutP2: 'We are not an agency or a consultancy. We are a lab that builds and launches our own products.',
  },
}

type Lang = 'es' | 'en'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    setLang(browserLang.startsWith('es') ? 'es' : 'en')
  }, [])

  const txt = t[lang]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-5">
          <img src="/logo-sakalabs.png" alt="Saka Labs" className="h-10" />
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="text-xs text-white/40 hover:text-white transition-colors border border-white/10 rounded px-2 py-1"
            >
              {lang === 'es' ? 'EN' : 'ES'}
            </button>
            <a href="mailto:hi@sakalabs.io" className="text-sm text-white/60 hover:text-white transition-colors hidden sm:block">
              hi@sakalabs.io
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-4">{txt.subtitle}</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
          {txt.heroTitle1}
          <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {txt.heroTitle2}
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-white/60 leading-relaxed">
          {txt.heroDesc}
        </p>
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-8">{txt.products}</p>

        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="https://hashproof.dev"
            target="_blank"
            rel="noopener"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-lg">HashProof</h3>
              <div className="flex gap-2 mt-1">
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Blockchain</span>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Global</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{txt.hashproofDesc}</p>
            <p className="mt-4 text-sm text-white/30 group-hover:text-white/50 transition-colors">
              hashproof.dev →
            </p>
          </a>

          <a
            href="https://glorita.co"
            target="_blank"
            rel="noopener"
            className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-lg">Glorita</h3>
              <div className="flex gap-2 mt-1">
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">AI</span>
                <span className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">Colombia</span>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed">{txt.gloritaDesc}</p>
            <p className="mt-4 text-sm text-white/30 group-hover:text-white/50 transition-colors">
              glorita.co →
            </p>
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-6">{txt.about}</p>
          <div className="max-w-2xl">
            <p className="text-white/60 leading-relaxed">{txt.aboutP1}</p>
            <p className="mt-4 text-white/60 leading-relaxed">{txt.aboutP2}</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-5xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <img src="/logo-sakalabs.png" alt="Saka Labs" className="h-8" />
          <a href="mailto:hi@sakalabs.io" className="text-sm text-white/30 hover:text-white/50 transition-colors">hi@sakalabs.io</a>
        </div>
      </footer>
    </div>
  );
}

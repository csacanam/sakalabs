'use client'

import { useEffect, useState } from 'react'

const t = {
  es: {
    subtitle: 'Laboratorio de experimentación',
    heroTitle1: 'Exploramos nuevas tecnologías',
    heroTitle2: 'construyendo productos reales',
    heroDesc: 'Saka Labs es donde IA y blockchain dejan de ser buzzwords y se convierten en productos que funcionan. Construimos porque nos apasiona crear. Revenue público porque creemos en la transparencia. Ojalá esto te inspire a construir también.',
    products: 'Productos',
    voultiDesc: 'Pasarela de pagos crypto para comercios. Acepta USDC, USDT y stablecoins en 5 redes. Dos formas de pagar: wallet o dirección de depósito. Auto-custodia, 1% de comisión.',
    hashproofDesc: 'API de credenciales verificables en blockchain. Emite certificados con una sola llamada. $0.10 por credencial, sin suscripciones. Para desarrolladores, plataformas y agentes de IA.',
    loteroDesc: 'Casino verificablemente justo para agentes de IA. Tragamonedas on-chain en Base con Chainlink VRF. 1 USDC por giro, gana hasta 30 USDC. Sin gas via x402.',
    revenueLabel: 'Revenue',
    about: 'Sobre nosotros',
    aboutP1: 'Estamos en la era dorada para builders. Las herramientas nunca fueron tan poderosas ni tan accesibles. Nosotros construimos porque no sabemos hacer otra cosa — es lo que nos mueve.',
    aboutP2: 'Cada producto es un experimento: una tecnología nueva, un caso de uso diferente, un problema que nos intriga. Si algo de lo que hacemos te inspira a construir, entonces estamos haciendo bien nuestro trabajo.',
  },
  en: {
    subtitle: 'Experimentation lab',
    heroTitle1: 'We explore new technologies',
    heroTitle2: 'by building real products',
    heroDesc: 'Saka Labs is where AI and blockchain stop being buzzwords and become products that work. We build because we love creating. Public revenue because we believe in transparency. We hope this inspires you to build too.',
    products: 'Products',
    voultiDesc: 'Crypto payment gateway for merchants. Accept USDC, USDT and stablecoins on 5 networks. Two ways to pay: wallet or deposit address. Self-custody, 1% fee.',
    hashproofDesc: 'Verifiable credentials API on blockchain. Issue certificates with a single call. $0.10 per credential, no subscriptions. For developers, platforms, and AI agents.',
    loteroDesc: 'Provably fair casino for AI agents. On-chain slot machine on Base with Chainlink VRF. 1 USDC per spin, win up to 30 USDC. Gasless via x402.',
    revenueLabel: 'Revenue',
    about: 'About us',
    aboutP1: 'We\'re living in the golden age for builders. Tools have never been this powerful or this accessible. We build because we don\'t know how to do anything else — it\'s what drives us.',
    aboutP2: 'Each product is an experiment: a new technology, a different use case, a problem that intrigues us. If anything we do inspires you to build, then we\'re doing our job right.',
  },
}

type Lang = 'es' | 'en'

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')
  const [revenues, setRevenues] = useState<Record<string, number>>({})

  useEffect(() => {
    const browserLang = navigator.language.toLowerCase()
    setLang(browserLang.startsWith('es') ? 'es' : 'en')
  }, [])

  useEffect(() => {
    // Fetch all product revenues
    fetch('https://api.hashproof.dev/stats')
      .then(r => r.json())
      .then(d => setRevenues(prev => ({ ...prev, hashproof: (d.total_credentials || 0) * 0.1 })))
      .catch(() => {})

    fetch('https://api.lotero.xyz/stats')
      .then(r => r.json())
      .then(d => setRevenues(prev => ({ ...prev, lotero: d.revenue?.devFeesUSDC || 0 })))
      .catch(() => {})

    fetch('https://api.voulti.com/stats')
      .then(r => r.json())
      .then(d => setRevenues(prev => ({ ...prev, voulti: parseFloat(d.revenue?.totalUsd || '0') })))
      .catch(() => {})
  }, [])

  const txt = t[lang]

  // Products sorted by revenue (highest first)
  const products = [
    {
      name: 'Voulti',
      href: 'https://voulti.com',
      domain: 'voulti.com',
      tags: ['Blockchain', 'Payments', 'Multi-chain'],
      desc: txt.voultiDesc,
      revenue: revenues.voulti,
    },
    {
      name: 'HashProof',
      href: 'https://hashproof.dev',
      domain: 'hashproof.dev',
      tags: ['Blockchain', 'AI Agents', 'API'],
      desc: txt.hashproofDesc,
      revenue: revenues.hashproof,
    },
    {
      name: 'Lotero',
      href: 'https://lotero.xyz',
      domain: 'lotero.xyz',
      tags: ['Blockchain', 'AI Agents', 'Gaming'],
      desc: txt.loteroDesc,
      revenue: revenues.lotero,
    },
  ].sort((a, b) => (b.revenue || 0) - (a.revenue || 0))

  const totalRevenue = Object.values(revenues).reduce((sum, r) => sum + (r || 0), 0)

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
        {totalRevenue > 0 && (
          <div className="mt-8 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2">
            <span className="text-xs text-white/40 uppercase tracking-wide">{lang === 'es' ? 'Revenue total' : 'Total revenue'}</span>
            <span className="text-lg font-bold text-green-400">${totalRevenue.toFixed(2)}</span>
          </div>
        )}
      </section>

      {/* Products */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <p className="text-sm font-medium text-white/40 uppercase tracking-widest mb-8">{txt.products}</p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener"
              className="group flex flex-col rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 hover:bg-white/10 transition-all"
            >
              <div className="mb-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  {product.tags.map(tag => (
                    <span key={tag} className="text-xs text-white/40 bg-white/10 px-2 py-0.5 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="text-sm text-white/60 leading-relaxed flex-1">{product.desc}</p>
              {product.revenue !== undefined && product.revenue > 0 && (
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{txt.revenueLabel}</p>
                  <p className="text-2xl font-bold text-green-400">
                    ${product.revenue < 0.01 ? product.revenue.toFixed(6) : product.revenue.toFixed(2)}
                  </p>
                </div>
              )}
              <p className="mt-4 text-sm text-blue-400/70 group-hover:text-blue-400 transition-colors">
                {product.domain} →
              </p>
            </a>
          ))}
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

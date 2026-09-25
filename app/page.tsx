export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050505] flex flex-col items-center pt-32 pb-20 overflow-hidden font-sans">
      
      {/* Halos lumineux (Glow) d'arrière-plan */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Section Hero (Titre) */}
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center text-center px-4 mb-16">
        <div className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-md">
          ✨ Averyoweb — L'Hyper-Exécution
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
          Développons votre plateforme.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Conquérons votre marché.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
          L'agence technologique nouvelle génération. Déploiement SaaS ultra-rapide et stratégies d'acquisition B2B chirurgicales.
        </p>
        <button className="px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-transform duration-300">
          Démarrer votre projet
        </button>
      </div>

      {/* Le Mockup Premium (L'interface flottante) */}
      <div className="z-10 w-full max-w-5xl px-4 relative perspective-1000">
        {/* Lueur sous la carte */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-purple-500/20 blur-2xl rounded-3xl transform translate-y-4 -z-10"></div>
        
        {/* Conteneur principal de la fenêtre */}
        <div className="w-full rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl overflow-hidden flex h-[600px]">
          
          {/* Barre latérale (Sidebar) */}
          <div className="w-64 border-r border-white/10 bg-white/[0.02] p-6 flex flex-col gap-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
            </div>
            
            {/* Faux menu de navigation */}
            <div className="flex flex-col gap-2">
              {['Dashboard', 'Analytics', 'Acquisition', 'SaaS Architecture'].map((item, i) => (
                <div key={i} className={`px-4 py-2 rounded-lg text-sm font-medium ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5 transition-colors'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Contenu principal du Mockup */}
          <div className="flex-1 p-8 relative overflow-hidden">
            {/* Carte de contenu flottante */}
            <div className="w-full h-full rounded-xl border border-white/5 bg-white/[0.03] p-6 flex flex-col justify-between relative z-10">
              <div className="space-y-4 w-3/4">
                <div className="h-6 w-1/3 bg-white/10 rounded-md"></div>
                <div className="h-4 w-full bg-white/5 rounded-md"></div>
                <div className="h-4 w-2/3 bg-white/5 rounded-md"></div>
              </div>
              
              {/* Graphique simulé */}
              <div className="h-48 w-full bg-gradient-to-t from-blue-500/10 to-transparent rounded-lg border-b border-blue-500/30 flex items-end">
                 {/* Barres du graphique */}
                 <div className="flex w-full justify-around items-end px-4 h-full pt-8 gap-2">
                    {[40, 70, 45, 90, 65, 100, 85].map((height, i) => (
                      <div key={i} className="w-full bg-blue-400/20 rounded-t-sm" style={{ height: `${height}%` }}></div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Reflet de vitre */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-white/[0.05] to-transparent rotate-12 pointer-events-none -z-0"></div>
          </div>
        </div>
      </div>

    </main>
  );
}
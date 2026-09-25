export default function Home() {
  return (
    <main className="relative min-h-screen bg-black flex flex-col items-center justify-center p-8 text-center overflow-hidden">
      
      {/* Effets de lueur en arrière-plan (Glow / Aurora) */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] pointer-events-none"></div>

      {/* Contenu principal */}
      <div className="z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Badge "Hyper-Exécution" style SaaS */}
        <div className="mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm font-medium text-gray-300 backdrop-blur-md">
          ✨ Averyoweb — L'Hyper-Exécution
        </div>

        {/* Titre principal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Développons votre plateforme.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Conquérons votre marché.
          </span>
        </h1>

        {/* Texte de présentation (Business Overview) */}
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
          L'agence technologique nouvelle génération. Nous fusionnons l'ingénierie web de pointe et l'acquisition stratégique pour propulser votre croissance.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-3.5 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-all duration-300">
            Démarrer un projet
          </button>
          <button className="px-8 py-3.5 rounded-full bg-white/5 text-white border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-md">
            Découvrir l'écosystème
          </button>
        </div>
        
      </div>
    </main>
  );
}
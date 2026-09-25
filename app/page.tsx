export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">
        Averyoweb
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
        L'agence digitale spécialisée en développement full-stack, intégration SaaS, vibecoding et marketing B2B.
      </p>
      <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-all">
        Démarrer un projet
      </button>
    </main>
  );
}
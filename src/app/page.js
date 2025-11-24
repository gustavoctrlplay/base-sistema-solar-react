
export default function Home() {
  return (
    <div>
 
    </div>
  );
}



function InformacoesSol({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
      <div className="bg-gray-900 rounded-2xl p-8 max-w-lg w-full mx-4" style={{ boxShadow: '0 0 40px #fdb813' }}>
        <div className="flex items-center gap-4 mb-6">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Solarsystemscope_texture_2k_sun.jpg" 
            alt="Sol" 
            className="w-16 h-16 rounded-full object-cover" 
          />
          <h1 className="text-4xl font-bold text-white">Sol</h1>
        </div>
        
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          A estrela no centro do Sistema Solar, responsável por 99,86% da massa total.
        </p>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between py-3 border-b border-gray-700">
            <span className="text-gray-400 font-semibold">Diâmetro:</span>
            <span className="text-white">1.392.700 km</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-700">
            <span className="text-gray-400 font-semibold">Temperatura superfície:</span>
            <span className="text-white">5.500°C</span>
          </div>
          <div className="flex justify-between py-3 border-b border-gray-700">
            <span className="text-gray-400 font-semibold">Temperatura núcleo:</span>
            <span className="text-white">15 milhões °C</span>
          </div>
        </div>
        
        <button
          onClick={onClose}
          className="w-full bg-yellow-500 py-3 rounded-lg text-black font-bold text-lg hover:opacity-90 transition"
        >
          Voltar
        </button>
      </div>
    </div>
  )
}
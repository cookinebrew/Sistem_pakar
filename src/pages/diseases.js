import { penyakit } from '../data/penyakit';

export default function Diseases() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Daftar Penyakit Ikan
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {penyakit.map((p) => (
          <div key={p.kode} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">{p.nama}</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                {p.kode}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Solusi:</h3>
                <p className="text-gray-600 text-sm">{p.solusi}</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-700 mb-2">Pengobatan:</h3>
                <p className="text-gray-600 text-sm">{p.obat}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
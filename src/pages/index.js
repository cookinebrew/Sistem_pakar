import { useState, useEffect } from 'react';
import { gejala } from '../data/gejala';
import { deteksiPenyakit } from '../utils/forwardChaining';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Home() {
  const [selectedGejala, setSelectedGejala] = useState([]);
  const [hasil, setHasil] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (selectedGejala.length > 0) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const hasilDeteksi = deteksiPenyakit(selectedGejala);
        setHasil(hasilDeteksi);
        setIsLoading(false);
      }, 500);
      return () => clearTimeout(timer);
    } else {
      setHasil([]);
    }
  }, [selectedGejala]);

  const handleGejalaChange = (kode) => {
    setSelectedGejala(prev => 
      prev.includes(kode) ? prev.filter(g => g !== kode) : [...prev, kode]
    );
  };

  const handleReset = () => {
    setSelectedGejala([]);
    setHasil([]);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
        Sistem Pakar Deteksi Penyakit Ikan
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Bagian Gejala */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Pilih Gejala yang Terlihat:
          </h2>
          <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
            {gejala.map(g => (
              <div key={g.kode} 
                className="flex items-start p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <input 
                  type="checkbox" 
                  id={g.kode}
                  checked={selectedGejala.includes(g.kode)}
                  onChange={() => handleGejalaChange(g.kode)}
                  className="mt-1 mr-3 h-4 w-4 text-blue-600"
                />
                <label htmlFor={g.kode} className="text-sm sm:text-base cursor-pointer">
                  {g.nama}
                </label>
              </div>
            ))}
          </div>
          <button 
            onClick={handleReset}
            className="mt-4 w-full bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Reset Gejala
          </button>
        </div>

        {/* Bagian Hasil */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Hasil Analisis:
          </h2>
          <div className="max-h-[60vh] overflow-y-auto pr-2">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              hasil.length > 0 ? (
                <div className="space-y-4">
                  {hasil.map(p => (
                    <div key={p.kode} 
                      className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {p.nama}
                        </h3>
                        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          {p.persentase.toFixed(1)}%
                        </span>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <p className="font-medium text-gray-700">Solusi:</p>
                          <p className="text-sm text-gray-600 mt-1">{p.solusi}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700">Pengobatan:</p>
                          <p className="text-sm text-gray-600 mt-1">{p.obat}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-500 text-center">
                  {selectedGejala.length === 0 
                    ? "Silakan pilih gejala terlebih dahulu" 
                    : "Tidak ditemukan penyakit yang cocok dengan gejala yang dipilih"}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

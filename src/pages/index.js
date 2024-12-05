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
      }, 500); // Simulasi waktu analisis
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
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Sistem Pakar Deteksi Penyakit Ikan
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Pilih Gejala yang Terlihat:</h2>
        <div className="grid gap-3">
          {gejala.map(g => (
            <div key={g.kode} className="flex items-center">
              <input 
                type="checkbox" 
                id={g.kode}
                checked={selectedGejala.includes(g.kode)}
                onChange={() => handleGejalaChange(g.kode)}
                className="mr-3"
              />
              <label htmlFor={g.kode}>{g.nama}</label>
            </div>
          ))}
        </div>
        <button 
          onClick={handleReset}
          className="mt-6 bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-300"
        >
          Analisis Ulang
        </button>
      </div>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        hasil.length > 0 ? (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Hasil Analisis:</h2>
            <div className="space-y-6">
              {hasil.map(p => (
                <div key={p.kode} className="border p-4 rounded shadow-lg transition transform hover:scale-105">
                  <h3 className="text-lg font-semibold">
                    {p.nama} (Tingkat Kemiripan: {p.persentase.toFixed(1)}%)
                  </h3>
                  <div className="mt-2">
                    <p className="font-medium">Solusi:</p>
                    <p className="mt-1">{p.solusi}</p>
                  </div>
                  <div className="mt-2">
                    <p className="font-medium">Pengobatan:</p>
                    <p className="mt-1">{p.obat}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Tidak ditemukan penyakit yang cocok dengan gejala yang dipilih.</p>
        )
      )}
    </div>
  );
}

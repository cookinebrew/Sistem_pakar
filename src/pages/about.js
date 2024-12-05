export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Tentang Sistem Pakar Deteksi Penyakit Ikan
      </h1>
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Deskripsi Sistem</h2>
          <p className="text-gray-700 mb-4">
            Sistem pakar ini dirancang untuk membantu mendeteksi berbagai penyakit pada ikan 
            berdasarkan gejala-gejala yang teramati. Sistem menggunakan metode Forward Chaining 
            untuk melakukan diagnosa penyakit.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Cara Penggunaan</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Pilih gejala-gejala yang teramati pada ikan</li>
            <li>Klik tombol &quot;Analisis Penyakit&quot; untuk mendapatkan hasil diagnosa</li>
            <li>Sistem akan menampilkan kemungkinan penyakit beserta solusi dan pengobatannya</li>
            <li>Hasil diagnosa akan ditampilkan berdasarkan tingkat kemiripan gejala</li>
          </ol>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Metode Forward Chaining</h2>
          <p className="text-gray-700 mb-4">
            Forward Chaining adalah metode pencarian atau teknik pelacakan ke depan yang 
            dimulai dengan informasi yang ada dan penggabungan rule untuk menghasilkan 
            suatu kesimpulan atau tujuan.
          </p>
          <p className="text-gray-700">
            Dalam sistem ini, metode Forward Chaining digunakan untuk menganalisis 
            gejala-gejala yang dipilih dan mencocokkannya dengan basis pengetahuan 
            untuk menghasilkan diagnosa penyakit yang mungkin menyerang ikan.
          </p>
        </div>
      </div>
    </div>
  );
} 
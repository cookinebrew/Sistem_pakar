export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Sistem Pakar Deteksi Penyakit Ikan. 
            All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Dibuat dengan Next.js dan Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 
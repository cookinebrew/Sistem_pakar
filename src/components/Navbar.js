import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => {
    return router.pathname === path ? 'bg-blue-700' : '';
  };

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold">
              Sistem Pakar Ikan
            </Link>
          </div>
          
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/')}`}
            >
              Diagnosa
            </Link>
            <Link 
              href="/diseases" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/diseases')}`}
            >
              Penyakit
            </Link>
            <Link 
              href="/symptoms" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/symptoms')}`}
            >
              Gejala
            </Link>
            <Link 
              href="/about" 
              className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about')}`}
            >
              Tentang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 
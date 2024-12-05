import { rules } from '../data/rules';
import { penyakit } from '../data/penyakit';

export function deteksiPenyakit(selectedGejala) {
  // Mencari penyakit yang memiliki gejala yang cocok
  const hasilDeteksi = rules.map(rule => {
    const gejalaCocok = rule.gejala.filter(g => selectedGejala.includes(g));
    const persentase = (gejalaCocok.length / rule.gejala.length) * 100;
    return {
      kodePenyakit: rule.kodePenyakit,
      persentase,
    };
  }).filter(hasil => hasil.persentase > 0);

  // Gabungkan dengan data penyakit lengkap
  return hasilDeteksi.map(hasil => {
    const detailPenyakit = penyakit.find(p => p.kode === hasil.kodePenyakit);
    return {
      ...detailPenyakit,
      persentase: hasil.persentase,
    };
  }).sort((a, b) => b.persentase - a.persentase); // Urutkan berdasarkan persentase tertinggi
}

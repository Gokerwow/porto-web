// app/projects/[id]/page.tsx

import Link from 'next/link';

// Kita tetap menggunakan 'params' untuk memberikan konteks kepada pengguna
export default function ProjectPage({ params }: { params: { id: string } }) {
  
  // Style untuk container utama agar konten berada di tengah
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '80vh', // Mengisi sebagian besar tinggi layar
    textAlign: 'center',
    padding: '2rem',
    color: '#333', // Warna teks yang lebih lembut
  };

  // Style untuk ikon emoji agar lebih besar
  const iconStyle: React.CSSProperties = {
    fontSize: '4rem', // Ukuran ikon besar
    marginBottom: '1rem',
  };

  const linkStyle: React.CSSProperties = {
    marginTop: '2rem',
    padding: '0.75rem 1.5rem',
    backgroundColor: '#0070f3', // Warna biru khas Next.js/Vercel
    color: 'white',
    textDecoration: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    transition: 'background-color 0.2s',
  };

  return (
    <div style={containerStyle}>
      <div style={iconStyle}>🚧</div>
      <h1>Segera Hadir!</h1>
      <p style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
        Halaman untuk proyek dengan ID: <strong>{params.id}</strong> sedang dalam tahap konstruksi.
      </p>
      <p>
        Terima kasih atas kesabaran Anda selagi kami menyiapkannya.
      </p>
      <Link href="/projects" style={linkStyle}>
        &larr; Kembali ke Daftar Proyek
      </Link>
    </div>
  );
}
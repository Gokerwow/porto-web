export default function Loading() {
  // Anda bisa menambahkan UI skeleton atau spinner di sini
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
    </div>
  );
}
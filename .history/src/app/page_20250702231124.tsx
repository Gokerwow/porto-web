import Image from "next/image";

export default function Home() {
  return (
    <div className="px-52 py-40 w-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-1/2">
          <h1 className="text-6xl font-bold mb-10">Driven by Code, Focused on Results</h1>
          <h2 className="text-2xl text-gray-700">I&apos;m Brillian Maulana Syah, an Indonesian-based Developer who specializes in building (and occasionally designing) exceptional digital experiences. <br />Always searching for learning opportunities</h2>
        </div>
        <Image
          src="/assets/foto_pribadi.png"
          alt="Description of the image"
          width={600}
          height={600}
        />
      </div>
    </div>
  );
}

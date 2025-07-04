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
      <div>
<svg width="200px" height="200px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F7DF1E" d="M0 0h32v32H0z"/>
  <path d="M21.53 23.61c.64.44 1.54.83 2.5.83 1.22 0 1.83-.55 1.83-1.28 0-.88-.67-1.2-2.07-1.73l-.8-.3c-1.83-.65-3.05-1.68-3.05-3.65 0-1.92 1.4-3.3 3.6-3.3 1.25 0 2.27.3 3.08.7l-.54 2.3c-.5-.28-1.13-.6-1.9-.6-.94 0-1.48.47-1.48 1.1 0 .73.52 1.04 1.7 1.5l.77.28c2.14.77 3.35 1.82 3.35 3.8 0 2.1-1.6 3.48-4.1 3.48-1.5 0-2.7-.42-3.55-.86l.6-2.3zM14.28 14.25c-.06-1.5-.9-2.58-2.6-2.58-1.5 0-2.52.8-2.97 1.4l1.88 1.15c.24-.4.57-.7 1-.7.54 0 .85.24.85.73V25h3.05v-9.5c0-.6-.05-1.04-.2-1.25z"/>
</svg>
      </div>
    </div>
  );
}

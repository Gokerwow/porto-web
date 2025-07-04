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
          <g fill="none" fillRule="evenodd">
            <path d="M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z" fill="#387EB8" />
            <path d="M22.823 15.352c.02-.315.031-.632.031-.952 0-3.37-2.67-6.108-5.968-6.108H12.25v3.136h4.636c1.625 0 2.943 1.35 2.943 3.016 0 1.667-1.318 3.016-2.943 3.016H14.1v3.136h2.78c.01.002.02.002.03.002 1.95 0 3.696-.96 4.757-2.455a5.228 5.228 0 0 0 1.156-3.59zM16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16z" fill="#FFD43B" transform="rotate(180 16 16)" />
            <path d="M9.177 16.648c-.02.315-.031.632-.031.952 0 3.37 2.67 6.108 5.968 6.108H19.75v-3.136h-4.636c-1.625 0-2.943-1.35-2.943-3.016 0-1.667 1.318-3.016 2.943-3.016H17.9v-3.136h-2.78c-.01-.002-.02-.002-.03-.002-1.95 0-3.696.96-4.757 2.455a5.228 5.228 0 0 0-1.156 3.59z" fill="#FFD43B" />
            <g fill="#FFF">
              <circle cx="11.5" cy="23" r="1.5" />
              <circle cx="20.5" cy="9" r="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

import BlobShape from "./BlobShape";

export default function BlobHero() {
  return (
    <div className="flex relative isolate mb-10  rounded-lg shadow-[4px_11px_260px_20px_rgba(201,_104,_240,_0.93)] flex-col gap-10 bg-transparent justify-start w-full h-[400px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 blur-[50px] ">
        <BlobShape className="animate-blob-move" />
      </div>
      <div className="absolute inset-0 w-full h-full z-0 blur-[40px] ">
        <BlobShape className="animate-blob-move-random" />
      </div>
      <div className="absolute inset-0 flex justify-center items-center z-10">
        <span className="text-7xl text-white">Hello Finease</span>
      </div>
    </div>
  );
}

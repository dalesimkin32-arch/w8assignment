import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer */}
      <div className="absolute inset-0 bg-[url('/public/images/road-texture.jpg')] bg-repeat bg-center">
        {/* Optional: Add an overlay for color and depth */}
        <div className="absolute inset-0 bg-gray-950 opacity-80" />
      </div>
      <main>
        {" "}
        {/*className="relative z-10 flex h-screen items-center justify-center text-center text-white"*/}
        {/* sub tags className="text-4xl font-bold" */}
        <NavBar />
      </main>

      <footer></footer>
    </div>
  );
}

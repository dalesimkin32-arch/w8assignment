import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-800 opacity-80">
      {/* Background layer */}
      <div>{/* Optional: Add an overlay for color and depth */}</div>
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

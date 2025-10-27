import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-800 opacity-80">
      {/* Background layer */}
      <div>{/* Optional: Add an overlay for color and depth */}</div>
      <main>
        <NavBar />
        <body>
          {/*<Image
            src="https://www.roads.org.uk/sites/default/files/motorway/m8/sign.svg"
            alt="M8 motorway sign showing M8 and the symbol "
          />  commented out as could not get image to work alt all */}
          <p>Motorway Blog for the M8</p>
        </body>
      </main>

      <footer></footer>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Headless WordPress</h1>
          <p className="text-center text-lg mt-4">A simple blog using Next.js and WordPress</p>

          <div className="text-center my-20">
            <Link href={'/blog'}
                  className="underline underline-offset-4">
              View blog {'->'}
            </Link>
          </div>
        </div>
      </main>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="flex justify-center">
        <p className="my-3 bg-slate-200 w-1/2 text-center text-5xl">
          hello world
        </p>
      </div>
      <p>
        <Link href="/users" className="bg-slate-200">
          Users
        </Link>
      </p>
    </main>
  );
}

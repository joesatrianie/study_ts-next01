import Link from "next/link";
import styles from "./about.module.css";

export default function About() {
  // throw new Error("not today");

  return (
    <>
      <main>
        <h1 className="text-blue-700 bg-white">about</h1>
        <Link href="/">Link to home page</Link>;
      </main>
    </>
  );
}

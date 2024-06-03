import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href="/data">Data</Link>
      <Link href="/add">Add</Link>
    </main>
  );
}

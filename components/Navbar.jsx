import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 bg-white shadow">
      <h1 className="font-bold text-xl">Valisoa</h1>
      <div className="flex gap-6">
        <Link href="/">Accueil</Link>
        <Link href="/about">À propos</Link>
        <Link href="/projects">Projets</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}

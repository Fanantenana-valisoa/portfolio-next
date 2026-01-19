import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
export const metadata = {
  title: "Portfolio | Fanantenana Valisoa",
  description: "Développeur Web Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="bg-gray-100 text-gray-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

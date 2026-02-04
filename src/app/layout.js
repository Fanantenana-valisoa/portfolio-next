import "./globals.css";
import ParticlesBackground from "./components/ParticlesBackground";

export const metadata = {
  title: "Portfolio",
  description: "My portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

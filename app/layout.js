import "./globals.css";
import { Alumni_Sans } from "next/font/google";

const alumni = Alumni_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alumni.className}>{children}</body>
    </html>
  );
}

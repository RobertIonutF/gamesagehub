import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import { Toaster } from "react-hot-toast";

//Components
import Navbar from "./_components/Navbar";
import CustomSessionProvider from "./context/CustomSessionProvider";

export const metadata = {
  title: "GameSage Hub",
  description: "A platform for gamers to connect and share their experiences.",
};

export default function RootLayout({ children }) {
  return (
    <CustomSessionProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Toaster position="top-center" reverseOrder={false} />
        </body>
      </html>
    </CustomSessionProvider>
  );
}

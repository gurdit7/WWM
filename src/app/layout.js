import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { CurrencyProvider } from "@/contexts/currency-provider/CurrencyProvider";
import Main from "./main/Main";
import { ThemeProvider } from "@/contexts/theme/ThemeContext";

const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-noto" });

export const metadata = {
  title: "Home - WWM",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSans.className}>
        <ThemeProvider>
        <CurrencyProvider>
            <Main>
              {children}
            </Main>
        </CurrencyProvider> 
        </ThemeProvider>
      </body>
    </html>
  );
}

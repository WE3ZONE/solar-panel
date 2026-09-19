import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./style.css";

const font = Vazirmatn({ subsets: ["arabic"], weight: ["300", "400", "500", "600", "700"], variable: "--font-five" });
export const metadata: Metadata = { title: "تابش | جریان فردا", description: "از نیروی خورشید تا بازار انرژی؛ دموی پنجم تابش" };
export default function Layout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body className={font.variable}>{children}</body></html>;
}

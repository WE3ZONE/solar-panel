import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./style.css";
const font = Vazirmatn({ subsets: ["arabic"], weight: ["400", "500", "600", "700", "800"], variable: "--font-demo" });
export const metadata: Metadata = { title: "تابش | آینده از خورشید آغاز می‌شود", description: "دموی دوم تابش انرژی گستر؛ انرژی پاک برای فردایی روشن‌تر" };
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="fa" dir="rtl"><body className={font.variable}>{children}</body></html>;
}

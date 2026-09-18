import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./style.css";
import {Header,Footer} from "./_components/Shell";
import DemoChooserBar from "@/app/_components/DemoChooserBar";
const font = Vazirmatn({ subsets: ["arabic"], weight: ["400", "500", "600", "700", "800"], variable: "--font-demo" });
export const metadata: Metadata = { title: "تابش | آینده‌ای سبز با انرژی خورشیدی", description: "دموی چهارم تابش انرژی گستر؛ انرژی پاک برای فردایی روشن‌تر" };
export default function Layout({children}: {children: React.ReactNode}) {
  return <html lang="fa" dir="rtl"><body className={font.variable}><DemoChooserBar /><Header/>{children}<Footer/></body></html>;
}

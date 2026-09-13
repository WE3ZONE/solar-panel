import type { Metadata } from "next";
import "./hub.css";

export const metadata: Metadata = { title: "دموهای سولار پنل" };

export default function HubLayout({ children }: { children: React.ReactNode }) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}

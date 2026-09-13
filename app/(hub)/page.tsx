import Link from "next/link";

export default function Home() {
  return (
    <main className="demo-picker">
      <h1>دموهای سولار پنل</h1>
      <nav aria-label="انتخاب دمو">
        <Link href="/demo-1">دمو ۱</Link>
        <Link href="/demo-2">دمو ۲</Link>
        <Link href="/demo-3">دمو ۳</Link>
      </nav>
    </main>
  );
}

import Link from "next/link";

export default function DemoChooserBar() {
  return (
    <aside className="demo-chooser-bar" aria-label="انتخاب نمونه وب‌سایت">
      <div className="demo-chooser-bar__inner">
        <Link href="/" className="demo-chooser-bar__link">
          انتخاب دموها <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </aside>
  );
}

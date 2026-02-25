import Link from "next/link";
import Button from "@/components/ui/Button";
import { brand, nav, links } from "@/lib/constants";

export default function Header() {
  return (
    <header className="siteHeader">
      <div className="container headerInner">
        <Link href={links.home} className="brand">
          <div className="brandMark">
            <span className="brandMarkLetter">A</span>
          </div>
          <div className="brandText">
            <span className="brandName">{brand.name}</span>
            <span className="small">{brand.tagline}</span>
          </div>
        </Link>

        <nav className="headerNav">
          {nav.slice(0, 6).map((x) => (
            <Link key={x.href} href={x.href} className="headerNavLink">
              {x.label}
            </Link>
          ))}
        </nav>

        <div className="headerActions">
          <Button href={links.login} variant="ghost" className="hideOnSmall">
            Войти
          </Button>
          <Button href={links.contact} variant="primary">
            Получить демо
          </Button>
        </div>
      </div>
    </header>
  );
}
import { linksMenu } from "../constant";
import "./Footer.css";

const Footer = () => (
  <footer className={"footer"}>
    <div />
    <div className={"main"}>
      <section className={"links"}>
        {linksMenu.map((menu) => (
          <nav key={menu.id} className={"menu"} aria-label={menu.menuName}>
            <h3>{menu.menuName}</h3>
            <ul className={"menu-list"}>
              {menu.links.map((link) => (
                <li key={link.id} aria-label={link.name} className={"list"}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </section>
    </div>
    <div />
  </footer>
);

export default Footer;

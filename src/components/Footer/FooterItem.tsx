import { Link, useLocation } from "@tanstack/react-router";
import { TFooterItem } from "./Footer";
import { useRef } from "react";

type TFooterItemProps = {
  item: TFooterItem;
}

export default function FooterItem({ item }: TFooterItemProps) {
  const refLink = useRef<null | HTMLAnchorElement>(null);
  const location = useLocation();

  const { icon: ComponentIcon, site } = item;

  return (
    <li className="item" data-active={refLink.current?.pathname === location.pathname}>
      <ComponentIcon className="icon" />
      <span className="name">{site.name}</span>
      <Link
        className="_overlay"
        ref={refLink}
        title={site.name}
        aria-label={site.name}
        to={site.href}
      />
    </li>
  )
}
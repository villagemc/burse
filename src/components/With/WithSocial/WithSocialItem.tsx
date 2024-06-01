import { TWithSocial } from "./WithSocial"

type TWithSocialItemProps = {
  item: TWithSocial;
}

export default function WithSocialItem({ item }: TWithSocialItemProps) {
  const { icon: ComponentIcon, site } = item;

  return (
    <li>
      <a 
        className="link"
        title={site.name}
        aria-label={site.name}
        href={site.href}>
        <ComponentIcon className="link-icon" />
      </a>
    </li>
  )
}
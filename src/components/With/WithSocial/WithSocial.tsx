import SiteIcon from "@/images/with/icon/site.svg?react";
import TWIcon from "@/images/with/icon/tw.svg?react";
import TGIcon from "@/images/with/icon/tg.svg?react";
import InstIcon from "@/images/with/icon/inst.svg?react";
import { FunctionComponent, SVGProps } from "react";
import WithSocialItem from "./WithSocialItem";

export type TWithSocial = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  site: {
    name: string;
    href: string;
  }
}

const withSocialItems: TWithSocial[] = [
  {
    icon: SiteIcon,
    site: {
      name: 'site',
      href: '/'
    }
  },
  {
    icon: TWIcon,
    site: {
      name: 'twitter',
      href: '/'
    }
  },
  {
    icon: TGIcon,
    site: {
      name: 'telegram',
      href: '/'
    }
  },
  {
    icon: InstIcon,
    site: {
      name: 'instagram',
      href: ''
    }
  }
];

export default function WithSocial() {
  return (
    <ul className="socials block">
      {withSocialItems.map((item, id) =>
        <WithSocialItem key={id} item={item} />
      )}
    </ul>
  )
}
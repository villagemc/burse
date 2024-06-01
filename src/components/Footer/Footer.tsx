import FooterItem from './FooterItem';
import EarnComponent from '@/images/footer/earn.svg?react';
import ReferComponent from '@/images/footer/refer.svg?react';
import RatingComponent from '@/images/footer/rating.svg?react';
import WithdrawComponent from '@/images/footer/withdraw.svg?react';
import { FunctionComponent, SVGProps } from 'react';

export type TFooterItem = {
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  site: {
    name: string;
    href: string;
  }
}

const FooterItems: TFooterItem[] = [
  {
    icon: EarnComponent,
    site: {
      name: 'Earn',
      href: '/'
    }
  },
  {
    icon: ReferComponent,
    site: {
      name: 'Refer',
      href: '/refer'
    }
  },
  {
    icon: RatingComponent,
    site: {
      name: 'Rating',
      href: '/rating'
    }
  },
  {
    icon: WithdrawComponent,
    site: {
      name: 'Withdraw',
      href: '/withdraw'
    }
  }
];

export default function Footer() {
  return (
    <footer className='footer'>
      <ul className="items">
        {FooterItems.map((item, id) =>
          <FooterItem key={id} item={item} />
        )}
      </ul>
    </footer>
  )
}
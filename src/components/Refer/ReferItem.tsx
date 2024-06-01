import CoinImage from "@/images/refer/coin.png";
import { TReferItem } from "./Refer";

type TReferItemProps = {
  item: TReferItem;
}

export default function ReferItem({ item }: TReferItemProps) {
  return (
    <li className="item">
      <img
        className="avatar"
        src={item.image}
        alt="Avatar Image"
      />
      <div className="content">
        <h4 className="title">{item.title}</h4>
        <div className="description">
          <img
            className="coin"
            src={CoinImage}
            alt="Coin Image"
          />
          <p className="subtitle">{item.subtitle}</p>
        </div>
      </div>
    </li>
  )
}
import { TWithCoin } from "./WithCoin";

type TWithCoinItemProps = {
  item: TWithCoin;
}

export default function WithCoinItem({ item }: TWithCoinItemProps) {
  return (
    <li className="coin">
      <div className="circle" style={{ background: item.color }} />
      <span className="title">{item.title}</span>
    </li>
  )
}
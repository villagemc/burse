import CoinImage from "@/images/with/coin.png";
import TonImage from "@/images/with/ton.png";
import EthImage from "@/images/with/eth.png";
import WithGridItem from "./WithGridItem";

export type TWithGrid = {
  image: string;
  name: string;
  money: number;
}

const withGridItems: TWithGrid[] = [
  {
    image: CoinImage,
    name: 'Slopy balance',
    money: 100
  },
  {
    image: TonImage,
    name: 'TON Balance',
    money: 100
  },
  {
    image: EthImage,
    name: 'ETH balance',
    money: 100
  }
];

export default function WithGrid() {
  return (
    <ul className="grids block">
      {withGridItems.map((item, id) =>
        <WithGridItem key={id} item={item} />
      )}
    </ul>
  )
}

import PlaceImage from "@/images/rating/place.png";
import LvLImage from "@/images/rating/lvl.png";
import WeekImage from "@/images/rating/week.png";
import TotalImage from "@/images/rating/total.png";
import PrizeImage from "@/images/rating/prize.png";
import RatingTh from "./RatingTh";
import RatingTd from "./RatingTd";
import { CSSProperties } from "react";

export type TRating = {
  image: string;
  name: string;
  numbers: number[];
}

const ratingItems: TRating[] = [
  {
    image: PlaceImage,
    name: 'Place',
    numbers: [0, 0, 0, 0, 0]
  },
  {
    image: LvLImage,
    name: 'LVL',
    numbers: [770, 770, 770, 770, 770]
  },
  {
    image: WeekImage,
    name: 'Week',
    numbers: [1540, 1540, 1540, 1540, 1540]
  },
  {
    image: TotalImage,
    name: 'Total',
    numbers: [2310, 2310, 2310, 2310, 2310]
  },
  {
    image: PrizeImage,
    name: 'Prize',
    numbers: [3080, 3080, 3080, 3080, 3080]
  }
];

// Создаем массив для таблицы (5 столбцов, 4 строки):
const ratingNumbers = ratingItems
  .map((_, i, arr) => arr.map(item => item.numbers[i]))
  .filter(item => item.some(number => !(number === undefined)))

export default function Rating() {
  const styleCountTable = {'--count': ratingItems.length} as CSSProperties;

  return (
    <section className="rating">
      <table className="table">
        <thead className="thead">
          <tr className="tr" style={styleCountTable}>
            {ratingItems.map((item, id) =>
              <RatingTh key={id} item={item} />
            )}
          </tr>
        </thead>
        <tbody className="tbody">
          {ratingNumbers.map((numbers, i) =>
            <tr className="tr" key={i} style={styleCountTable}>
              {numbers.map((number, j) =>
                <RatingTd key={j} number={number} />
              )}
            </tr>
          )}
        </tbody>
      </table>
      <ul>
        {Array(6).fill(0).map((_, id) =>
          <li key={id} className="ellipse" />
        )}
      </ul>
    </section>
  )
}
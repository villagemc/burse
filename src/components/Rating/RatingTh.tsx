import { TRating } from "./Rating"

type TRatingThProps = {
  item: TRating;
}

export default function RatingTh({ item }: TRatingThProps) {
  return (
    <th className="th">
      <img
        className="image"
        src={item.image}
        alt={item.name + ' Image'}
      />
      <span className="title">{item.name}</span>
    </th>
  )
}
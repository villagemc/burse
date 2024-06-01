type TRatingTd = {
  number: number;
}

export default function RatingTd({ number }: TRatingTd) {
  return (
    <td className="td">
      <span className="number">{number}</span>
    </td>
  )
}

import { TWithGrid } from "./WithGrid"

type TWithGridItemProps = {
  item: TWithGrid;
}

export default function WithGridItem({ item }: TWithGridItemProps) {
  return (
    <li className="grid">
      <div className="info">
        <div className="currency-image">
          <img
            className="currency"
            src={item.image}
            alt={item.name + ' Image'}
          />
        </div>
        <h4 className="name">{item.name}</h4>
      </div>
      <span className="money">{item.money}</span>
    </li>
  )
}

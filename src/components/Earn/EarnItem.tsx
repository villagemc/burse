import { TEarn } from "./Earn";

type TEarnItemProps = {
  item: TEarn;
}

export default function EarnItem({ item }: TEarnItemProps) {
  return (
    <li className="item">
      <h4 className="name">{item.name}</h4>
      <div className="info">
        <div className="image">
          <img
            src={item.image.src}
            alt={item.image.alt}
          />
        </div>
        <span className="count">{item.count}</span>
      </div>
    </li>
  )
}
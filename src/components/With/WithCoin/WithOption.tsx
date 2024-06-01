import { Dispatch, SetStateAction } from "react";
import { TWithOption } from "./WithCoin"

type TWithOptionProps = {
  item: TWithOption;
  number: number;
  setIndex: Dispatch<SetStateAction<number>>;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export default function WithOption({ item, number, setIndex, setIsActive }: TWithOptionProps) {
  const handleClick = () => {
    setIndex(number);
    setIsActive(isState => !isState)
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className="button"
        type="button">
        {item.value}
      </button>
    </li>
  )
}

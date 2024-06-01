import { useState } from "react";
import WithCoinItem from "./WithCoinItem";
import WithOption from "./WithOption";

export type TWithCoin = {
  color: string;
  title: string;
}

export type TWithOption = {
  value: string;
}

const withCoinItem: TWithCoin[] = [
  { color: '#FF00F0', title: 'Select network' },
  { color: '#47B16A', title: 'Withdrawal amount' },
  { color: '#FBCE1C', title: 'Commission: 100' },
  { color: '#372ACF', title: 'Amount to be received: 1000' }
];

const withCointOptions: TWithOption[] = [
  { value: 'ETH/TON 1' },
  { value: 'ETH/TON 2' },
  { value: 'ETH/TON 3' },
];

export default function WithCoin() {
  const [ index, setIndex ] = useState<number>(0);
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const handleClick = () => setIsActive(isState => !isState);

  return (
    <form className="container block">
      <ul className="coins">
        {withCoinItem.map((item, id) =>
          <WithCoinItem key={id} item={item} />
        )}
      </ul>
      <div className="flex">
        <div className="select">
        <input
          id="radio"
          name="radio"
          className="radio"
          type="radio"
          value={withCointOptions[index].value}
          defaultChecked
        />
        <button onClick={handleClick} type="button">
          <span className="label">{withCointOptions[index].value}</span>
        </button>
        <ul className="options" data-active={isActive}>
          {withCointOptions.map((item, id) => 
            <WithOption
              key={id}
              number={id}
              item={item}
              setIndex={setIndex}
              setIsActive={setIsActive}
            />
          )}
        </ul>
        </div>
        <input
          id="price"
          name="price"
          className="input"
          type="text"
          defaultValue={100}
        />
      </div>
      <div className="submits">
        <button className="submit" type="submit">Deposit</button>
        <button className="submit submit_confirm" type="submit">Confirm</button>
      </div>
    </form>
  )
}
import AvatarImage from "@/images/earn/avatar.png";
import DenoImage from "@/images/earn/deno.png";
import PackaxeImage from "@/images/earn/pickaxe.png";
import ArrowIcon from "@/images/earn/arrow.svg?react";
import EarnItem from "./EarnItem";
import EarnCount from "./EarnCount";
import { MouseEvent, useState } from "react";

export type TEarn = {
  name: string;
  count: number;
  image: {
    src: string;
    alt: string;
  }
}

export type TCoordinate = {
  time: number;
  x: string;
  y: string;
}

const EarnItems: TEarn[] = [
  {
    name: 'Profit per tap',
    count: 10,
    image: {
      src: DenoImage,
      alt: 'Dinosaur Icon'
    }
  },
  {
    name: 'Difficulty',
    count: 10,
    image: {
      src: PackaxeImage,
      alt: 'Pickaxe icon'
    }
  }
];

export default function Earn() {
  const [ number, setNumber ] = useState<number>(1000);
  const [ coordinates, setCoordinates ] = useState<TCoordinate[]>([]);

  const handleClick = ({ clientX, clientY }: MouseEvent<HTMLButtonElement>) => {
    setNumber(state => state += 1);
    
    setCoordinates(state => [
      ...state, {
        time: new Date().valueOf(),
        x: (clientX || -50) + 'px',
        y: (clientY || -50) + 'px'
      }
    ]);
  }

  const handleTime = (time: number) => (
    setCoordinates(stateArray => (
      stateArray.filter(coordinate => (
        coordinate.time !== time)
      ))
    )
  );

  return (
    <section className="earn">
      <ul className="items">
        {EarnItems.map((item, id) =>
          <EarnItem key={id} item={item} />
        )}
      </ul>
      <div className="numbers">
        <div className="person">
          <img
            className="person-icon"
            src={EarnItems[0].image.src}
            alt={EarnItems[0].image.alt}
          />
        </div>
        <span className="number">{number}</span>
      </div>
      <div className="material">
        <div className="head">
          <div className="text">
            <span className="label">Bronze</span>
            <ArrowIcon className="arrow-icon" />
          </div>
          <span className="label">Level 1/9</span>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
      </div>
      <div className="circles">
        <div className="circle" />
        <img
          className="avatar"
          src={AvatarImage}
          alt="Avatar Image"
        />
        <button
          onClick={handleClick}
          className="_overlay button"
          type="button"
        />
        <div className="circle" />
      </div>
      <ul>
        {Array(3).fill(0).map((_, id) => 
          <li className="ellipse" key={id} />
        )}
      </ul>
      {coordinates.map(coordinate =>
        <EarnCount
          key={coordinate.time}
          coordinate={coordinate}
          handleTime={handleTime}
          count={1}
        />
      )}
    </section>
  )
}
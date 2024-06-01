import { CSSProperties, useEffect, useRef } from "react";
import { TCoordinate } from "./Earn";

type TEarnCountProps = {
  count: number;
  coordinate: TCoordinate;
  handleTime: (time: number) => void;
}

export default function EarnCount({ count, coordinate, handleTime }: TEarnCountProps) {
  const refSpan = useRef<null | HTMLSpanElement>(null);

  useEffect(() => {
    const handleAnimate = () => handleTime(coordinate.time);

    refSpan.current?.addEventListener('animationend', handleAnimate);

    return () => {
      refSpan.current?.removeEventListener('animationend', handleAnimate);
    }
  }, [coordinate]);

  return (
    <span
      ref={refSpan}
      className="sky"
      style={{
        '--y': coordinate.y,
        '--x': coordinate.x
      } as CSSProperties}
      data-time={coordinate.time}
    >{'+' + count}</span>
  )
}
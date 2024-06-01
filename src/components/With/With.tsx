import WithCoin from "./WithCoin/WithCoin";
import WithGrid from "./WithGrid/WithGrid";
import WithSocial from "./WithSocial/WithSocial";

export default function With() {
  return (
    <section className="with">
      <WithGrid />
      <WithCoin />
      <WithSocial />
      <ul>
        {Array(4).fill(0).map((_, id) =>
          <li className="ellipse" key={id} />
        )}
      </ul>
    </section>
  )
}
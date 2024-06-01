import Header from "./Header";

type THeaderMainProps = {
  title: string;
  subtitle: string;
}

export default function HeaderMain({ title, subtitle }: THeaderMainProps) {
  return (
    <Header>
      <div className="main">
        <h2 className="title">{title}</h2>
        <p className="subtitle">{subtitle}</p>
      </div>
    </Header>
  )
}
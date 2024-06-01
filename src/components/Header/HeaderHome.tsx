import LogoImage from "@/images/header/logo.png";
import Header from "./Header";

export default function HeaderHome() {
  return (
    <Header>
      <div className="home">
        <div className="logo">
          <img src={LogoImage} alt="Logo" className="image" />
        </div>
        <div className="content">
          <h3 className="title">Sumayi</h3>
          <p className="subtitle">UI UX Designer</p>
        </div>
      </div>
    </Header>
  )
}
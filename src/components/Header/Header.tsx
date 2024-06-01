import { ReactNode } from "@tanstack/react-router"

type THeaderProps = {
  children: ReactNode;
}

export default function Header({ children }: THeaderProps) {
  return (
    <header className="header">{children}</header>
  )
}
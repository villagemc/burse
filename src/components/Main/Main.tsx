import { ReactNode } from "@tanstack/react-router";

type TMainProps = {
  children: ReactNode;
}

export default function Main({ children }: TMainProps) {
  return (
    <main className="content">{children}</main>
  )
}

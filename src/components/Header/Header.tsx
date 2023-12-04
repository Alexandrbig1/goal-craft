import { type ReactNode } from "react";
import { HeaderStyled, HeaderImg } from "./Header.styled";

type HeaderProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
};

export default function Header({ image, children }: HeaderProps) {
  return (
    <HeaderStyled>
      <HeaderImg src={image.src} alt={image.alt} />
      {children}
    </HeaderStyled>
  );
}

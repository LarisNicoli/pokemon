import { PropsWithChildren } from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
}) => {
  return (
    <header className="bg-blue-600 w-full h-32 md:h-[100px] rounded-t-sm relative">
      <div className="flex justify-between md:items-center w-full">
        <h1 className="text-white font-semibold m-5 text-2xl">{title}</h1>
        <img
          src="/images/pokeball.png"
          arial-label="pokeball icone"
          alt="Pokeball Icon"
          className="mr-2 mt-5 md:mt-0 h-10 md:h-20"
        ></img>
      </div>
      {children}
    </header>
  );
};

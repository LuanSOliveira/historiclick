import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="w-full flex flex-col bg-radial from-[#1c1e75] via-paleta-1 to-[#160830] text-paleta-3  overflow-y-auto overflow-x-hidden">
        <div>{children}</div>
      </main>
    </>
  );
};

export default Layout;

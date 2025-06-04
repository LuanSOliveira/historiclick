import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <main className="w-full min-h-screen flex flex-col bg-radial from-[#1c1e75] via-paleta-1 to-[#160830] text-paleta-3">
        <div className="flex-grow">{children}</div>
      </main>
    </>
  );
};

export default Layout;

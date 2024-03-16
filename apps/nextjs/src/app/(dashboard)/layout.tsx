import { Navbar } from "./navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

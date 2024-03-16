import { Navbar } from "../_components/navbar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return (
    <>
      <Navbar />
      <div className="p-8">{children}</div>
    </>
  );
}

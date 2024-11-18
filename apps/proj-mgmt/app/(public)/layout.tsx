import "./styles.css";

import { Header } from "./components/header";

type PublicPageLayoutProps = {
  children: React.ReactNode;
};

export default function PublicPageLayout({ children }: PublicPageLayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

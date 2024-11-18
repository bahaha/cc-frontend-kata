import { Header } from "./components/header";
import "./styles.css";

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

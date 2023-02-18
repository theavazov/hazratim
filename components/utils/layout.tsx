import { Footer } from "../footer/footer";
import { Header } from "../header/header";

type Props = {
  children: React.ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

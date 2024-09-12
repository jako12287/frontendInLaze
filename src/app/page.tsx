import Main from "./movies/page";
import RootLayout from "./layout";
import Header from "@/ui/components/Header";
import Banner from "@/ui/components/Banner";

export default function Home(): JSX.Element {
  return (
    <RootLayout>
      <Header />
      <Banner/>
      <Main />
    </RootLayout>
  );
}

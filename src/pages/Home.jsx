import BooksList from "../components/BooksList";
import { HeaderCorusel } from "../components/HeaderCorusel";
import Kategoriya from "../components/Kategoriya";
import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";

function Home() {
  return (
    <>
      <Navbar className="border-b border-[#292929]" />
      <HeaderCorusel />
      <SearchSection className="relative bottom-[55px] left-[240px] flex" />
      <Kategoriya />
      <BooksList />
    </>
  );
}

export default Home;

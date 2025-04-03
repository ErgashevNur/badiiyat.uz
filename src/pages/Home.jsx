import BooksList from "../components/BooksList";
import { HeaderCorusel } from "../components/HeaderCorusel";
import Kategoriya from "../components/Kategoriya";
import Navbar from "../components/Navbar";
import SearchSection from "../components/SearchSection";
// import UpdateBook from "../components/UpdateData";

function Home() {
  return (
    <>
      <Navbar className="border-b border-[#292929]" />
      <HeaderCorusel />
      <SearchSection className="relative bottom-[45px] mx-auto flex" />
      <Kategoriya />
      <BooksList />
      {/* <UpdateBook /> */}
    </>
  );
}

export default Home;

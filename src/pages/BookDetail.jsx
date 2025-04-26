import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ArrowDown, Book } from "lucide-react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState();

  function formatNumber(num) {
    if (!num) return "0";
    return num.toLocaleString("ru-RU").replace(/,/g, " ");
  }

  useEffect(() => {
    fetch(`https://library-project-6agw.onrender.com/get_one_book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBook(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API xatosi:", error);
        setLoading(false);
      });
  }, [id]);

  //

  useEffect(() => {
    fetch("https://library-project-6agw.onrender.com/get_books")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API xatosi:", error);
        setLoading(false);
      });
  }, []);

  const navigate = useNavigate();

  if (loading) {
    return (
      <Button className="mx-auto mt-12 flex items-center" disabled>
        <Loader2 className="animate-spin" />
        Malumotlar yuklanmoqda...
      </Button>
    );
  }

  if (books?.length === 0) {
    return (
      <div className="mt-12 text-center">
        <h2 className="text-lg font-semibold">Hech qanday kitob topilmadi.</h2>
      </div>
    );
  }

  if (loading)
    return (
      <Button className="mx-auto flex h-screen items-center" disabled>
        <Loader2 className="animate-spin" />
        Malumotlar yuklanmoqda...
      </Button>
    );

  return (
    <section
      className="min-h-screen bg-[length:700px_700px] bg-[position:900px_160px] bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bg.svg')" }}
    >
      <Navbar />

      <div className="mx-[81px] mt-10 flex gap-10">
        <img
          src="../public/image 18.png"
          // src={book?.img}
          alt={book?.title}
          className="h-[500px] w-[350px] rounded-xl object-cover shadow-md"
        />

        <div className="flex flex-col">
          <h3 className="font-dancing text-4xl text-[#e8c282]">
            {book?.title}
          </h3>
          <p className="text-lg capitalize text-[#e8c282]">{book?.author}</p>
          <p className="text-sm text-gray-400">Sahifalar soni: {book?.pages}</p>
          <p className="text-sm text-gray-400">
            Chop etilgan yili: {book?.year}
          </p>

          <div className="mt-4 flex items-center gap-2">
            <p className="text-md flex items-center gap-1 text-gray-400">
              To'liq ma'lumot <ArrowDown className="h-4 w-4" />
            </p>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <p className="text-sm leading-relaxed text-gray-300">
            {/* {book?.description} */}
            Роман ўтган асрнинг йигирманчи йилларида Германияда таҳсил олган ва
            собиқ Совет Иттифоқи томонидан шафқатсизларча қатл этилган миллат
            йигит-қизларининг хотирасига бағишланади.{" "}
          </p>

          <br />

          <p>
            Роман воқеаларини қисқача сўзлар билан ифода этиб бўлмайди. Барчаси
            шу қадар тиғизки, шошириб қўяди. Мажоз, образ, ифода, ўт, ҳеч
            кимникига ўхшамаган лиризмни ҳис қиласиз. Миллият, соф муҳаббат,
            кўринмас ва ошкор фожиалар, тарих, бугун ва эртанинг бир-бирига
            кавшарланган ҳалқаси, ростлик даъвосидаги ёлғонлар, руҳ ва қондаги
            парадокслар сизни ўтмиш ва келажак куйига асир қилади, ўйлатади,
            йиғлатади ва аччиқ-аччиқ кулдиради. Ўтган аср бошида Германияда
            ўқиган талабалар, улар маслаги ва фожиали қисмати бугунги ёшлар
            мақсади билан бир тарозига тортилади.
          </p>

          <div>
            <p>Mavjud farmat</p>

            <div>
              <Book />
              <p>Qog'oz kitob</p>
              <p className="text-[14px] font-semibold text-[#C9AC8C]">
                {formatNumber(Number(book?.price))} so'm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pb-16">
        <p className="ml-20 mt-20 flex text-[#C9AC8C]">Sizga yoqishi mumkin</p>

        <div
          className="absolute inset-0 z-0 scale-x-[-1] bg-[length:600px_700px] bg-[position:850px_130px] bg-no-repeat"
          style={{ backgroundImage: "url('/bg.svg')" }}
        ></div>

        <ScrollArea className="w-full whitespace-nowrap">
          <ul className="scrollbar-custome relative z-10 ml-20 mt-5 flex items-center gap-[41px]">
            {books?.map((book) => (
              <li
                key={book?._id}
                className="transform cursor-pointer rounded-lg p-4 shadow-md transition-transform hover:scale-105"
                onClick={() => navigate(`/book/${book._id}`)}
              >
                <img
                  src={book?.img}
                  alt={book?.title}
                  className="h-60 w-[165px] rounded-lg object-cover"
                />
                <h3 className="mt-2 font-dancing text-[20px] font-normal uppercase">
                  {book?.title}
                </h3>
                <p className="text-[12px] font-normal capitalize text-gray-600">
                  {book?.author}
                </p>
              </li>
            ))}
          </ul>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
}

export default BookDetails;

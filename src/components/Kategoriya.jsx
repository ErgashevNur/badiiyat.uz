import { useState } from "react";
import { Link } from "react-router-dom";

function Kategoriya() {
  const category = [
    { title: "Badiiy kitoblar", href: "/" },
    { title: "Jadid adabiyoti", href: "/authors" },
    { title: "Temuriylar davri", href: "#" },
    { title: "Sovet davri", href: "#" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center gap-[40px] text-center">
      <h2 className="font-dancing text-[35px] uppercase text-[#C9AC8C]">
        Asosiy Kategoriyalar
      </h2>

      <ul className="flex items-center gap-[60px] font-steinbeck text-[20px]">
        {category.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`cursor-pointer tracking-wide transition-colors duration-200 ${
              activeIndex === index ? "text-[#C9AC8C]" : "hover:text-[#C9AC8C]"
            }`}
          >
            <Link to={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kategoriya;

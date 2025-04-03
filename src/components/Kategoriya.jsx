function Kategoriya() {
  const category = [
    { title: "Temuriylar davri", href: "/" },
    { title: "Jadid adabiyoti", href: "/" },
    { title: "Sovet davri", href: "/" },
    { title: "Mustaqillik davri", href: "/" },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-[40px] text-center">
      <h2 className="font-dancing text-[35px] uppercase text-[#C9AC8C]">
        Asosiy Kategoriyalar
      </h2>

      <ul className="font-steinbeck flex items-center gap-[60px] text-[20px]">
        {category.map((Kategoriya, index) => (
          <li className="tracking-wide hover:text-[#C9AC8C]" key={index}>
            <a href={Kategoriya.href}>{Kategoriya.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Kategoriya;

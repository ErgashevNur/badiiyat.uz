function Kategoriya() {
  return (
    <div className="flex flex-col items-center justify-center gap-[40px] text-center">
      <h2 className="text-[31px]">Asosiy Kategoriyalar</h2>

      <ul className="flex items-center gap-[60px] text-[20px]">
        <li>
          <a href="">Temuriylar davri</a>
        </li>
        <li>
          <a href="">Jadid adabiyoti</a>
        </li>
        <li>
          <a href="">Sovet davri</a>
        </li>
        <li>
          <a href="">Mustaqillik davri</a>
        </li>
      </ul>
    </div>
  );
}

export default Kategoriya;

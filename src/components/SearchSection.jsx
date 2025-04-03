import { Search } from "lucide-react";

function SearchSection({ className }) {
  return (
    <div
      className={` ${className}flex shadow[0px_0px_0px_3px_rgba(77,77,77,1)] max-w-[1200px] flex-col items-center justify-center rounded-xl bg-[#191919] px-32 shadow-lg`}
    >
      <h2 className="font-dancing pt-[39px] text-center text-[31px] uppercase text-[#C9AC8C]">
        Qidirish
      </h2>

      <div className="flex items-center gap-[15px] pb-[35px] pt-[13px]">
        <input
          className="w-[709px] rounded-xl bg-[#404040] px-[27px] py-[12px]"
          placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
          type="text"
        />

        <button className="flex items-center gap-3 rounded-xl bg-[#C9AC8C] px-[37px] py-[12px] text-[16px] text-[#3C2710]">
          <Search className="text-[#3C2710]" /> Izlash
        </button>
      </div>
    </div>
  );
}

export default SearchSection;

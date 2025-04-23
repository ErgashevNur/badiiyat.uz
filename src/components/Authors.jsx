import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

function Authors() {
  const [Authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://library-project-6agw.onrender.com/get_authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("API xatosi:", error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <Button className="mx-auto flex items-center" disabled>
        <Loader2 className="animate-spin" />
        Malumotlar yuklanmoqda...
      </Button>
    );

  return (
    <div className="p-5">
      <ul className="mx-auto grid grid-cols-6 space-y-2">
        {Authors.map((author) => (
          <li key={author._id} className="rounded-lg p-4 shadow-md">
            <img
              src={author.img}
              alt={author.full_name}
              className="h-60 w-full rounded-lg object-cover"
            />
            <h3 className="font-dancing text-center text-[20px] font-normal uppercase">
              {author.full_name}
            </h3>
            <p className="text-center text-[12px] font-light capitalize text-gray-600">
              {new Date(author.dateOfBirth).getFullYear()} -{" "}
              {new Date(author.dateOfDeath).getFullYear()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Authors;

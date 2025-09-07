"use client";
import { Heart } from "lucide-react";
import { useState } from "react";

function Page() {
  const initialData = [
    {
      id: 1,
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1752133039/euxctibmklvnye68iixi.png",
      desc: "Generate an image of a boy playing with cat on the street in the style 3D style.",
      likes: 270,
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1750853764/nyt0cleyc8dritrc8bg3.png",
      desc: "Generate an image of a boy playing football in the style Realistic.",
      likes: 201,
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/djbvf02yt/image/upload/v1750770567/d44nbdoap2c0fq8hlvtc.png",
      desc: "Generate an image of A cat chasing a rat while running on water in the style Anime style.",
      likes: 125,
    },
  ];

  const [creations, setCreations] = useState(
    initialData.map((item) => ({ ...item, liked: false }))
  );

  const toggleLike = (id) => {
    setCreations((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              liked: !item.liked,
              likes: item.liked ? item.likes - 1 : item.likes + 1,
            }
          : item
      )
    );
  };

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-2xl font-semibold text-slate-700">Creations</h1>

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll p-3 gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {creations.map((item) => (
          <div key={item.id} className="relative group w-full">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={item.img}
              alt="generated"
            />
            <div className="absolute bottom-0 top-0 right-0 left-0 flex gap-2 items-end justify-end group-hover:justify-between p-3 group-hover:bg-gradient-to-b from-transparent to-black/80 text-white rounded-lg transition-all">
              <p className="text-sm hidden group-hover:block">{item.desc}</p>
              <div
                className="flex gap-1 items-center cursor-pointer"
                onClick={() => toggleLike(item.id)}
              >
                <p>{item.likes}</p>
                <Heart
                  className={`min-w-5 h-5 hover:scale-110 transition-colors ${
                    item.liked ? "text-red-500" : "text-white"
                  }`}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;

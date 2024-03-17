import Banner from "../shared/Banner";
import Calculator from "../shared/Calculator";
import { Data } from "../../data/Data";
import Cards from "../shared/Cards";
import { useState } from "react";

export default function Home() {
  const [wishToCook, setWishToCook] = useState([]);

  const handleMakeWish = (wishItem) => {
    const newWishItem=[...wishToCook,wishItem]
    setWishToCook(newWishItem)
  };
  return (
    <div className="mb-28">
      <div>
        <Banner />
      </div>
      <div className="mt-32">
        <div className="text-center space-y-5">
          <h1 className="text-4xl font-bold">Our Recipes</h1>
          <h1 className="w-2/3 mx-auto">
            A recipe is simply defined as a set of instructions with a list of
            ingredients used to prepare a particular food, dish or drink. People
            use recipes to replicate foods they enjoy that they otherwise do not
            know how to make. Chefs use recipes to make sure a dish tastes the
            same each time it is ordered.
          </h1>
        </div>
        <div className="md:flex gap-4 mt-14">
          <div className="grid grid-cols-2 md:w-2/3 gap-7">
            {Data.map((d) => (
              <Cards d={d} key={d._id} handleMakeWish={handleMakeWish} wishToCook={wishToCook}/>
            ))}
          </div>
          <div className=" md:w-1/3">
            <Calculator wishToCook={wishToCook} />
          </div>
        </div>
      </div>
    </div>
  );
}

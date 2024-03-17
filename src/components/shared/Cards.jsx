import { CiTimer } from "react-icons/ci";
import { FaFireAlt } from "react-icons/fa";



export default function Cards({ d }) {
  return (
    <div className="p-4 drop-shadow-lg shadow-black border-2 rounded-lg mx-auto">
      <div className="space-y-6">
        <img
          src={d.picture}
          alt=""
          className="w-full bg-cover h-48 rounded-2xl"
        />
        <h1 className="text-2xl font-bold">{d.name}</h1>
        <h1>{d.about.slice(0, 80)}</h1>
        <hr />
      </div>
      <div className="py-4">
        <h1 className="text-lg font-bold">
          Ingredients: {d.ingredients.length}
        </h1>
        <ul>
          {d.ingredients.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <hr />
      <div>
        <div className="flex items-center justify-between my-4">
            <h1 className="flex flex-row items-center gap-3"><CiTimer/>{d.preparing_time} minutes</h1>
            <h1 className="flex flex-row items-center gap-3"><FaFireAlt/>{d.calories} calories</h1>
        </div>
        <button className="bg-zinc-700 text-white py-2 px-3 rounded-2xl">Want to Cook</button>
      </div>
    </div>
  );
}

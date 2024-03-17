import { useState } from "react";

export default function Calculator({ wishToCook }) {
  const [preparingItem, setPreparingItem] = useState([]);

  const handleCookingItem = (item) => {
    const newPreparingItem = [...preparingItem, item];
    setPreparingItem(newPreparingItem);
  };


  return (
    <div className="text-center border-2 rounded-lg min-h-72">
      <div className="my-2 min-h-40">
        <h1 className="text-xl font-semibold my-2">
          Want to cook: {wishToCook.length}
        </h1>
        <hr className=" mx-10" />
        <table className="w-full">
          <tr className="flex justify-evenly text-start">
            <th className="py-2 px-2"></th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Calories</th>
            <th className="py-2 px-2 w-20"></th>
          </tr>
          {wishToCook.map((wish) => (
            <>
              <tr className="flex justify-evenly text-slate-400">
                <td className="py-2 px-2">{wish._id}</td>
                <td className="py-2 px-2">{wish.name}</td>
                <td className="py-2 px-2">{wish.preparing_time} minutes</td>
                <td className="py-2 px-2">{wish.calories} calories</td>
                <td className="py-2 px-2">
                  {wishToCook.length != 0 && (
                    <button
                      onClick={() => handleCookingItem(wish)}
                      className="py-1 px-2 drop-shadow-lg rounded-xl text-black bg-orange-300"
                    >
                      Preparing
                    </button>
                  )}
                </td>
              </tr>
            </>
          ))}
        </table>
      </div>
      <div className="my-2 min-h-40">
        {" "}
        <h1 className="text-xl font-semibold my-2">Currently cooking: 02</h1>
        <hr className=" mx-10" />
        <table className="w-full">
          <tr className="flex justify-evenly ">
            <th className="py-2 px-2"></th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Calories</th>
          </tr>
          {preparingItem.map((wish) => (
            <>
              <tr className="flex justify-evenly text-slate-400">
                <td className="py-2 px-2">{wish._id}</td>
                <td className="py-2 px-2">{wish.name}</td>
                <td className="py-2 px-2">{wish.preparing_time} minutes</td>
                <td className="py-2 px-2">{wish.calories} calories</td>
              </tr>
            </>
          ))}
        </table>
      </div>
    </div>
  );
}

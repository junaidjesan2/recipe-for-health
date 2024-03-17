export default function Calculator() {
  return (
    <div className="text-center border-2 rounded-lg min-h-72">
      <div className="my-2 min-h-40">
        <h1 className="text-xl font-semibold my-2">Want to cook: 01</h1>
        <hr className=" mx-10"/>
        <table className="w-full">
          <tr className="flex justify-evenly">
            <th className="py-2 px-2"></th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Calories</th>
            <th className="py-2 px-2"></th>
          </tr>
        </table>
      </div>
      <div className="my-2 min-h-40">
        {" "}
        <h1 className="text-xl font-semibold my-2">Currently cooking: 02</h1>
        <hr className=" mx-10"/>
        <table className="w-full">
          <tr className="flex justify-evenly">
            <th className="py-2 px-2"></th>
            <th className="py-2 px-2">Name</th>
            <th className="py-2 px-2">Time</th>
            <th className="py-2 px-2">Calories</th>
          </tr>
        </table>
      </div>
    </div>
  );
}

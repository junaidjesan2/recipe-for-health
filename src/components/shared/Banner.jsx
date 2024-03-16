import React from "react";

export default function Banner() {
  return (
    <div className="bg-[linear-gradient(rgba(49,84,44,0.2),rgba(16,71,52,0.7)),url('https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZnxlbnwwfDB8MHx8fDA%3D')] h-[600px] w-[1320px] bg-no-repeat bg-cover rounded-lg mx-auto">
      <div className="pt-36 w-2/3 mx-auto text-center">
      <h1 className="text-4xl w-fit mx-auto text-white font-bold">Explore your cooking skills with best healthy recipes</h1>
      <h1 className="text-xl w-fit mx-auto text-white">
        {" "}
        In her recipe, the actor begins by adding 2 cups of chicken broth, a can
        of coconut cream, 2 spoons of curry powder, and a pinch of pepper in a
        pan.
      </h1>
      </div>
      <div className="flex flex-row gap-5 md:w-72 pt-6 mx-auto font-bold">
        <button className="py-3 px-2 bg-stone-400 border-2 rounded-3xl">Explore Now</button>
        <button className="py-3 px-2 border-2 rounded-3xl">Our Feedback</button>
      </div>
    </div>
  );
}

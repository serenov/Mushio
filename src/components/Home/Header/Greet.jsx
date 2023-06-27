import React, { useState } from "react";

export default function Greet() {
  const [user, setUser] = useState("Bharath");
  return (
    <div id="Greet" className="px-8 pt-5 pb-3 flex-[3]">
      <div className="font-mon  font-bold">
        <span className="text-32xl">Hello, </span>
        <span className=" text-32xl text-pr-500">{user}</span>
      </div>
      <p className="font-rob text-14xl text-ntr-500">
        Mushio greets you good morning
      </p>
    </div>
  );
}

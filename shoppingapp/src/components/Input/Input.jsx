import React from "react";
import { useState } from "react";

function Input() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [InputPrice, setInputPrice] = useState();

  const submitHandler = function (e) {
    e.preventDefault();
    console.log(inputValue, InputPrice);
    setData([
      ...data,
      {
        name: inputValue,
        price: InputPrice,
      },
    ]);
    setInputValue("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Please write the product"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="number"
          placeholder="Please write the price"
          value={InputPrice}
          onChange={(e) => setInputPrice(e.target.value)}
        />
        <button>ADD</button>
      </form>
      {data.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </>
  );
}

export default Input;

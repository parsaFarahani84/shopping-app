import React, { useReducer } from "react";
import { useState } from "react";
import classes from "./Input.module.css";
import { MdModeEditOutline } from "react-icons/md";
import { BsFillTrash2Fill } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdPricetag } from "react-icons/io";

function Input() {
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState();
  const [InputPrice, setInputPrice] = useState();

  const newproduct = function (name) {
    return { id: Date.now(), name: name };
  };

  const reducer = function (state, action) {
    if ((action.type = "ADD")) {
      let updatedName = newproduct(action.payload.name);
      let updatedPrice = state.price;
      state = [
        ...state,
        {
          name: updatedName,
          price: updatedPrice,
        },
      ];
      console.log(state);
    }
    if ((action.type = "")) {
    }

    return data;
  };
  const [state, dispatch] = useReducer(reducer, data);

  const submitHandler = function (e) {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { name: inputValue, price: InputPrice } });
    setData([
      {
        name: inputValue,
        price: InputPrice,
      },
      ...data,
    ]);
    setInputValue("");
    setInputPrice("");
  };

  return (
    <div className={classes.main}>
      <div>
        <form onSubmit={submitHandler} className={classes.input}>
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
          <button className={classes.addbtn}>Add</button>
        </form>
        <div className={classes.mother}>
          {state.map((item) => (
            <div className={classes.container} key={Math.random()}>
              <span className={classes.whole}>
                <div className={classes.info}>
                  <p>
                    <HiShoppingCart style={{ marginRight: "0.5rem" }} />
                    Product: {item.name}
                  </p>
                  <p>
                    <IoMdPricetag style={{ marginRight: "0.5rem" }} />
                    Price: ${item.price}
                  </p>
                </div>
                <div className={classes.icons}>
                  <MdModeEditOutline
                    style={{ fontSize: "1.3rem", cursor: " pointer" }}
                  />
                  <BsFillTrash2Fill
                    style={{ fontSize: "1.3rem", cursor: " pointer" }}
                  />
                  <div className={classes.select}>
                    <p>S</p>
                  </div>
                </div>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Input;

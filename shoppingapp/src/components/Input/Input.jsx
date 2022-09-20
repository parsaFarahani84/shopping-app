import React, { useReducer } from "react";
import { useState } from "react";
import classes from "./Input.module.css";
import {
  BsFillTrash2Fill,
  BsCheckCircleFill,
  BsFillCalendar2WeekFill,
  BsPhone,
} from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import { IoMdPricetag } from "react-icons/io";
// import { IoPhonePortraitOutline } from "react-icons/io";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import {
  FaAppleAlt,
  FaCar,
  FaMoneyBillWave,
  FaDog,
  FaTv,
  FaTshirt,
  FaHome,
} from "react-icons/fa";

function Input() {
  const [inputValue, setInputValue] = useState();
  const [InputPrice, setInputPrice] = useState();

  const icons = {
    apple: <FaAppleAlt className={classes.ic} />,
    car: <FaCar className={classes.ic} />,
    money: <FaMoneyBillWave className={classes.ic} />,
    calendar: <BsFillCalendar2WeekFill className={classes.ic} />,
    animal: <FaDog className={classes.ic} />,
    phone: <HiShoppingCart className={classes.ic} />,
    tv: <FaTv className={classes.ic} />,
    home: <FaHome className={classes.ic} />,
    cloth: <FaTshirt className={classes.ic} />,
  };

  const newproduct = function (name, price) {
    return {
      id: Date.now(),
      name: name,
      price: price,
      complete: false,
      iconShow: false,
      icon: <HiShoppingCart />,
    };
  };

  const reducer = function (state, action) {
    if (action.type === "ADD") {
      let updatedName = newproduct(action.payload.name, action.payload.price);

      if (action.payload.name && action.payload.price) {
        return [updatedName, ...state];
      }
    }
    if (action.type === "DELETE") {
      state = state.filter((item) => item.id !== action.payload.id);
      return state;
    }
    if (action.type === "DONE") {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    }
    if (action.type === "ICONS") {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, iconShow: !item.iconShow };
        }
        return item;
      });
    }
    if (action.type === "ICON") {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, icon: action.payload.icon, iconShow: false };
        }
        console.log(item.icon);
        return item;
      });
    }
    if (action.type === "EDIT") {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          console.log(action.payload.id, item.id);
        }
        return item;
      });
    }

    return state;
  };

  const [state, dispatch] = useReducer(reducer, []);

  const submitHandler = function (e) {
    e.preventDefault();

    dispatch({ type: "ADD", payload: { name: inputValue, price: InputPrice } });

    setInputValue("");
    setInputPrice("");
  };

  return (
    <div className={classes.main}>
      <div>
        <form onSubmit={submitHandler} className={classes.input}>
          <>
            <input
              type="text"
              placeholder="Please enter the product"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <input
              type="number"
              placeholder="Please enter the price"
              value={InputPrice}
              onChange={(e) => setInputPrice(e.target.value)}
            />
            <button className={classes.addbtn}>Add</button>
          </>
        </form>

        <div className={classes.mother}>
          {state.map((item) => (
            <div style={{ opacity: item.complete ? "0.5" : "1" }}>
              <div className={classes.container} key={Math.random()}>
                {item.iconShow ? (
                  <div className={classes.selectIcon}>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.apple },
                        })
                      }
                    >
                      {icons.apple}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.animal },
                        })
                      }
                    >
                      {icons.animal}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.calendar },
                        })
                      }
                    >
                      {" "}
                      {icons.calendar}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.car },
                        })
                      }
                    >
                      {icons.car}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.cloth },
                        })
                      }
                    >
                      {icons.cloth}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.home },
                        })
                      }
                    >
                      {icons.home}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.money },
                        })
                      }
                    >
                      {icons.money}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.phone },
                        })
                      }
                    >
                      {icons.phone}
                    </div>
                    <div
                      className={classes.parent}
                      onClick={() =>
                        dispatch({
                          type: "ICON",
                          payload: { id: item.id, icon: icons.tv },
                        })
                      }
                    >
                      {icons.tv}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <span className={classes.whole}>
                  <div className={classes.info}>
                    <p>
                      {item.icon}
                      Product: {item.name}
                    </p>
                    <p>
                      <IoMdPricetag />
                      Price: ${item.price}
                    </p>
                  </div>
                  <div className={classes.icons}>
                    <BsFillTrash2Fill
                      style={{ fontSize: "1.3rem", cursor: " pointer" }}
                      onClick={() =>
                        dispatch({ type: "DELETE", payload: { id: item.id } })
                      }
                    />
                    <BsCheckCircleFill
                      style={{ fontSize: "1.3rem", cursor: " pointer" }}
                      onClick={() =>
                        dispatch({ type: "DONE", payload: { id: item.id } })
                      }
                    />
                    <TbDotsCircleHorizontal
                      style={{
                        fontSize: "1.5rem",
                        cursor: " pointer",
                        marginLeft: "0.7rem",
                      }}
                      onClick={() =>
                        dispatch({
                          type: "ICONS",
                          payload: { id: item.id },
                        })
                      }
                    />
                  </div>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Input;

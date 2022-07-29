import React from "react";
import "../Style/Basket.css";
import { Button } from "@mui/material";
import star from "../Images/star.svg";
import halfStar from "../Images/star (1).png";
import { useSelector, useDispatch } from "react-redux";
import { acDeleteInCard } from "../../Redux/Card";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";

export function Basket() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const card = useSelector((state) => state.card);
  const { enqueueSnackbar } = useSnackbar();

  if (card.length === 0) {
    navigate("/");
  }
  return (
    <div>
      <h1 id="your-order">
        {card.length !== 0
          ? `Siznig savatchangizda ${card.length}  ta maxsulot bor`
          : "Savatingiz xozircha bo'sh"}{" "}
        !
      </h1>

      <div id="baskets">
        {card.reverse().map((item, index) => {
          return (
            <div id="basket-main" key={index}>
              <div id="basket-card">
                <figure id="-basket-main-img">
                  <img src={item.image} alt="" />
                </figure>
                <span id="basket-fur-name">{item.name}</span>
                <p id="basket-fur-model">{item.model}</p>
                <div id="basket-card-bottom">
                  <div id="cost-div">
                    <p>${item.cost}</p>
                    <s>${item.discount}</s>
                  </div>
                  <div id="star-div">
                    <figure>
                      <img src={star} alt="" />
                    </figure>
                    <figure>
                      <img src={star} alt="" />
                    </figure>
                    <figure>
                      <img src={star} alt="" />
                    </figure>
                    <figure>
                      <img src={star} alt="" />
                    </figure>
                    <figure>
                      <img src={halfStar} alt="" />
                    </figure>
                  </div>
                </div>
              </div>
              <div id="costBtn">
                <div>
                  <Button variant="outlined">+</Button>
                </div>
                <div>
                  <Button variant="outlined" color="error">
                    -
                  </Button>
                </div>
              </div>
              <div id="delete-btn-div">
                <Button
                  variant="outlined"
                  onClick={() => {
                    dispatch(acDeleteInCard(item.id));
                  }}
                >
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div id="bottom-btn" style={card.length === 0 ? { display: "none" } : {}}>
        <Button
          onClick={() => {
            dispatch({ type: "CLEAR_CARD" });
            navigate("/");
            enqueueSnackbar("Your cart is empty", {
              variant: "success",
              autoHideDuration: 5000,
            });
          }}
          variant="outlined"
        >
          Delete All Products
        </Button>
      </div>
    </div>
  );
}

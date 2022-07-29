import React from "react";
import "../Style/SofaCompanenta.css";
import star from "../Images/star.svg";
import halfStar from "../Images/star (1).png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import { Checkbox } from "@mui/material";
import { Loading } from "../Loading/Loading";
import { useDispatch } from "react-redux";
import { acAddCard } from "../../Redux/Card";

export function SofaCompanenta() {
  const dispatch = useDispatch();

  const data = [
    {
      id: 1,
      name: "Chair",
      model: "Minimal LCD chair",
      cost: "623",
      discount: "768",
      image:
        "https://img.freepik.com/free-psd/armchair-pillow_176382-886.jpg?size=338&ext=jpg&ga=GA1.2.1364139111.1652518018",
    },
    {
      id: 2,
      name: "Chair",
      model: "Minimal LCD chair",
      cost: "234",
      discount: "450",
      image:
        "https://img.freepik.com/free-psd/chair-pillow_176382-872.jpg?size=338&ext=jpg&ga=GA1.2.1364139111.1652518018",
    },
    {
      id: 3,
      name: "Chair",
      model: "Minimal LCD chair",
      cost: "673",
      discount: "789",
      image:
        "https://img.freepik.com/free-psd/comfortable-modern-chair-isolated_176382-1215.jpg?size=338&ext=jpg&ga=GA1.2.1364139111.1652518018",
    },
    {
      id: 4,
      name: "Chair",
      model: "Minimal LCD chair",
      cost: "325",
      discount: "546",
      image:
        "https://img.freepik.com/free-psd/chair-pillow_176382-876.jpg?size=338&ext=jpg&ga=GA1.2.1364139111.1652518018",
    },
  ];
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  return (
    <>
      {data.map((item, index) => {
        const basket = () => {
          dispatch(acAddCard(item));
          enqueueSnackbar("Maxsulot savatga qoshildi 👌🏻", {
            autoHideDuration: "500",
            variant: "success",
          });
        };

        const likedd = () => {
          enqueueSnackbar("Maxsulotga like bosildi ❤️", {
            autoHideDuration: "2000",
            variant: "success",
          });
        };

        const seeProduct = () => {
          navigate("/seeProduct");
        };

        return (
          <div id="sofa-main" key={index}>
            <div id="sofa-card">
              <figure id="main-img">
                <img src={item.image} alt="" />
              </figure>
              <span id="fur-name">{item.name}</span>
              <p id="fur-model">{item.model}</p>
              <div id="sofa-card-bottom">
                <div id="cost-div">
                  <p>{item.cost}</p>
                  <s>{item.discount}</s>
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
            <div id="hover-menuu">
              <div onClick={likedd}>
                <Checkbox
                  id="chekLike"
                  icon={<FavoriteBorderIcon style={{ color: "black" }} />}
                  checkedIcon={<FavoriteIcon style={{ color: "black" }} />}
                />
              </div>
              <div onClick={basket}>
                {/* <a href="#sofa-main"></a> */}
                <ShoppingBasketIcon />
              </div>
              <div onClick={seeProduct}>
                <RemoveRedEyeIcon />
              </div>
              <div>
                <CachedIcon />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

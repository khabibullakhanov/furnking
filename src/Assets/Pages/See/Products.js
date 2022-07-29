import React from "react";
import "./Products.css";
import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";


export function Products() {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const deleteSeeCard = () => {
    enqueueSnackbar("Can't turn it off yet, sorry 😝", {
      variant: "error",
    });
  }

  const editSeeCard = () => {
    navigate("/blog/editSeeCard")
  }


  return (
    <div id="Products">
      <div id="product-page-header">

        <div id="product-main">
          <div id="product-main-inside">
            <div id="product-left">
              <div id="product-main-inside-left">
                <div>
                  <img src={'https://img.freepik.com/free-psd/chair-pillow_176382-875.jpg?size=338&ext=jpg&ga=GA1.2.533793274.1657615922'} alt="" />
                </div>
                <div>
                  <img src={'https://img.freepik.com/free-psd/chair-pillow_176382-873.jpg?size=338&ext=jpg&ga=GA1.2.533793274.1657615922'} alt="" />
                </div>
                <div>
                  <img src={'https://img.freepik.com/free-psd/chair-pillow_176382-871.jpg?size=338&ext=jpg&ga=GA1.2.533793274.1657615922'} alt="" />
                </div>
              </div>
              <div id="product-main-inside-center">
                <img src={'https://img.freepik.com/free-psd/chair-pillow_176382-871.jpg?size=338&ext=jpg&ga=GA1.2.533793274.1657615922'} alt="" />
              </div>
            </div>

            <div id="product-main-inside-right">
              <div id="product-shoes-cost">
                <h1>Chair</h1>
                <div>
                  <div id="product-color-select-div">
                    <span id="cost-tag-name">Rangi</span>
                    <div id="product-color-select">
                      <div>
                      </div>
                      <div>
                      </div>
                      <div>
                      </div>
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="product-cost">
                  <span id="cost-tag-name">Narxi</span>
                  <h1>399 000</h1>
                  <s>499 000</s>
                </div>
              </div>
              <div id="product-size-main">
                <span id="cost-tag-name">Mebelning Turlari</span>
                <select id="select-furniture">
                  <option value="">Fabric and Leather</option>
                  <option value="">Wood</option>
                  <option value="">Walnut</option>
                  <option value="">Poplar</option>
                  <option value="">Oak</option>
                  <option value="">Spruce</option>
                </select>
                <div id="product-buy-button">
                  <button onClick={deleteSeeCard}>O'chirish</button>
                  <button onClick={editSeeCard}>Tahrirlash</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

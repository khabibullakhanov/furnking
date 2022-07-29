import React, { useState } from "react";
import "../Style/Edite.css";
import NumberFormat from "react-number-format";
import { Button } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AddIcon from "@mui/icons-material/Add";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useNavigate } from 'react-router';
import { useSnackbar } from "notistack";

export function Shop() {
  const [newCard, setNewCard] = useState({});
  const [newImg, setNewImg] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();


  const Created = (e) => {
    e.preventDefault()
    enqueueSnackbar("You have passed successfully 🥳", {
      autoHideDuration: "2000",
      variant: "success",
    })
  };
  
  const getFile = (e) => {
    e.preventDefault();
    setNewImg([...newImg, ...e.target.files]);
  };

  console.log(newImg);

  return (
    <div>
      <div id="addNewProduct">
        <div id="card-create-new-product">
          <form id="form-add-product" onSubmit={Created}>
            <div>
              <span>Maxsulot nomi*</span>
              <input
                autoComplete="off"
                placeholder="Maxsulot nomi"
                type="text"
                onChange={(e) =>
                  setNewCard({ ...newCard, name: e.target.value })
                }
              />
            </div>
            <div>
              <span>Narxi*</span>
              <NumberFormat
                placeholder="1000 sum"
                thousandSeparator={true}
                suffix=" so'm"
                onChange={(e) =>
                  setNewCard({ ...newCard, cost: e.target.value })
                }
              />
            </div>
            <div>
              <span>Chegirma*</span>
              <NumberFormat
                placeholder="100%"
                thousandSeparator={true}
                suffix="%"
                onChange={(e) =>
                  setNewCard({ ...newCard, discount: e.target.value })
                }
              />
            </div>
            <div>
              <span>Miqdori*</span>
              <NumberFormat
                placeholder="100 dona"
                thousandSeparator={true}
                suffix="dona"
                onChange={(e) =>
                  setNewCard({ ...newCard, amount: e.target.value })
                }
              />
            </div>
            <div>
              <span>Ranglar*</span>
              <select>
                <option>Barchasi</option> <option>Qizil</option>
                <option>Ko'k</option>
                <option>Yashil</option>
                <option>Sariq</option>
                <option>Jigar rang</option>
                <option>Oq</option>
                <option>Qora</option>
                <option></option>
              </select>
            </div>
            <div>
              <span>Turi*</span>
              <select>
                <option>Fabric and Leather</option> <option>Wood</option>
                <option>Walnut</option>
                <option>Poplar</option>
                <option>Oak</option>
                <option>Spruce</option>
              </select>
            </div>
            <div>
              <span>Ishlab chiqarilgan mamlakati*</span>
              <select>
                <option>Barchasi</option> <option>Turkiya</option>
                <option>Uzbekiston</option>
                <option>Rossiya</option>
                <option>AQSH</option>
              </select>
            </div>
            <div>
              <span>Ishlab chiqaruvchi*</span>
              <select>
                <option>Barchasi</option> <option>Sharq mebel</option>
                <option>G'arb mebel</option>
                <option>Shimol mebel</option>
                <option>Janub mebel</option>
              </select>
            </div>
            <div id="sendImg" className="sendImg">
              <span>Rasmlari*</span>
              <label>
                <span>
                  Upload Files or Images <AddPhotoAlternateIcon />
                </span>
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  multiple="multiple"
                  onChange={getFile}
                />
              </label>
            </div>
            <div id="uploadedImgDiv">
              <span>Maxsulot haqida*</span>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={(e) =>
                  setNewCard({ ...newCard, opinion: e.target.value })
                }
              ></textarea>
            </div>
            {newImg.map((item, index) => {
              return (
                <figure
                  key={index}
                  id="seeUploadImg"
                  style={
                    newImg.length !== 0
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <button
                    onClick={() => {
                      const MyData = [...newImg];
                      MyData.splice(index, 1);
                      setNewImg(MyData);
                    }}
                  >
                    X
                  </button>
                  <img src={URL.createObjectURL(item)} alt="" />
                  {/* {newImg.map((item, index) => {
                                return (
                                  <img src={URL.createObjectURL(item)} />
                                );
                            })} */}
                </figure>
              );
            })}

            <label
              style={
                newImg.length > 7
                  ? { display: "none" }
                  : { display: "none" } && newImg.length > 0
                  ? { display: "flex" }
                  : { display: "none" }
              }
              id="add-img-from-input"
            >
              <span>
                <AddIcon color="info" />
              </span>
              <input
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                multiple="multiple"
                onChange={getFile}
              />
            </label>
            <Button id="newThing" type="submit" variant="contained">
              Create New Card
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

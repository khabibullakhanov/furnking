import React, { useState } from 'react'
import "./Login.css"
import myImg from "../../Images/myimgs.jpg"
import aloneMan from "../../Images/alone-man.jpg"
import CameraAltIcon from '@mui/icons-material/CameraAlt';
// import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';



export function Login() {
  
  const { enqueueSnackbar } = useSnackbar();

  // // let prImg = JSON.parse(localStorage.getItem("imgProfile") || "")

  const [imgProfile, setImgProfile] = useState({
    prName: {},
    backImg:{},
  })
  console.log(imgProfile)
  // const [backImg, setBackImg] = useState([])


  // const uploadImage = (files) => {
  //   console.log(files[0]);
  // }
  // // localStorage.setItem("primg", JSON.stringify(files[0]))


  // // const getProfileImg = (event) => {
  // //   console.log(event.target.files[0]);
  // //   // setImgProfile({...imgProfile, profileimg:e.target.files[0]})
  // //   // console.log(imgProfile);
  // // }

  // const getBackImg = (e) => {
  //    setBackImg({...backImg, backimg:e.target.files[0]})  
  //   console.log(backImg);
  //   }


  return (
    <div>
      <div id='main-profile'>
        <div>
          <img src={imgProfile.backImg.size ? URL.createObjectURL(imgProfile.backImg): aloneMan} id="alone" alt="" />
          <div id='main-center'>
            {/* {imgProfile.map((item) => {
              return (
                )
              })} */}
            <img src={imgProfile.prName.size ? URL.createObjectURL(imgProfile.prName): myImg} id="myImg" alt="" />
          </div>
        </div>
        <div id='main-profile-text'>
          <h1>Your Profile</h1>
          <div>
            <p>Name: Muhammadxon</p>
            <p>Surname: Habibullaxonov</p>
            <p>Email: muhammadxon.habibullaxonov@gmail.com</p>
            <p>Pasword: ********</p>
            <div id='main-bottom'>
            <label ><span><CameraAltIcon />Change your profile image</span><input type="file" onChange={(e)=> {
              {setImgProfile({...imgProfile, prName:e.target.files[0]});enqueueSnackbar("Your profile picture has been changed 🥳", {
                autoHideDuration: "2000",
                variant: "success",
              });}
            }} accept="image/png, image/jpg, image/jpeg"
              multiple="multiple" id='hover-input' /></label>
            <label><span><AddPhotoAlternateIcon />Change your profile background image</span><input  type="file" accept="image/png, image/jpg, image/jpeg"
              multiple="multiple" id='hover-input'onChange={(e)=> 
                {setImgProfile({...imgProfile, backImg:e.target.files[0]});enqueueSnackbar("Your profile background picture has been changed 🥳", {
                  autoHideDuration: "2000",
                  variant: "success",
                })} }/></label>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

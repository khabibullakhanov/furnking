import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import "../Style/HeadertTop.css";
import mainLogo from "../Images/logo.png";
import bellImg from "../Images/Notification.svg";
import bagImg from "../Images/Vector (1).svg";
import searchIcon from "../Images/Vector.svg";
import userImg from "../Images/Vector (2).svg";
import barsImg from "../Images/bars.png";
import { Navbar } from "./Navbar";
import { useSnackbar } from "notistack";
import { useSelector } from "react-redux";
import SearchIcon from '@mui/icons-material/Search';
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Link } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { acProfile } from "../../Redux/Profile";




export function HeaderTop() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [sign, setSign] = useState(false);
  const [signData, setSignData] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [forgot, setForgot] = useState(false);
  const [loginData, setLoginData] = useState({});
  const [forgotData, setForgotData] = useState({});

  const card = useSelector((state) => state.card);

  useEffect(() => {
    localStorage.setItem("card", JSON.stringify(card));
  }, [card]);

  const basketPage = (e) => {
    navigate("/basket");
  };

  const notification = () => {
    navigate("/notification");
  };

  const loginPage = () => {
    navigate("/login");
  };

  const signUp = () => {
    setSign(!sign);
  };
  
  const signUpClose = () => {
    setSign(false);
  };
  
  const SubmitSignUp = (e) => {
    localStorage.setItem("signData", JSON.stringify({signData}))
    localStorage.setItem("imgProfile", JSON.stringify({...profilImg}) || "[]")
    e.preventDefault();
    console.log(signData);
    enqueueSnackbar("You have passed successfully 🥳", {
      autoHideDuration: "2000",
      variant: "success",
    });
    window.location.reload()
  };

  const LoginPage = (e) => {
    e.preventDefault();
    setLogin(!login);
  };

  const SubmitLogin = (e) => {
    e.preventDefault();
    setLogin(false);
    enqueueSnackbar("You have passed successfully 🥳", {
      autoHideDuration: "2000",
      variant: "success",
    });
    console.log(loginData);
  };

  const loginClose = () => {
    setLogin(false);
    console.log(loginData);
  };

  const createAcc = () => {
    setSign(true);
    setLogin(false);
  };

  const forgotOpen = (e) => {
    e.preventDefault();
    setForgot(!forgot);
    setLogin(false);
  };

  const closeForgot = () => {
    setForgot(false);
  };

  const sendBtnForgot = (e) => {
    e.preventDefault();
    setForgot(false);
    enqueueSnackbar("You have passed successfully 🥳", {
      autoHideDuration: "2000",
      variant: "success",
    });
    console.log(forgotData);
  };

  const sendForgot = (e) => {
    e.preventDefault();
    setForgot(false);
    enqueueSnackbar("You have passed successfully 🥳", {
      autoHideDuration: "2000",
      variant: "success",
    });
    console.log(forgotData);
  };

  const [profilImg, setProfileImg] = useState()

  const getFile = (e) => {
    // dispatch(acProfile())
    setSignData({...signData, imgname: e.target.files[0]})
    setProfileImg({...profilImg, profileimg: e.target.files[0]})
  }

  const data = [
    {
      id:1,
      name:"Muhammadxon",
    },
    {
      id:2,
      name:"Oybek",
    },
    {
      id:3,
      name:"Qobiljon",
    },
    {
      id:4,
      name:"Kamil",
    },
  ]

  const[search, setSearch] = useState({})

  const submitFormData = (e) => {
      data.filter((item) => {
          {item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase)}
    })
    localStorage.setItem("searched", JSON.stringify({search}))
    e.preventDefault()  
    console.log(search);
  }

  return (
    <div>
      <div
        style={sign ? { display: "block" } : { display: "none" }}
        id="login-modal-contener"
      >
        <form className="create-new-user" onSubmit={SubmitSignUp}>
          <button type="button" onClick={signUpClose}>
            X
          </button>
          <h2>Ro`yxatdan O`tish (Sign Up)</h2>
          <input
            type="text"
            placeholder="Familya"
            // autocomplete="off"
            // autocapitalize="on"
            // name="fam"
            onChange={(e) => setSignData({ ...signData, fam: e.target.value })}
          />
          <input
            type="text"
            placeholder="Ism"
            // autocomplete="off"
            // autocapitalize="on"
            // name="name"
            onChange={(e) => setSignData({ ...signData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="email@mail.com or Telephone"
            // autocomplete="off"
            // autocapitalize="on"
            // name="login"
            onChange={(e) =>
              setSignData({ ...signData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Parol"
            // autocomplete="off"
            // autocapitalize="on"
            // name="password"
            onChange={(e) =>
              setSignData({ ...signData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Parolni takrorlang"
            // autocomplete="off"
            // autocapitalize="on"
            // name="password"
            onChange={(e) =>
              setSignData({ ...signData, repeatpassword: e.target.value })
            }
          />
          <label id="for-profile-img">
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

          <input type="submit" value="Sign Up (Create account)" />
        </form>
      </div>

      <div
        style={login ? { display: "block" } : { display: "none" }}
        id="sign-modal-contener"
      >
        <form id="login-modal" onSubmit={SubmitLogin}>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Login"
            onChange={(e) =>
              setLoginData({ ...loginData, loginName: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            // autocomplete="off"
            // autocapitalize="off"
            // name="password"
            // autofocus
            onChange={(e) =>
              setLoginData({ ...loginData, loginpassword: e.target.value })
            }
          />

          <div id="login-remember">
            <label>
              <input type="checkbox" />
              <span>Remember me ?</span>
            </label>

            <button type="button" onClick={forgotOpen}>
              Forgot Password ?
            </button>
          </div>

          <input type="submit" value="LOGIN" />

          <button type="button" onClick={createAcc}>
            create new account
          </button>

          <button type="button" onClick={loginClose}>
            X
          </button>
        </form>
      </div>

      <div
        style={forgot ? { display: "block" } : { display: "none" }}
        id="forgot-modal-contener"
      >
        <form className="reset-pasvord-form" onSubmit={sendForgot}>
          <button type="button" onClick={closeForgot}>
            X
          </button>
          <h1>Write your email</h1>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) =>
              setForgotData({ ...forgotData, repeatpassword: e.target.value })
            }
          />
          <button onClick={sendBtnForgot}>Send</button>
        </form>
      </div>

      <div id="header-top">
        <div>
          <p>Welcome to our online shop</p>
        </div>
        <div id="header-top-right">
          <select>
            <option value="">English</option>
            <option value="">Russian</option>
            <option value="">Uzbek</option>
            <option value="">Turk</option>
          </select>
          <div id="header-top-right-user">
            <p
              onClick={LoginPage}
            >
              Login
            </p>
            <p>or</p>
            <p onClick={signUp}>
              Sign Up
              {/* <a href="" id="signupp">Sign Up</a> */}
            </p>
          </div>
        </div>
      </div>
      <div id="header-searchbar">
        <div id="header-searchbar-logo">
          <Link to="/" ><img src={mainLogo} alt="" /><h2>Furniking</h2></Link>
        </div>
        <form id="navbar-form" onSubmit={submitFormData}>
          <input type="text" placeholder="Search here..." />
          <select id="navbar-select">
            <option value="">Oshxona</option>
            <option value="">Yotoqxona</option>
            <option value="">Mexmonxona</option>
            <option value="">Yuvinish xonasi</option>
            <option value="">Zal</option>
          </select>
          <div id="navbar-search-icon">
            <button><img src={searchIcon} alt="" /></button>
          </div>
        </form>

        <div id="header-searchbar-right">
          <div id="basket-contener">
            <img src={bagImg} alt="" onClick={basketPage} />
            <sup id="subHeader">{card.length}</sup>
          </div>

          <img src={bellImg} alt="" onClick={notification} />
          <img src={userImg} alt="" onClick={loginPage}/>
        </div>
      </div>
      <div id="navbar-inside">
        <div id="navbar-dropdown">
          <img id="bars-img" src={barsImg} alt="" />
          <p>ALL COLLECTIONS</p>
        </div>
        <Navbar />
      </div>
    </div>
  );
}

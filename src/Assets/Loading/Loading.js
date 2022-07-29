import React from "react";
import "./Loading.css"



export function Loading({load}) {
  return (
    <div className={load ? "loadingg activ" : "loadingg"}>
      <div class="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
      </div>
  );
}

import React from 'react';
import "../Style/Notification.css"
import notFounded from "../Images/404.jpg"


export function Notification() {
  return (
    <div id='notification-main'>
      <img id='notfounded' src={notFounded} />
    </div>
  )
}

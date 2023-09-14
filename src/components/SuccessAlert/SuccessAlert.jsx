import React, { useState } from 'react';
import '../SuccessAlert/successalert.css'
function SuccessAlert({ show,message }) {
  return show ? (
    <div className="success-alert">
       <p>{message}</p>
    </div>
  ) :null;
}

export default SuccessAlert;
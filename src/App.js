import './App.css';
import Routers from "./routers";
import React, { useState, useEffect } from "react";

// thông báo
import swal from 'sweetalert';
// Api
import staffsApi from "../src/api/StaffsApi";



function App() {

  return (
    <div className="App">
        <Routers />
    </div>
  );
}

export default App;

import './App.css';
import Routers from "./ruoters";


// Api
import staffsApi from "../src/api/StaffsApi";
import React, { useState,useEffect } from "react";


function App() {
  const [getStaffs, setStaffs] = useState([]);

  // hàm hiển thị
  useEffect(() => {
      console.log(staffsApi.getAllStaffs);
    // fetch(staffsApi.getAllStaffs())
    //   .then(response => response.json())
    //   .then(data => setStaffs(data)
    //   .then(console.log(getStaffs)));
      
    //
    // const getStaffs = async () => {
    //   try {
    //     const staffs = await (await (await staffsApi.getAllStaffs()).data);
    //     setStaffs(staffs);
    //   } catch (error) {

    //   }
    // };
    // getStaffs();
  }, [])

  return (
    <div className="App">

      <Routers
        listStaffs={getStaffs}

      />



    </div>
  );
}

export default App;

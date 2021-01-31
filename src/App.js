import './App.css';
import Routers from "./ruoters";
import React, { useState,useEffect } from "react";

// Api
import staffsApi from "../src/api/StaffsApi";



function App() {
  const [getStaffs, setStaffs] = useState([]);

  // hàm hiển thị
  useEffect(() => {
      // console.log(staffsApi.getAllStaffs());
      // console.log("hiep");

    // fetch(staffsApi.getAllStaffs())
    //   .then(response => response.json())
    //   .then(data => {
    //     setStaffs(data);
    //     console.log(data)
    //   }
    //   );

      staffsApi.getAllStaffs()
        .then(response => {
          setStaffs(response.data);
        });
      
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

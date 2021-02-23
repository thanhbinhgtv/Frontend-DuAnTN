import './App.css';
import Routers from "./ruoters";
import React, { useState, useEffect } from "react";

// thông báo
import swal from 'sweetalert';
// Api
import staffsApi from "../src/api/StaffsApi";



function App() {
  const [getStaffs, setStaffs] = useState([]);

  // hàm hiển thị
  useEffect(() => {

    // CÁI NÀY DÙNG HIỂN THỊ MÀ KHÔNG ĐƯỢC. KHÔNG HIỂU VÌ SAO :(
    // fetch(staffsApi.getAllStaffs)
    //   .then(response => response.json())
    //   .then(data =>  this.setStaffs({data : data}));

    //Hiển thị nhân viên
    staffsApi.getAllStaffs()
      .then(response => {
        setStaffs(response.data);
      });
  }, [])

  // HÀM HIỂN THỊ NHÂN VIÊN
  const onDeleteStaffs = (id) => {
    console.log(id)
    swal({
      title: "Bạn có chắc không?",
      text: "Xóa nhân viên khỏi danh sách!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`${staffsApi.onDeleteStaffs}/${id}`, {
            method: "DELETE",
          })
            .then(response => response.json())
            .then(data => swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            }));
          const newStaffs = getStaffs.filter(post => post.id !== id);
          setStaffs(newStaffs);
        } else {
          swal("Xóa thất bại!");
        }
      }
      )
  }

  return (
    <div className="App">
      <Routers
        listStaffs={getStaffs}
        onDeleteStaffs={onDeleteStaffs}
      />
    </div>
  );
}

export default App;

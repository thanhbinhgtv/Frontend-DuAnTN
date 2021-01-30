import http from "./axiosHttp";

const getAllStaffs = () => {
    return http.get("/super-admin/staffs");
};


export default {
    getAllStaffs,
  };
  
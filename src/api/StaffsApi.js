import http from "./axiosHttp";

const getAllStaffs = () => {
    return http.get("/super-admin/staffs");
};

const getDeleteStaffs = (id) => {
    return http.delete("/super-admin/staffs/"+id);
};

export default {
    getAllStaffs,
    getDeleteStaffs,
  };
  
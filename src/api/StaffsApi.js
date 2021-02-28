import axiosHttp from "./axiosHttp";

const staffsAPI = {
    getAllStaffs : (param) => {
        return axiosHttp.get(`/super-admin/staffs?${param}`);
    },
    
    getDeleteStaffs : (id) => {
    return axiosHttp.delete(`/super-admin/staffs/${id}`);
    }

    // getAddStaffs 
}

export default staffsAPI;
  
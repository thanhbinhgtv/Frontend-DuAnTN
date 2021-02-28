import React, { useEffect, useState } from 'react'
import Pagination from '../../../../../pagination/index'
import queryString from 'query-string'
import {
    BrowserRouter as 
    Link
} from "react-router-dom";
import swal from 'sweetalert';
import StaffsApi from '../../../../../api/StaffsApi';

const ListStaffs = () => {
    const [getStaffs, setStaffs] = useState([]);
    const [pagination, setPagination] = useState({
        page: 0,
        limit: 2,
        totalRows: 1,
    });
    const [filters, setFilters] = useState({
        page: 0,
        limit: 2,
    })

    function handlePageChange(newPage) {
        setFilters({
            ... filters,
            page: newPage,
        })
    }
    //Hàm hiển thị
    useEffect(() => {
        const listStaffs = async () => {
            try{
                const param = queryString.stringify(filters);
                const response = await StaffsApi.getAllStaffs(param);
                setStaffs(response.data);
                // setPagination(response);
            }catch(error){
                console.log("Failed to fetch Staffs list :", error);
            }
        }
        listStaffs();
      },[filters]);

    //Hàm delete
    const onDeleteStaffs = (id) => {
        swal({
        title: "Bạn có chắc không?",
        text: "Xóa nhân viên khỏi danh sách!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
            if (willDelete) {
                StaffsApi.getDeleteStaffs(id)
                    .then(swal("Bạn đã xóa thành công", {
                    icon: "success",
                }));
            const newStaffs = getStaffs.filter(post => post.id !== id);
            setStaffs(newStaffs);
            window.location = "http://localhost:3000/admin/listStaffs";
            } else {
            swal("Xóa thất bại!");
            }
        }
        )
    }

    return (
        <div>
        {/* Bảng SP */}
        <section id="two">
            <div className="inner">
                <div className="container-xl">
                    <div className="table-responsive">
                        <div className="table-wrapper">
                            <div className="table-title">
                                <div className="row">
                                    <div className="col-sm-6"><h2><b>Danh sách nhân viên</b></h2></div>
                                    <div className="col-sm-3">
                                        {/* <Link className="Link" to="/AddProduct">
                                            <button className="AddSP-btnadd">
                                                Thêm Sản Phẩm
                                            </button>
                                        </Link> */}
                                    </div>
                                    <div className="col-sm-3">
                                        <div className="search-box">
                                            {/* <i className="material-icons"></i> */}
                                            <input type="text" className="form-control" placeholder="Search…" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <table className="table table-striped table-hover table-bordered">
                                <thead>
                                    <tr className="abc">
                                        <th>ID</th>
                                        <th>Tên Nhân Viên</th>
                                        <th>CMT/CCCD</th>                                       
                                        <th>Email</th>
                                        {/* <th>Mật Khẩu</th> */}
                                        <th>Ngày Sinh</th>
                                        <th>Giới Tính</th>
                                        <th>Chức Vụ</th>
                                        <th>Địa Chỉ</th>
                                        <th>Số ĐT</th>
                                        <th>Hình Ảnh</th>
                                        <th>Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getStaffs.map((post, index) =>(
                                        <tr key={index}> 
                                            <td>{post.staffId}</td>
                                            <td>{post.name}</td>
                                            <td>{post.cardId}</td>                                           
                                            <td>{post.email}</td>
                                            {/* <td>{post.pass}</td> */}
                                            <td>{post.dob}</td>
                                            <td>{post.gender = 1 ? "nam" : "nữ"}</td>
                                            <td>{post.role = 1 ? "Admin" : "Nhân Viên"}</td>
                                            <td>{post.address}</td>
                                            <td>{post.phone}</td>
                                            <td>{post.image}</td>
                                            <td>
                                                    <Link to="/detailproduct">
                                                    {/* onClick={() => DetailProduct(post.id)}  */}
                                                        <button className="view" title="View" data-toggle="tooltip">
                                                            <i className="material-icons">Chi Tiết</i>
                                                        </button>
                                                    </Link>
                                                  
                                                     <Link to="/EditProduct">
                                                     {/* onClick={() => onEditProduct(post.id)} */}
                                                        <button  className="edit" title="Edit" data-toggle="tooltip">
                                                            <i className="material-icons">Cập Nhật</i>
                                                        </button>
                                                    </Link> 
                                                   
                                                    <button  onClick={() => onDeleteStaffs(post.staffId)} className="delete" title="Delete" data-toggle="tooltip" >
                                                       <i className="material-icons">Xóa</i>
                                                    </button>
                                                </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Hiển thị <b>5</b> trong số <b>25</b> mục nhập</div>
                                <ul className="pagination">
                                    <Pagination
                                        pagination={pagination}
                                        onPageChage={handlePageChange}
                                    />
                                    {/* <li className="page-item disabled"><a href=" #"><i className="fa fa-angle-double-left" /></a></li>
                                    <li className="page-item"><a href=" #" className="page-link">1</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">2</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">3</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">4</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">5</a></li>
                                    <li className="page-item"><a href=" #" className="page-link"><i className="fa fa-angle-double-right" /></a></li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Table */}


    </div>
)
}

export default ListStaffs

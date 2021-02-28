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
                                    {/* <div className="col-sm-3">
                                        <div className="search-box">
                                         
                                            <input type="text" className="form-control" placeholder="Search…" />
                                        </div>
                                    </div> */}
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
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
  <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z"/>
</svg>
                                                        </button>
                                                    </Link> 
                                                   
                                                    <button  onClick={() => onDeleteStaffs(post.staffId)} className="delete" title="Delete" data-toggle="tooltip" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
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

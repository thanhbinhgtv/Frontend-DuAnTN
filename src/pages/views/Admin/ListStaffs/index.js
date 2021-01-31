import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const ListStaffs = ({listStaffs}) => {
    console.log(listStaffs)
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
                                        {/* <th>Email</th>
                                        <th>Mật Khẩu</th>
                                        <th>Tên Nhân Viên</th>
                                        <th>Mã định danh</th>
                                        <th>Ngày Sinh</th>
                                        <th>Giới Tính</th>
                                        <th>Chức Vụ</th>
                                        <th>Địa Chỉ</th>
                                        <th>Số ĐT</th>
                                        <th>Hình Ảnh</th> */}
                                        {/* <th>Hành Động</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {listStaffs.map((post, index) =>(
                                        <tr key={index}> 
                                            <td>{post.name}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="clearfix">
                                <div className="hint-text">Hiển thị <b>5</b> trong số <b>25</b> mục nhập</div>
                                <ul className="pagination">
                                    <li className="page-item disabled"><a href=" #"><i className="fa fa-angle-double-left" /></a></li>
                                    <li className="page-item"><a href=" #" className="page-link">1</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">2</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">3</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">4</a></li>
                                    <li className="page-item"><a href=" #" className="page-link">5</a></li>
                                    <li className="page-item"><a href=" #" className="page-link"><i className="fa fa-angle-double-right" /></a></li>
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

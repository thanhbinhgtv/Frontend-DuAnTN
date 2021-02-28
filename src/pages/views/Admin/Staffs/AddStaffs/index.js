import React, { useState } from 'react'
import axios from 'axios';
import swal from 'sweetalert';

const AddStaffs = () => {

    const [product, setProduct] = useState({ name: '' });
    const [image1, setImage] = useState("");
    const [url, setUrl] = useState('/uploads/Home_page_f4d8f55876.jpg');

    const hamChange = (e) => {
        var { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
            image: url
        })
    }
    const API_PRODUCT = "http://localhost:1337/upload/files";
    const imageChange = (e) => {
        setImage(e.target.files[0]);
        const image = e.target.files[0];
        if (image !== undefined) {
            fetch(`${API_PRODUCT}?name=${image.name}`)
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        setUrl(data[0].url);
                        ssProduct(data[0].url);
                    } else {
                        const formData = new FormData();
                        formData.append('files', image);
                        axios
                            .post(`http://localhost:1337/upload`, formData, {
                                headers: { 'Content-Type': 'multipart/form-data' },
                            })
                            .then(res => {
                                console.log(res);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                            .then(
                                () => {
                                    fetch(`${API_PRODUCT}?name=${image.name}`)
                                        .then(response => response.json())
                                        .then(data => {
                                            setUrl(data[0].url);
                                            ssProduct(data[0].url);
                                        })
                                }
                            );
                    }

                });
        } else {
            setUrl('/uploads/Home_page_f4d8f55876.jpg');
        }
        ssProduct(url);
    }
    const ImageThumb = ({ image }) => {
        return <img src={URL.createObjectURL(image)} alt={image.name} style={{ height: 180 }} />;
    };

    const ssProduct = (bien) => {
        setProduct({
            ...product,
            image: bien
        })
    }

    // lấy giá trị của input và gán vào state
    // const onHandleChange = (event) => {
    //   const { name, value } = event.target;
    //   setProdduct({
    //     ...Prodduct,
    //     [name]: value
    //   });
    // }
    // Bắt sự kiện submit và bắn dữ liệu từ con lên cha
    const onHandleSubmit = (e) => {
        console.log(e);
        e.preventDefault();
        if (product.category === null || product.category === undefined || product.category === '0') {
            swal("bạn chưa chọn thể loại sách.");
            return;
        }
        //  onAddProdduct(product);
    }
    return (
        <div>
            <div className="container">
                <section className="panel panel-default">
                    <div className="panel-heading">
                        <h1 className="panel-title">THÊM MỚI NHÂN VIÊN</h1>
                    </div>
                    <div className="panel-body">
                        <form onSubmit={onHandleSubmit} action="designer-finish.html" className="form-horizontal" role="form">
                            
                            {/* MÃ NHÂN VIÊN */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">MÃ NHÂN VIÊN</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} disabled required type="text" className="form-control" name="staff_id" id="staff_id" placeholder="MÃ NHÂN VIÊN" />
                                </div>
                            </div>

                            {/* TÊN NHÂN VIÊN */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">TÊN NHÂN VIÊN</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} required type="text" className="form-control" name="name" id="name" placeholder="TÊN NHÂN VIÊN" />
                                </div>
                            </div>

                            {/* CMND / CCCD */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">CMND / CCCD</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} required type="text" className="form-control" name="card_id" id="card_id" placeholder="CHỨNG MINH NHÂN DÂN / CĂN CƯỚC CÔNG DÂN" />
                                </div>
                            </div>

                            {/* EMAIL */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">EMAIL</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} required type="text" className="form-control" name="email" id="email" placeholder="EMAIL" />
                                </div>
                            </div>

                            {/* NGÀY SINH */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">NGÀY SINH</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} required type="date" className="form-control" name="dob" id="dob" placeholder="NGÀY - THÁNG - NĂM SINH" />
                                </div>
                            </div>

                            {/* GIỚI TÍNH */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">GIỚI TÍNH</label>
                                <div className="col-sm-9">
                                    {/* RADIO BOCK */}
                                    <div className="col-sm-9">
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="false" /> NAM
                            </label>
                                        <label className="radio-inline">
                                            <input type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="true" /> NỮ
                            </label>
                                    </div>
                                    {/* <input onChange={hamChange} required type="date" className="form-control" name="gender" id="gender" placeholder="GIỚI TÍNH" /> */}
                                </div>
                            </div>

                            {/* CHỨC VỤ */}
                            <div className="form-group">
                                {/* <label htmlFor="role">Vị trí</label> */}
                                <label htmlFor="tech" className="col-sm-3 control-label">CHỨC VỤ</label>
                                <div className="col-sm-3">
                                    <select className="form-control" name="role" id="role" onChange={hamChange}>
                                        <option value='0'>-- Chọn chức vụ --</option>
                                        <option value='1'>ADMIN</option>
                                        <option value='2'>NHÂN VIÊN </option>
                                        <option value='3'>NGƯỜI DÙNG</option>
                                    </select>
                                </div>
                            </div>

                            {/* ĐỊA CHỈ */}
                            <div className="form-group">
                                <label htmlFor="about" className="col-sm-3 control-label">ĐỊA CHỈ</label>
                                <div className="col-sm-9">
                                    <textarea onChange={hamChange} required name="address" id="address" className="form-control" defaultValue={""} />
                                </div>
                            </div>

                            {/* SĐT */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">SỐ ĐIỆN THOẠI</label>
                                <div className="col-sm-9">
                                    <input onChange={hamChange} required type="text" className="form-control" name="phone" id="phone" placeholder="SỐ ĐIỆN THOẠI (10 SỐ)" />
                                </div>
                            </div>

                            {/* GIÁ SẢN PHẨM */}
                            {/* <div className="form-group">
                <label className="col-sm-3 control-label">Detail</label>
                <div className="col-sm-3">
                  <label className="control-label small" htmlFor="date_start">Product price: </label>
                  <input onChange={hamChange} required type="number" className="form-control" name="price" id="date_start" placeholder="Giá sản phẩm" />
                </div>
                <div className="col-sm-3">
                  <label className="control-label small" htmlFor="date_finish">Amount:</label>
                  <input disabled type="text" className="form-control" name="date_finish" id="date_finish" placeholder="Số lượng" />
                </div>
              </div>  */}

                            {/* SỐ LƯƠNG SẢN PHẨM */}
                            <div className="form-group">
                                <label htmlFor="name" className="col-sm-3 control-label">ẢNH</label>
                                <div className="col-sm-3">
                                    <label className="control-label small" htmlFor="file_img">Image ( jpg / png ):</label>
                                    <input onChange={imageChange} required type="file" className="form-control" name="image" id="image" />  {/* khi nào để ảnh thì thay thànhtype="file" */}
                                    {image1 && <ImageThumb image={image1} />}
                                </div>{/* ẢNH SẢN PHẨM */}
                            </div>

                            {/* <div className="form-group">
                <label htmlFor="tech" className="col-sm-3 control-label">PRODUCT CATEGORY</label>
                <div className="col-sm-3">
                  <select className="form-control">
                    <option value>Tất cả</option>
                    <option value="texnolog2">Sách dài</option>
                    <option value="texnolog3">Sách ngắn</option>
                  </select>
                </div>
              </div> */}
                            <hr />
                            <div className="form-group">
                                <div className="col-sm-offset-3 col-sm-9">
                                    <button type="submit" className="btn btn-primary">THÊM NHÂN VIÊN</button>
                                </div>
                            </div>

                        </form>
                    </div>{/* panel-body // */}
                </section>{/* panel// */}
            </div> {/* container// */}

        </div>
    )
}

export default AddStaffs

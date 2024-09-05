import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../admin/admin.css";
import Sidebar from '../../components/admin_components/sidebar/Sidebar';
import Home from '../../components/admin_components/sidebar/Home';
import { useParams } from "react-router";
import AdminProducts from './Admin_Products';



const Admin = () => {

    const [toggle, setToggle] = useState(true);
    const Toggle = () => {
        setToggle(!toggle);
    }

    const { activepage } = useParams()

    return (
        <>
            <div className="container-fluid bg-secondary min-vh-100">
                <div className="row">
                    {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                        <Sidebar activepage= {activepage} />
                    </div>}

                    {toggle && <div className="col-4 col-md-2"></div>}

                    <div className="col">
                        {activepage === "adminhome" && <Home toggle ={Toggle} />}
                        {activepage === "admin_products" && <AdminProducts />}
                        {/* {activepage === "adminreport" && <Adminrep toggle ={Toggle} />}
                        {activepage === "admincustomers" && <Admincus toggle ={Toggle} />} */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;
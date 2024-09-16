import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "../admin/admin.css";
import Sidebar from '../../components/admin_components/sidebar/Sidebar';



const AdminProducts = () => {

    const [toggle, setToggle] = useState(true);
    const Toggle = () => {
        setToggle(!toggle);
    }

  return (
    <div className="container-fluid bg-secondary min-vh-100">
      <div className="row">
                {toggle && <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
                    <Sidebar />
                </div>}

                {toggle && <div className="col-4 col-md-2"></div>}

                <div className="col">
                    <AdminProducts Toggle={Toggle} />
                </div>
            </div>
    </div>
  )
}

export default AdminProducts;

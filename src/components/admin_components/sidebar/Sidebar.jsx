import React from 'react';
import { RiAdminFill } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Sidebar = ({ activepage }) => {
    return (
        <div className='bg-white p-2'>
            <div className='m-2'>
                <RiAdminFill className='me-3 fs-4' />
                <span className='brand-name fs-4'>Tipo</span>
            </div>
            <hr className='text-dark' />
            <div className='list-group list-group-flush'>
                <a className='list-group-item py-2'>
                    <Link to="/admin" className="nodeco"><i className='bi bi-speedometer2 fs-5 me-3 text-dark'></i>
                        <span className="text-dark">Dashboard</span></Link>
                </a>
                <a className='list-group-item py-2 '>
                    <Link to="/" className="nodeco"><i className='bi bi-house fs-5 me-3 text-info-emphasis'></i>
                        <span className="text-dark">Home</span></Link>
                </a>

                {
                    activepage === 'admin_products' ?
                        <a className='list-group-item py-2'>
                            <i className='bi bi-table fs-5 me-3 text-info'></i>
                            <span className="text-dark">Products</span>
                        </a>
                        :
                        <Link
                            to='/admin/admin_products'
                            className='nodeco'>
                            <a className='list-group-item py-2'>
                                <i className='bi bi-table fs-5 me-3 text-info'></i>
                                <span className="text-dark">Products</span>
                            </a>
                        </Link>
                }












                <a className='list-group-item py-2'>
                    <Link to="/adminproducts" className="nodeco"><i className='bi bi-clipboard-data fs-5 me-3'></i>
                        <span className="text-dark">Report</span></Link>
                </a>
                <a className='list-group-item py-2'>
                    <Link to="/" className="nodeco"><i className='bi bi-people fs-5 me-3 text-secondary'></i>
                        <span className="text-dark">Customers</span></Link>
                </a>
                <a className='list-group-item py-2'>
                    <Link to="/login" className="nodeco"><i className='bi bi-power fs-5 me-3 text-danger'></i>
                        <span className="text-dark">Logout</span></Link>
                </a>
            </div>
        </div>
    )
}

export default Sidebar;

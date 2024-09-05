import React from 'react';
import "../ClientUserProfile/Useraddress.css";
import { IoMdAdd } from "react-icons/io";
import { FaRegTrashAlt } from "react-icons/fa";

const Useraddress = () => {


    const [show, setShow] = React.useState(false)

    const savedaddress = [
        {
            AddressLine1: 'AddressLine'
        }
    ]

    return (
        <>
            <div>
                <div className='useraddress'>
                    {
                        !show && <h1 className='mainhead1'>Your Address</h1>
                    }
                    {
                        !show &&

                        <div className='addressin'>
                            {
                                savedaddress.map((item, index) => {
                                    return (
                                        <div className='address' key={index}>
                                            <span>{item.AddressLine1}</span>


                                            <div className='delbtn'><FaRegTrashAlt className="delete-icon" /></div>
                                        </div>

                                    )
                                })
                            }
                        </div>
                    }

                    {
                        !show && <div className='addnewbtn'

                            onClick={() => setShow(true)}
                        >
                            <IoMdAdd className="add-icon" />


                        </div>
                    }
                    {
                        show &&

                        <div className='addnew'>
                            <h1 className='mainhead1'>Add New Address</h1>
                            <div className='form'>

                                <div className='form-group'>
                                    <label htmlFor='addressline1'>New Address</label>
                                    <input type="text" required />
                                </div>
                            </div>

                            <button className='mainbutton1'
                                onClick={() => setShow(false)}
                            >Save</button>
                        </div>
                    }
                </div>

            </div>
        </>
    )
}

export default Useraddress;

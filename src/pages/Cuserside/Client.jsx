import "../Cuserside/Client.css";
import Navbar from "../../components/GeneralComponents/Navbar";
import Footer from "../../components/GeneralComponents/Footer";
import { useParams } from "react-router";
import Useraccsettings from "../../components/ClientUserProfile/Useraccsettings";
import Userchangepassword from "../../components/ClientUserProfile/Userchangepassword";
import YourOrders from "../../components/ClientUserProfile/Userorders";
import Useraddress from "../../components/ClientUserProfile/Useraddress";
import UserSidebar from "../../components/ClientUserProfile/Usersidebar";
import Userinformation from "../../components/ClientUserProfile/Userinformation";


const Client = () => {

    const { activepage } = useParams()

    return (
        <>
            <div className='userprofile'>
                <Navbar />

                <div className='userprofilein'>
                    <div className='left'>
                        <UserSidebar activepage= {activepage} />
                    </div>
                    <div className='right'>
                        {/* Welcome User Steven */}
                        {activepage === 'accountinformation' && <Userinformation />}
                        {activepage === 'accountsettings' && <Useraccsettings />}
                        {activepage === 'changepassword' && <Userchangepassword />}
                        {activepage === 'yourorders' && <YourOrders />}
                        {activepage === 'address' && <Useraddress />}
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}


export default Client;
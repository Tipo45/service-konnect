import "../../components/ClientUserProfile/Userinformation.css";
import { useUserData } from "../../hooks/useUserDate";

const Userinformation = () => {
  const{data} = useUserData()
  return (
    <div className="accountinformation">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <div className="displayed">{data?.first_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="name">Last Name</label>
          <div className="displayed">{data?.last_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <div className="displayed"></div>
        </div>


      </div>
    </div>
  );
};
export default Userinformation;

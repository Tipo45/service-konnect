import "../../components/ArtisanUserProfile/Artisanaccinfo.css";
import { useArtisanData } from "../../hooks/useArtisanData";


const Artisanaccinfo = () => {
  const {data} = useArtisanData()
  return (
    <div className="artisanaccountinformation">
      <h1 className="mainhead1">Personal Information</h1>

      <div className="form">
      <div className="form-group">
          <label htmlFor="username">User Name</label>
          <div className="displayed">{data?.username}</div>
        </div>

        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <div className="displayed">{data?.first_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <div className="displayed">{data?.last_name}</div>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <div className="displayed">{data?.category}</div>
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone/Mobile</label>
          <div className="displayed">{data?.phone_number}</div>
        </div>

        <div className="form-group">
          <label htmlFor="businessname">Business Name</label>
          <div className="displayed">{data?.name_of_business}</div>
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <div className="displayed">{data?.address}</div>
        </div>
      </div>
    </div>
  );
};

export default Artisanaccinfo;


const Artisanchangepassword = () => {
  return (
    <>
      <div>
        <form action="#">
          <div className="accountsettings">
            <h1 className="mainhead1">Change of Password</h1>

            <div className="form">
              <div className="form-group">
                <label htmlFor="name">
                  Enter Old Password <span className="text-danger">*</span>
                </label>
                <input type="text" name="name" id="name" required maxLength="8" />
              </div>

              <div className="form-group">
                <label htmlFor="name">
                  Enter New Password <span className="text-danger">*</span>
                </label>
                <input type="text" name="name" id="name" required minLength="8" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  Confirm New Password<span className="text-danger">*</span>
                </label>
                <input type="text" name="phone" id="phone" required minLength="8" />
              </div>
            </div>

            <button type="buttton" className="btn">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Artisanchangepassword;

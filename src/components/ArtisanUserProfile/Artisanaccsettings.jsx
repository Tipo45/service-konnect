import "../../components/ClientUserProfile/Useraccsettings.css";

const Artisanaccsettings = () => {

    return (
        <>
            <form action="#">
                <div className='artisanaccountsettings'>

                    <h1 className='mainhead1'>Personal Information</h1>

                    <div className='form'>

                        <div className='form-group'>
                            <label htmlFor='name'>First Name <span className="text-danger">*</span></label>
                            <input type='text' name='name' id='name' required maxLength="15" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Last Name <span className="text-danger">*</span></label>
                            <input type='text' name='name' id='name' required maxLength="15" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone/Mobile <span className="text-danger">*</span></label>
                            <input type='text' name='phone' id='phone' required maxLength="11" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email <span className="text-danger">*</span></label>
                            <input type='email' name='email' required id='email' />
                        </div>


                    </div>

                    <button type="buttton" className='btn'>Save Changes</button>
                </div>
            </form>

        </>
  )
}

export default Artisanaccsettings;

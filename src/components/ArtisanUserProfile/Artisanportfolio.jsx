import React from 'react';
import "../../components/ArtisanUserProfile/ArtisanPortfolio.css";

const Artisanportfolio = () => {

    // const [nameofbusiness, setNameofbusiness] = useState('');
    // const [businesslocation, setBusinesslocation] = useState('');
    // const [mobile, setMobile] = useState('');
    // const [errors, setErrors] = useState({ nameofbusiness: '', businesslocation: '', mobile: '' });

    // const validateSetting = () => {
    //     let valid = true;
    //     let errors = { nameofbusiness: '', businesslocation: '', mobile: '' };

    //     if (nameofbusiness.length === 0) {
    //         errors.firstname = 'Business name is required.';
    //         valid = false;
    //     } else if (nameofbusiness.length > 0 && nameofbusiness.length < 3) {
    //         errors.nameofbusiness = 'Business name must be at least 3 characters.';
    //         valid = false;
    //     }

    //     if (businesslocation.length === 0) {
    //         errors.businesslocation = 'Location is required.';
    //         valid = false;
    //     }

    //     if (mobile.length === 0) {
    //         errors.mobile = 'Mobile is required.';
    //         valid = false;
    //     } else if (mobile.length > 0 && mobile.length < 10) {
    //         errors.mobile = 'Mobile must be at least 11 characters.';
    //         valid = false;
    //     }
        

    //     if (valid) {
    //         setErrors({ nameofbusiness: '', businesslocation: '', mobile: '' });
    //     } else {
    //         setErrors(errors);
    //     }

    //     return valid;
    // };

    // const handleSubmitt = (q) => {
    //     q.preventDefault();
    //     if (validateSetting()) {
    //         // Perform the actual form submission, e.g., API call
    //         console.log('Changes made with:', { nameofbusiness, businesslocation, mobile });
    //         // Here you might handle success/failure responses from an API call
    //     }
    // };

    return (
        <>
            <div>
            <form action="#">
                <div className='artisanportfolio'>

                    <h1 className='mainhead1'>Business Information</h1>

                    <div className='form'>

                        <div className='form-group'>
                            <label htmlFor='name'>Name of Business <span className="text-danger">*</span></label>
                            <input type='text' name='name' id='name' required />
                           
                        </div>

                        <div className='form-group'>
                            <label htmlFor='name'>Business Location <span className="text-danger">*</span></label>
                            <input type='text' name='name' id='name' required />
            
                        </div>

                        <div className='form-group'>
                            <label htmlFor='phone'>Phone/Mobile <span className="text-danger">*</span></label>
                            <input type='text' name='phone' id='phone'  maxLength="11" required />
                            
                        </div>

                        <div className='form-group'>
                            <label htmlFor='email'>Email <span className="text-danger">*</span></label>
                            <input type='email' name='email' id='email' required />
                        </div>

                        <div className='form-group'>
                            <label htmlFor='description'>Description <span className="text-danger">*</span></label>
                            <textarea name='textarea' id='description' required className='description'></textarea>
                        </div>

                        <div className="form-group">
                            <h5>Social Media Contact (optional)</h5>
                        <label htmlFor='whatsapp-no'>Whatsapp Number</label>
                            <input type='text' name='whatsapp-number' id='description' maxLength="11" />
                            <label htmlFor='insta-name'>Instagram Handle</label>
                            <input type='text' name='instagram-name' id='description' />
                        </div>


                    </div>

                    <button type="buttton" className='btn'>Save Changes</button>
                </div>
            </form>
            </div>
        </>
    )
}

export default Artisanportfolio;

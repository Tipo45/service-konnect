import "../../components/ArtisanUserProfile/ArtisanPortfolio.css";

const Artisanportfolio = () => {


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

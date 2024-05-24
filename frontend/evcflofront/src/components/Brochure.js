import React from 'react';
import SubTitle from './SubTitle';
import { useNavigate } from 'react-router-dom';

const Brochure = () => 
{
    const navigate = useNavigate();  // Get the useNavigate hook

    const goToSupportPage = () => {
        navigate('/support');  // Navigate to the Support page
    } 

    const appStyle = {
        //display: 'flex',
        //flexDirection: 'column',
        //alignItems: 'center',
        margin: '0 auto',
        maxWidth: 'auto',
        padding: '0 2rem',
      };
    
      const textStyle = {
        lineHeight: '1.5em',
        fontSize: '1.125rem',
        margin: '1em 0',
        textAlign: 'right', // Change to "right" alignment
      };

    return (
        <section className="section" id="Brochure">
            <SubTitle title="Brochure" />
            <center>
            <div className="brochure">
            <div className="app" style={appStyle} id='FAQ'></div>
                <div className="product-details">
                    <h2>Product Details</h2>
                    <ul>
                        <li>Minimal size, streamline design.</li>
                        <li>Home and workplace use intelligent app control.</li>
                        <li>DC residual current protection.</li>
                        <li>Anti welding protection.</li>
                        <li>Wireless communication (Wi-Fi/Bluetooth).</li>
                        <li>Smart charge/scheduled charge by app.</li>
                        <li>Type 1/Type 2 charging cable.</li>
                        <li>App operation/RFID authentication/Plug & play.</li>
                        <li>Wall mount/floor stand installation.</li>
                    </ul>
                    <div className="screenRight" style={textStyle}></div>
                    <input type="submit" value="Back" className="form-submit" onClick={goToSupportPage} />
                </div>
            </div>
            </center>
        </section>
    );

}

export default Brochure;
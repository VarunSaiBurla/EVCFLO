import React from 'react';
import { useNavigate } from 'react-router-dom';
import Title from '../components/Title';


const Support = () => {

  const navigate = useNavigate();  // Get the useNavigate hook

  const goToHomePage = () => {
    navigate('/');  // Navigate to the Home page
  }

  const goToFAQPage = () => {
    navigate('/faq');  // Navigate to the View page
  }

  const goToBrochurePage = () => {
    navigate('/brochure');  // Navigate to the View page
  }

  const goToGetQuotesPage = () => {
    navigate('/getquotes');  // Navigate to the View page
  }

  const goToSustainabilityPage = () => {
    navigate('/sustainability');  // Navigate to the View page
  }
  
  const goToContactUsPage = () => {
    navigate('/ContactUs');  // Navigate to the View page
  }

  return (
    <>
      <section className="section" id="Support">
        <Title title="Support" />
        <div class="left-side">
        <Title subTitle="Hey There!" />
        <Title subTitle="How can we Help You?" />
        </div>

        <div class="right-side">
          <p>🙂</p>
        </div>
        
        <div className="diamond-buttons">
          <div className="side-buttons">
            <input type="submit" value="Brochure" className="btn-diamond form-submit" onClick={goToBrochurePage} />
            <input type="submit" value="Home" className="btn-diamond form-submit" onClick={goToHomePage} />
            <input type="submit" value="GetQuotes" className="btn-diamond form-submit" onClick={goToGetQuotesPage} />
          </div>
          <div className="down-buttons">
            <input type="submit" value="FAQ" className="btn-diamond form-submit" onClick={goToFAQPage} />
            <input type="submit" value="Sustainability" className="btn-diamond form-submit" onClick={goToSustainabilityPage} />
            <input type="submit" value="Contact Us" className="btn-diamond form-submit" onClick={goToContactUsPage} />
          </div>
          </div>

      </section>
      {/* <div id='sp'></div> */}
    </>
  );
};



export default Support;

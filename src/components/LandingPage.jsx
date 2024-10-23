import image1 from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image4 from '../assets/4.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="section" style={{ backgroundImage: `url(${image1})` }}></div>
      <div className="section" style={{ backgroundImage: `url(${image2})` }}></div>
      <div className="section" style={{ backgroundImage: `url(${image3})` }}></div>
      <div className="section" style={{ backgroundImage: `url(${image4})` }}></div>
    </div>
  );
};

export default LandingPage;

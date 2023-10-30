import './Footer.css'

function FooterSection({ title, children }) {
    return (
      <div className="footer-section">
        <h2 className="footer-title">{title}</h2>
        {children}
      </div>
    );
  }
  
  function FooterLink({ label }) {
    return <div ><a className='footerLink' href="#">{label}</a></div>;
  }
  
  function SocialLink({ icon }) {
    return <a href="#" className='socialLink'><i className={`bi ${icon}`}></i></a>;
  }
export const Footer = () => {
    return (
      <footer className="main-footer">
        <div className="container">
          <div className="sub-footer">
            <FooterSection title="Kusina La Pinas">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                suscipit labore. Debitis, quidem! Obcaecati, nulla.
              </p>
            </FooterSection>
  
            <FooterSection title="Get Help">
              <div className="footer-link">
                <FooterLink label="FAQ" />
                <FooterLink label="Shipping" />
                <FooterLink label="Returns" />
                <FooterLink label="Order Status" />
                <FooterLink label="Payment Options" />
              </div>
            </FooterSection>
  
            <FooterSection title="Connect With Us">
              <div className="social">
                <SocialLink icon="bi-facebook" />
                <SocialLink icon="bi-twitter" />
                <SocialLink icon="bi-youtube" />
                <SocialLink icon="bi-linkedin" />
              </div>
              <h2 className="footer-title">Tropang SyntaxSculptor</h2>
              <p>Created by: Cristel, Jc, Geoff</p>
            </FooterSection>
          </div>
        </div>
      </footer>
    );
  }
  
  
  
//   export default Footer;
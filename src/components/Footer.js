import { Link } from 'react-router-dom';
function FooterSection({ title, children }) {
  return (
    <div className="footer-section">
      <h2 className="footer-title">{title}</h2>
      {children}
    </div>
  );
}
function SocialLink({ icon }) {
  return <a href="#" className='socialLink'><i className={`bi ${icon}`}></i></a>;
}

export const Footer = () => {
  return (
    <footer className="p-4 bg-orange-600  shadow md:flex md:items-center border-t-2 border-whitemd:justify-center  dark:bg-gray-800 bo">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <span className="text-sm text-black-500 sm:text-center dark:text-orange-600">
        <ul className="flex items-center mt-3 text-sm font-medium text-black-500 dark:text-orange-600 sm:mt-0">
        <FooterSection title="Connect With Us">
              <div className="social text-2xl space-x-3 font-bold">
                <SocialLink icon="bi-facebook" />
                <SocialLink icon="bi-twitter" />
                <SocialLink icon="bi-youtube" />
                <SocialLink icon="bi-linkedin" />
              </div>
              <h2 className="footer-title">Tropang SyntaxSculptor
              Created by: Cristel & Geoff</h2>
            </FooterSection>
        </ul>
          <Link
            to="/"
            className="hover:underline"
            >
            © 2023{' '}
           All Rights Reserved.
          </Link>
        </span>
      </div>
    </footer>
  );
};

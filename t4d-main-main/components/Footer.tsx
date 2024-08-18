import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-black-100 mt-5 border-t border-gray-100'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-6'>
      
      <div className='d-block mt-2' style={{ width: '100%' }}>
        <div style={{ paddingTop: '00px', textAlign: 'center' }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: "700" }}>Our Sponsors</h3>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '10px', gap: '50px' }}>
          <a href='https://tomnet-utc.engineering.asu.edu/' target='_blank' rel='noreferrer'>
            <img src='/tomnet.png' alt="TOMNET Logo" style={{ width: "400px", margin: "5px" }} />
          </a>
          <a href="https://www.asu.edu/" target='_blank' rel="noreferrer">
            <img src='/asu.png' alt="ASU Logo" style={{ width: "300px", margin: "5px" }} />
          </a>
          <a href='https://www.gatech.edu/' target='_blank' rel='noreferrer'>
            <img src='/gtech.png' alt="Georgia Tech Logo" style={{ width: "160px", margin: "5px" }} />
          </a>
          <a href="https://www.utexas.edu/" target='_blank' rel="noreferrer">
            <img src='/utaustin.png' alt="UT Austin Logo" style={{ width: "200px", margin: "5px" }} />
          </a>
          <a href="https://www.usf.edu/" target='_blank' rel="noreferrer">
            <img src='/usf.png' alt="USF Logo" style={{ width: "160px", margin: "5px" }} />
          </a>
        </div>
      </div>
      <div style={{ width: '100%' }}>
        <div style={{ marginBottom: '0px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '5px' }}>Have Questions or Feedback?</h2>
          <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>
            For any inquiries or feedback, please contact Dr. Irfan Batur at
            <br />
            <a href="mailto:ibatur@asu.edu" style={{ color: 'blue', textDecoration: 'underline', fontWeight: '500' }}>ibatur@asu.edu</a>
          </p>
        </div>
        <div style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
          height: '40px',
          width: '2px',
          backgroundColor: '#352c26',
          opacity: 0.2
        }}></div>
      </div>
    </div>
    <div className='flex justify-between items-center flex-wrap mt-6 border-t border-gray-100 sm:px-16 px-6 py-4'>
      <p style={{ fontSize: '0.8rem' }}>©2024 T4D. All rights reserved</p>
      <div className="footer__copyrights-link" style={{ display: 'flex', gap: '10px' }}>
        <Link href="/" className="text-gray-500" style={{ fontSize: '0.8rem' }}>
          Privacy & Policy
        </Link>
        <Link href="/" className="text-gray-500" style={{ fontSize: '0.8rem' }}>
          Terms & Condition
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;

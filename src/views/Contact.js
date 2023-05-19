import React from 'react';
import '../styles/ContactStyle.css';

export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <button>Email</button>
        <div className="image-container">
          <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=vVLtL3cAAAAJ&gmla=AHoSzlV9YJAf5GCwXvJwKDascNwXyMyNb-jNUXUdSDargPDN_uLPz9WwJBE296hWzx4MzGA3nHSlcJLwHeHrw38yH2MVcexr2pqvCUQ" target="_blank"><img src="scholar.png" alt="Google Scholar" className="ico" /></a>
          <a href="https://github.com/NickPaternoster" target="_blank"><img src="github-mark.svg" alt="Github" className="ico" /></a>
          <a href="https://www.researchgate.net/profile/Nickolas-Paternoster" target="_blank"><img src="researchgate-svgrepo-com.svg" alt="ResearchGate" className="ico" /></a>
          <a href="https://www.linkedin.com/in/nickolas-paternoster-24b3211ba/" target="_blank"><img src="Linkedin_circle.svg" alt="LinkedIn" className="ico" /></a>
        </div>
      </div>
    </>
  );
}

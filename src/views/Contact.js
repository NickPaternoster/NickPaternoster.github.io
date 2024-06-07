import React, { useState } from 'react';
import '../styles/ContactStyle.css';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [communicationType, setCommunicationType] = useState({
    academicCollaboration: false,
    researchMaterial: false,
    researchInquiry: false,
    other: false
  });

  const handleCheckboxChange = (event) => {
    setCommunicationType({
      ...communicationType,
      [event.target.name]: event.target.checked
    });
  };

  const isFormValid = name && email && message && Object.values(communicationType).some(value => value);

  return (
    <>
      <div className="contact-container">
        <p>Get in touch!</p>
        <p className="email-text">Email: njp66@cornell.edu || nickolaspaternoster@gmail.com</p>
        <div className="form-container">
          <input 
            type="text" 
            placeholder="Your name *" 
            className="input-field" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input 
            type="email" 
            placeholder="Your email *" 
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea 
            placeholder="Your message *" 
            className="message-box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <div className="reason-for-request">
            <div className="checkbox-group">
              <label>
                <input 
                  type="checkbox"
                  name="academicCollaboration"
                  checked={communicationType.academicCollaboration}
                  onChange={handleCheckboxChange}
                /> Potential Academic Collaboration
              </label>
              <label>
                <input 
                  type="checkbox"
                  name="researchMaterial"
                  checked={communicationType.researchMaterial}
                  onChange={handleCheckboxChange}
                /> Request for Research Material
              </label>
              <label>
                <input 
                  type="checkbox"
                  name="researchInquiry"
                  checked={communicationType.researchInquiry}
                  onChange={handleCheckboxChange}
                /> Research Inquiry
              </label>
              <label>
                <input 
                  type="checkbox"
                  name="other"
                  checked={communicationType.other}
                  onChange={handleCheckboxChange}
                /> Other
              </label>
            </div>
          </div>
          <button 
            onClick={() => console.log("Message Sent: ", message)}
            disabled={!isFormValid}
          >
            Send
          </button>
        </div>
        {/* <div className="image-container">
          <a href="https://scholar.google.com/citations?view_op=list_works&hl=en&user=vVLtL3cAAAAJ&gmla=AHoSzlV9YJAf5GCwXvJwKDascNwXyMyNb-jNUXUdSDargPDN_uLPz9WwJBE296hWzx4MzGA3nHSlcJLwHeHrw38yH2MVcexr2pqvCUQ" target="_blank"><img src="scholar.png" alt="Google Scholar" className="ico" /></a>
          <a href="https://github.com/NickPaternoster" target="_blank"><img src="github-mark.svg" alt="Github" className="ico" /></a>
          <a href="https://www.researchgate.net/profile/Nickolas-Paternoster" target="_blank"><img src="researchgate-svgrepo-com.svg" alt="ResearchGate" className="ico" /></a>
          <a href="https://www.linkedin.com/in/nickolas-paternoster-24b3211ba/" target="_blank"><img src="Linkedin_circle.svg" alt="LinkedIn" className="ico" /></a>
        </div> */}
      </div>
    </>
  );
}

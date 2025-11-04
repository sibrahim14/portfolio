import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import CertificateImg from "../assets/certificates.jpg";
// Example certificate data
const certificates = [
  {
    title: "intinship",
    issuer: "Udemy",
    date: "March 2025",
    image: CertificateImg,  // put your image in public/certificates/
    // link: "file:///D:/Portfolio/my-app/src/assets/Adobe_Scan_04_Nov_2025[1].pdf",
  },
  
  
];

const Certificates = () => {
  return (
    <section className="certificates-section">
      <div className="certificates-container">
        <h2 className="certificates-title">My Certificates</h2>
        <p className="certificates-subtitle">
          Here are some of my verified achievements and professional certifications.
        </p>

        <div className="certificates-grid">
          {certificates.map((cert, index) => (
            <div className="certificate-card" key={index}>
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-image"
              />
              <div className="certificate-content">
                <h3>{cert.title}</h3>
                <p className="issuer">
                  {cert.issuer} • {cert.date}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-link"
                  >
                    View Certificate <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;

import React from "react";
import { Icon } from "antd";
import "./footer.css";

const icons = [
  {
    icon: "twitter",
    link: "https://twitter.com/0xura"
  },
  {
    icon: "github",
    link: "https://github.com/xura"
  },
  {
    icon: "linkedin",
    link: "https://linkedin.com/in/xura/"
  }
];

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        {icons.map((item, index) => (
          <a key={index} href={item.link} className="footer-links">
            <Icon type={item.icon} style={{ marginRight: 20 }} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;

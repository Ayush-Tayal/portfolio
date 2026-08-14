import React from "react";
import { SiGmail, SiGithub } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SocialLinksWrapper } from "./SocialLinksStyled";

const LINKS = [
  { key: "mail", label: "Email Ayush", href: "mailto:ayushtayal1111@gmail.com", Icon: SiGmail, vendor: "gmail" },
  { key: "phone", label: "Call Ayush", href: "tel:+91-817-852-4253", Icon: BsFillTelephoneFill, vendor: "phone" },
  {
    key: "whatsapp",
    label: "Message Ayush on WhatsApp",
    href: "https://wa.me/918178524253",
    Icon: FaWhatsapp,
    vendor: "whatsapp",
  },
  {
    key: "linkedin",
    label: "Ayush's LinkedIn profile",
    href: "https://www.linkedin.com/in/ayush-tayal-4a962b18a/",
    Icon: AiFillLinkedin,
    vendor: "linkedin",
  },
  { key: "github", label: "Ayush's GitHub profile", href: "https://github.com/Ayush-Tayal", Icon: SiGithub, vendor: "github" },
];

const SocialLinks = ({ className }) => (
  <SocialLinksWrapper className={className}>
    {LINKS.map(({ key, label, href, Icon, vendor }) => (
      <button
        key={key}
        type="button"
        aria-label={label}
        onClick={() => window.open(href)}
        className={`social-icon vendor-${vendor}`}
      >
        <Icon aria-hidden="true" />
      </button>
    ))}
  </SocialLinksWrapper>
);

export default SocialLinks;

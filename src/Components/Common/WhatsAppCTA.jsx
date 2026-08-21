import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FloatingWhatsApp = styled.a`
  position: fixed;
  right: clamp(0.9rem, 2vw, 1.6rem);
  bottom: clamp(0.9rem, 2vw, 1.6rem);
  z-index: 50;
  display: grid;
  place-items: center;
  width: clamp(3.5rem, 6vw, 4.1rem);
  height: clamp(3.5rem, 6vw, 4.1rem);
  border-radius: 50%;
  border: 1px solid rgba(92, 172, 255, 0.38);
  background:
    radial-gradient(circle at top, rgba(79, 154, 255, 0.3), transparent 58%),
    linear-gradient(180deg, rgba(7, 15, 31, 0.98) 0%, rgba(4, 9, 19, 0.98) 100%);
  box-shadow:
    0 0 0 1px rgba(88, 164, 255, 0.08),
    0 0 28px rgba(50, 125, 255, 0.34),
    0 18px 42px rgba(0, 0, 0, 0.32);
  color: #8ec5ff;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(115, 190, 255, 0.62);
    color: #b7dcff;
    box-shadow:
      0 0 0 1px rgba(88, 164, 255, 0.12),
      0 0 34px rgba(67, 144, 255, 0.44),
      0 22px 48px rgba(0, 0, 0, 0.34);
  }

  svg {
    font-size: clamp(1.45rem, 2.5vw, 1.8rem);
  }
`;

const WhatsAppCTA = () => {
  return (
    <FloatingWhatsApp
      href="https://wa.me/5591993530773"
      target="_blank"
      rel="noreferrer"
      aria-label="Abrir conversa no WhatsApp"
    >
      <FontAwesomeIcon icon={faWhatsapp} />
    </FloatingWhatsApp>
  );
};

export default WhatsAppCTA;

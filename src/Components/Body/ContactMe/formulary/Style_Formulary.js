import styled from "styled-components";

export const AreaForm = styled.div`
  min-width: 0;
`;

export const FormCard = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: clamp(1.2rem, 3vw, 2rem);
  border-radius: 2rem;
  border: 1px solid rgba(123, 151, 255, 0.12);
  background: rgba(4, 8, 18, 0.9);

  @media screen and (max-width: 520px) {
    border-radius: 1.5rem;
  }
`;

export const AreaInputName = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const fieldStyle = `
  width: 100%;
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  border: 1px solid rgba(123, 151, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  color: var(--text-primary);
  font: inherit;
  box-sizing: border-box;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;

  &::placeholder {
    color: #7f8da8;
  }

  &:focus {
    outline: none;
    border-color: rgba(78, 126, 255, 0.68);
    box-shadow: 0 0 0 4px rgba(62, 115, 255, 0.12);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-text-fill-color: var(--text-primary);
    caret-color: var(--text-primary);
    border: 1px solid rgba(123, 151, 255, 0.1);
    -webkit-box-shadow:
      0 0 0 1000px rgba(11, 18, 34, 1) inset,
      0 0 0 0 transparent;
    box-shadow:
      0 0 0 1000px rgba(11, 18, 34, 1) inset,
      0 0 0 0 transparent;
    transition: background-color 9999s ease-out 0s;
  }
`;

export const InputItem = styled.input`
  ${fieldStyle}
`;

export const Textarea = styled.textarea`
  ${fieldStyle}
  min-height: 10rem;
  resize: vertical;
`;

export const ButtonForm = styled.button`
  width: fit-content;
  padding: 0.95rem 1.35rem;
  border: none;
  border-radius: 999px;
  background: linear-gradient(135deg, #3e73ff 0%, #1f4dd8 100%);
  color: #f6f9ff;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 35px rgba(33, 86, 255, 0.3);
  }

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const FormStatus = styled.p`
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.92rem;
`;

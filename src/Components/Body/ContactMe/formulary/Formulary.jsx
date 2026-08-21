import { useState } from "react";
import {
  AreaForm,
  AreaInputName,
  ButtonForm,
  FormCard,
  FormStatus,
  InputItem,
  Textarea,
} from "./Style_Formulary";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  subject: "",
  message: "",
};

const Formulary = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [statusMessage, setStatusMessage] = useState("O formulário abre um rascunho no Gmail com a mensagem pronta.");

  const handleChange = ({ target }) => {
    setFormData((current) => ({
      ...current,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const composedSubject = formData.subject || "Contato pelo portfólio";
    const body = [
      `Nome: ${fullName}`,
      `Email: ${formData.email}`,
      "",
      "Mensagem:",
      formData.message,
    ].join("\n");

    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      "wallacewilliam076@gmail.com"
    )}&su=${encodeURIComponent(composedSubject)}&body=${encodeURIComponent(body)}`;

    setStatusMessage("Abrindo o Gmail com seu e-mail já preenchido.");
    window.open(gmailComposeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AreaForm>
      <FormCard onSubmit={handleSubmit}>
        <AreaInputName>
          <InputItem
            type="text"
            name="firstName"
            placeholder="Nome"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <InputItem
            type="text"
            name="lastName"
            placeholder="Sobrenome"
            value={formData.lastName}
            onChange={handleChange}
          />
        </AreaInputName>

        <InputItem
          type="email"
          name="email"
          placeholder="Seu melhor e-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <InputItem
          type="text"
          name="subject"
          placeholder="Assunto"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <Textarea
          name="message"
          placeholder="Conte um pouco sobre o projeto, vaga ou objetivo da página"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <ButtonForm type="submit">Preparar e-mail</ButtonForm>
        <FormStatus>{statusMessage}</FormStatus>
      </FormCard>
    </AreaForm>
  );
};

export default Formulary;

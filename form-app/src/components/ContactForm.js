import React from "react";
import { useForm } from "../hooks/useForm";
import Loader from "./Loader";
import Message from "./Message";

const initalForm = {
  name: "",
  email: "",
  subject: "",
  comments: "",
};

const validateForm = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo 'Nombre' es requerido";    
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo 'Nombre' solo acepta letar y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo 'Email' es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo 'Email' debe ser un email valido";
  }

  if (!form.subject.trim()) {
    errors.subject = "El campo 'Asunto' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El campo 'Comentarios' es requerido";
  } else if (!regexComments.test(form.comments.trim())) {
    errors.comments =
      "No se permiten más de 250 caracteres";
  }

  return errors;
};

const ContactForm = () => {
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(initalForm, validateForm);

  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          value={form.name}
          required
          onBlur={handleBlur}
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          value={form.email}
          required
          onBlur={handleBlur}
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          value={form.subject}
          required
          onBlur={handleBlur}
        />
        {errors.subject && <p>{errors.subject}</p>}
        <textarea
          name="comments"
          cols="50"
          rows="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          value={form.comments}
          required
          onBlur={handleBlur}
        />
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
      {loading && <Loader />}
      {response && <Message msg="Los datos han sido enviados" bgColor="#198754"/>}
    </div>
  );
};

export default ContactForm;

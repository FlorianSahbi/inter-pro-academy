import React from "react";
import { useForm } from "react-hook-form";
import Typography from "./Typography";
import Spacer from "./Spacer";
import "./ContactForm.css"

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => { console.log(data); reset() };

  return (
    <div id="contact" className="root-cf">
      <Typography text="Nous contacter" type="h2" textAlign="center" color="#FBFBFB" />
      <Spacer spacing={1} />
      <form className="form-cf" onSubmit={handleSubmit(onSubmit)}>

        <div>
          <input className="input-cf" name="name" type="text" placeholder="Votre nom (requis)" ref={register({ required: true })} />
          {errors.name && <Typography text="Veuillez saisir votre nom" type="body2" color="#b7264f" />}
        </div>

        <div>
          <input className="input-cf" name="email" type="email" placeholder="Votre e-mail (requis)" ref={register({ required: true })} />
          {errors.email && <Typography text="Veuillez saisir votre email" type="body2" color="#b7264f" />}
        </div>

        <div>
          <input className="input-cf" name="object" type="text" placeholder="Objet du message (requis)" ref={register({ required: true })} />
          {errors.object && <Typography text="Veuillez saisir l'objet de votre message" type="body2" color="#b7264f" />}
        </div>

        <div>
          <textarea className="textarea-cf" name="message" placeholder="Votre messagee (requis)" ref={register({ required: true })} />
          {errors.message && <Typography text="Veuillez saisir votre message" type="body2" color="#b7264f" />}
        </div>
        <input className="submit-cf" type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;

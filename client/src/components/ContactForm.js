import React from "react";
import { useForm } from "react-hook-form";
import Typography from "./Typography";

function ContactForm() {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = data => console.log(data);
  const styles = {
    root: {
      backgroundColor: "#303941",
      height: "60vh",
      width: "100%",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",

    },
    form: {
      display: "grid",
      gridTemplateRows: "40px, 40px 40px 80px 40px",
      gap: "20px",
    },
    input: {
      backgroundColor: "unset",
      border: "unset",
      borderBottom: "1px solid white",
      outline: "none",
      height: "40px",
      color: "white",
      width: "360px",
      fontFamily: "poppins",
    },
    textarea: {
      backgroundColor: "unset",
      border: "unset",
      borderBottom: "1px solid white",
      outline: "none",
      color: "white",
      minHeight: "80px",
      fontFamily: "poppins",
      width: "360px",
      resize: "none",
    },
    submit: {
      backgroundColor: "unset",
      border: "1px solid white",
      outline: "none",
      color: "white",
      minHeight: "40px",
      fontFamily: "poppins",
      width: "360px",
      cursor: "pointer"

    },
  }
  // {name: "Florian sahbi", email: "florian.sahbi@gmail.com", object: "Bonjour", message: "Voila ma question"}
  return (
    <div style={styles.root}>
      <Typography text="Get in touch" type="h2" textAlign="center" color="#fff" />
      <form style={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input style={styles.input} name="name" type="text" placeholder="John Doe" ref={register({ required: true })} />
        {errors.name && <span>This field is required</span>}
        <input style={styles.input} name="email" type="email" placeholder="john.doa@mail.tn" ref={register({ required: true })} />
        {errors.email && <span>This field is required</span>}
        <input style={styles.input} name="object" type="text" placeholder="I've got a question!" ref={register({ required: true })} />
        {errors.object && <span>This field is required</span>}
        <textarea style={styles.textarea} name="message" placeholder="Here is my question." ref={register({ required: true })} />
        {errors.message && <span>This field is required</span>}
        <input style={styles.submit} type="submit" />
      </form>
    </div>
  );
}

export default ContactForm;

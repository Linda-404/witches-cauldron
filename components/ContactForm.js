import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import React, { Component } from "react";
import Select from "react-select";

const contactSchema = yup.object().shape({
  firstname: yup
    .string()
    .required("Please enter a firstname")
    .min(3, "Firstname must contain at least 3 characters"),
  lastname: yup
    .string()
    .required("Please enter a lastname")
    .min(4, "Lastname must contain at least 4 characters"),
  email: yup
    .string()
    .required("Please enter an email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Required"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(10, "The message must be at least 10 characters"),
});

const options = [
  { value: "about drink", label: "About drink" },
  { value: "other", label: "Other" },
];

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-input">
        <label htmlFor="firstname">Firstname:</label>
        <input type="text" name="firstname" {...register("firstname")} />
        {errors.firstname && <span>{errors.firstname.message}</span>}
      </div>
      <div className="form-input">
        <label htmlFor="lastname">Lastname:</label>
        <input type="text" name="lastname" {...register("lastname")} />
        {errors.lastname && <span>{errors.lastname.message}</span>}
      </div>
      <div className="form-input">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" {...register("email")} />
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div className="form-input">
        <Select options={options} />
        {errors.subject && <span>{errors.subject.message}</span>}
      </div>
      <div className="form-input">
        <label htmlFor="message">Message:</label>
        <textarea {...register("message")} />
        {errors.message && <span>{errors.message.message}</span>}
      </div>

      <button className="button">Send</button>
    </form>
  );
}

export default ContactForm;

import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React from "react";
import {
  MailOutline,
  MessageOutlined,
  PersonOutline,
  PhoneAndroid,
  Subject,
} from "@mui/icons-material";
import * as Yup from "yup";

import emailjs, { init } from "@emailjs/browser";
import { Formik } from "formik";

const contactLabels = [
  "Full Name",
  "Email Address",
  "Phone Number",
  "Subject",
  "Your Message",
];
const contactInputNames = ["name", "email", "phone", "subject", "message"];
const contactIcons = [
  <PersonOutline />,
  <MailOutline />,
  <PhoneAndroid />,
  <Subject />,
  <MessageOutlined />,
];

const dataNames = ["name", "email", "phone", "subject", "message"];

const initialValues = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const phoneRegExp = /^01[0125][0-9]{8}$/;

const Form = ({ toggleEmailSent }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required("You must provide a name"),
    email: Yup.string().email().required("You must provide a valid email"),
    // phone: Yup.number("Phone must be a number")
    //   .typeError("That doesn't look like a phone number")
    //   .required("You must provide a phone"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    subject: Yup.string().required("You must provide a subject"),
    message: Yup.string().required("You must provide a message"),
  });

  const handleSendEmail = (values) => {
    // e.preventDefault();
    init("XqECRd-2VulRx7Se1");

    // console.log(formData);

    const form = {
      from_name: "Scube Education Technology",
      to_name: "Mr Muhammad Saad Al-Wakil",
      ...values,
    };

    // alert(JSON.stringify("SENT !"));

    emailjs.send("service_ivverlw", "template_vzt8oh6", form).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    toggleEmailSent();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { setSubmitting }) => {
        handleSendEmail(values);
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            {contactLabels.map((label, idx) => (
              <Grid key={label} item xs={label === "Your Message" ? 12 : 6}>
                <FormControl variant="standard" className="form-control">
                  <TextField
                    sx={{
                      color: "#FFF !important",
                      borderColor: "#FFF !important",
                    }}
                    // focused
                    id="input-with-icon-adornment"
                    multiline={label === "Your Message" ? true : false}
                    rows={label === "Your Message" ? 3 : null}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          {contactIcons[idx]}
                        </InputAdornment>
                      ),
                    }}
                    label={contactLabels[idx]}
                    name={contactInputNames[idx]}
                    value={values[dataNames[idx]]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error
                    helperText={
                      touched[dataNames[idx]] && errors[dataNames[idx]]
                        ? errors[dataNames[idx]]
                        : null
                    }
                  />
                </FormControl>
              </Grid>
            ))}
            <Grid item xs={12} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#fff",
                  color: "rgb(25, 118, 210)",

                  "&:hover": {
                    color: "#fff",
                  },
                }}
                disabled={isSubmitting}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default Form;

import React from "react";

import {
  Button,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";

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

import styles from "./contact.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

const Contact = ({ schoolName, to }) => {
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

  const handleSendEmail = (values, resetForm) => {
    // e.preventDefault();
    init("XqECRd-2VulRx7Se1");

    // console.log(formData);

    const form = {
      from_name: "Scube Education Technology",
      to_name: to,
      ...values,
    };

    const templateID =
      schoolName === "znc" ? "template_uus9gfj" : "template_vzt8oh6";

    // alert(JSON.stringify("SENT !"));
    // znc = template_uus9gfj
    // mansoura = template_vzt8oh6

    emailjs.send("service_ivverlw", templateID, form).then(
      (result) => {
        console.log(result.text);

        toast.success("✉️ Your email has been sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className={styles.contact}>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          handleSendEmail(values, resetForm);
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
                <Grid
                  key={label}
                  item
                  xs={label === "Your Message" ? 12 : 12}
                  md={label === "Your Message" ? 12 : 6}
                >
                  <FormControl
                    variant="standard"
                    className={styles.formControl}
                  >
                    <TextField
                      sx={{
                        color: "#FFF !important",
                        borderColor: "#FFF !important",
                      }}
                      className={styles.input}
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
    </div>
  );
};

export default Contact;

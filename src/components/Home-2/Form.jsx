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

import emailjs, { init } from "@emailjs/browser";
import { useRef } from "react";

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

const Form = () => {
  const form = useRef();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    init("XqECRd-2VulRx7Se1");

    // console.log(formData);

    const form = {
      from_name: "Scube Education Technology",
      to_name: "Mr Muhammad Saad Al-Wakil",
      ...formData,
    };
    alert(JSON.stringify("SENT !"));

    // emailjs.send("service_ivverlw", "template_vzt8oh6", form).then(
    //   (result) => {
    //     console.log(result.text);
    //   },
    //   (error) => {
    //     console.log(error.text);
    //   }
    // );
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Grid container spacing={4}>
        {contactLabels.map((label, idx) => (
          <Grid key={label} item xs={label === "Your Message" ? 12 : 6}>
            <FormControl variant="standard" className="form-control">
              <TextField
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
                value={formData[contactInputNames[idx]]}
                onChange={handleChange}
                // error
                // helperText="Incorrect entry."
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
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;

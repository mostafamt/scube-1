import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Country, City } from "country-state-city";
import MuiPhoneNumber from "material-ui-phone-number";
import config from "../../config";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";

export default function ProfileDetails(props) {
  console.log(
    "🚀 ~ file: ProfileDetails.js ~ line 23 ~ ProfileDetails ~ props",
    props
  );
  const countries = Country.getAllCountries([]);

  const [given_name, setGivenName] = useState("");
  const [family_name, setFamilyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCities(City.getCitiesOfCountry(country));
  }, [country]);

  useEffect(() => {
    console.log(props.user);
    setGivenName(props.user?.given_name);
    setFamilyName(props.user?.family_name);
    setEmail(props.user?.email);
    setPhone(props.user?.phone_number);
    setCity(props.user["custom:city"] || "Cairo");
    setCountry(props.user["custom:country"] || "EG");
    setGender(props.user?.gender);
    setBirthdate(props.user?.birthdate);
  }, [props.user]);
  const updateUserInfo = (userInfo) => {
    const user = config.UserPool.getCurrentUser();
    if (user) {
      user.getSession((err, session) => {
        if (err) {
          console.log(err);
        } else {
          console.log(session);
        }
      });
    }
    console.log("user", user);
    const attributeList = [];

    userInfo.map((x) => attributeList.push(new CognitoUserAttribute(x)));
    user.updateAttributes(attributeList, function (err, result) {
      if (err) {
        console.log(err.message || JSON.stringify(err));
        return;
      }
      console.log("call result: " + result);
    });
  };

  const handleClick = (event) => {
    event.preventDefault();
    const userInfo = [
      { Name: "email", Value: email },
      { Name: "given_name", Value: given_name },
      { Name: "family_name", Value: family_name },
      { Name: "gender", Value: gender },
      { Name: "birthdate", Value: birthdate },
      {
        Name: "phone_number",
        Value: phone_number,
      },
      { Name: "custom:country", Value: country },
      { Name: "custom:city", Value: city },
    ];
    updateUserInfo(userInfo);
  };

  return (
    <form autoComplete="off" noValidate {...props} onSubmit={handleClick}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="First name"
                name="given-name"
                onChange={(e) => setGivenName(e.target.value)}
                required
                value={given_name}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={(e) => setFamilyName(e.target.value)}
                required
                value={family_name}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth required>
                <InputLabel>Gender</InputLabel>
                <Select
                  label="Gender"
                  name="gender"
                  autoComplete="gender"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={8} xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email}
                variant="outlined"
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <TextField
                required
                fullWidth
                id="date"
                label="Birthdate"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={birthdate}
                onChange={(event) => setBirthdate(event.target.value)}
              />
            </Grid>

            <Grid item md={4} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>Country</InputLabel>
                <Select
                  label="Country"
                  name="country"
                  autoComplete="country"
                  value={country}
                  onChange={(event) => setCountry(event.target.value)}
                >
                  {countries.map((c) => {
                    return (
                      <MenuItem key={c.isoCode} value={c.isoCode}>
                        {c.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <FormControl fullWidth required>
                <InputLabel>City</InputLabel>
                <Select
                  label="City"
                  name="city"
                  autoComplete="city"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                >
                  {cities.map((c, i) => {
                    return (
                      <MenuItem key={i} value={c.name}>
                        {c.name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12}>
              <MuiPhoneNumber
                required
                fullWidth
                name="phone"
                id="phone"
                label="Phone Number"
                value={phone_number}
                defaultCountry={country.toLowerCase() || "eg"}
                onChange={(value) => setPhone(value)}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}
        >
          <Button color="primary" variant="contained" type="submit">
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
}

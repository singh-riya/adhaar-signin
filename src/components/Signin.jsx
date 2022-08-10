import * as React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import Footer from "./Footer";
import { Button, Grid, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
});

const bull = (
  <Box
    component='span'
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Signin() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "foobar@example.com",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      navigate("/verify");
    },
  });
  return (
    <Grid container direction='column'>
      <Grid item>
        <Header />
      </Grid>
      <Grid container item justifyContent='center'>
        <Box sx={{ minWidth: 275 }}>
          <Grid container direction='column' justifyContent='center'>
            <Grid item>
              <h3>Login using google</h3>
            </Grid>
            <Grid item>
              <Button
                variant='contained'
                color='error'
                startIcon={<GoogleIcon />}
              >
                Google
              </Button>
            </Grid>
          </Grid>
          <br />
          <br />
          <hr />
          <br />
          <br />
          <Grid container direction='column' justifyContent='center'>
            <Grid item>
              <h5>Proceed with your email address</h5>
            </Grid>
            <Grid container>
              <form onSubmit={formik.handleSubmit}>
                <Grid item>
                  <TextField
                    fullWidth
                    id='email'
                    name='email'
                    label='Email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Grid>
                <Grid item>
                  <Typography variant='caption'>
                    By continuing, I confirm to the terms and service privacy
                    policy of <a>digio.in</a>
                  </Typography>
                </Grid>
                <Grid item>
                  <Button
                    color='primary'
                    variant='contained'
                    fullWidth
                    type='submit'
                  >
                    Login
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
}

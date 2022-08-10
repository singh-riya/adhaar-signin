import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  otp: yup.number("Enter your otp").required("otp is required"),
});

const Otp = () => {
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      otp: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      if (values.otp.length === 6) {
        navigate("/profile");
      }
    },
  });

  return (
    <Grid container>
      <form onSubmit={formik.handleSubmit}>
        <Grid item>
          <TextField
            fullWidth
            id='otp'
            name='otp'
            label='otp'
            value={formik.values.otp}
            onChange={formik.handleChange}
            error={formik.touched.otp && Boolean(formik.errors.otp)}
            helperText={formik.touched.otp && formik.errors.otp}
            inputProps={{
              maxLength: 6,
            }}
            disabled={enable}
          />
        </Grid>
        <Grid item>
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Login
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default Otp;

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Footer from "./Footer";
import Header from "./Header";
import Aadhaar_Logo from "../assets/1200px-Aadhaar_Logo.svg.png";
import { Button, Grid, TextField } from "@mui/material";
import Otp from "./Otp";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: "50%",
  width: "60%",
};

const validationSchema = yup.object({
  aadhaar: yup
    .number("Enter your aadhaar number")
    // .max(12, "Enter a valid aadhaar number")
    // .min(12, "Enter a valid aadhaar number")
    .required("Aadhaar number is required"),
});

const AdhaarWithOTP = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  const [verifyBtn, setVerifyBtn] = useState(false);
  const [showOtp, setShowOtp] = useState(false);

  const formik = useFormik({
    initialValues: {
      aadhaar: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if (values.aadhaar.length === 12) {
        navigate("/verify");
        handleClose();
      }
    },
  });

  useEffect(() => {
    handleOpen();
  }, []);

  const handleChange = (e) => {
    formik.handleChange(e);
    if (e.target.value.length === 12) {
      setVerifyBtn(true);
    }
  };

  const handleVerify = () => {
    setShowOtp(true);
  };

  return (
    <>
      <Header />
      <div>
        <h1>Adhaar with OTP</h1>
        <p>Please enter the OTP sent to your registered mobile number.</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{
          height: "100%",
          width: "100%",
        }}
      >
        <Box sx={style}>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Register Adhaar
          </Typography>
          <hr />
          <Grid container justifyContent='space-around'>
            <Grid item style={{ paddingTop: "20px" }}>
              <img
                src={Aadhaar_Logo}
                alt='aadhar-logo'
                height='50px'
                width='50px'
              />
            </Grid>
            <Grid item>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  fullWidth
                  id='aadhaar'
                  name='aadhaar'
                  label='Aadhaar Number'
                  type='number'
                  placeholder='Enter your aadhaar number'
                  value={formik.values.aadhaar}
                  onChange={handleChange}
                  inputProps={{
                    maxLength: 12,
                  }}
                  error={
                    formik.touched.aadhaar && Boolean(formik.errors.aadhaar)
                  }
                  helperText={formik.touched.aadhaar && formik.errors.aadhaar}
                />
                <Button
                  color='primary'
                  variant='contained'
                  fullWidth
                  type='submit'
                  disabled={!verifyBtn}
                  onClick={handleVerify}
                >
                  Submit
                </Button>
              </form>
            </Grid>
          </Grid>
          {showOtp && <Otp />}
        </Box>
      </Modal>

      <Footer />
    </>
  );
};

export default AdhaarWithOTP;

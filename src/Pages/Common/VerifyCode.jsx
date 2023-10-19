import { Stack, Grid, Button, Link } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputCustom from "../../Components/Common/Input/InputCustom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toastOptions } from "../../Assets/Constant/Common/dataCommon";
import {
  BACK_TO_LOGIN,
  NOT_RECEIVE_CODE,
  RESEND,
  TITLE_PAGE_VERIFY,
  VERIFY_CODE,
} from "../../Assets/Constant/Common/constCommon";
import ApiCommon from "../../API/Common/ApiCommon";
import {
  BackToPageStyle,
  PageNameStyle,
  TitlePageStyle,
} from "../../Assets/CSS/Style/style.const";
import FormSubmit from "../../Components/Common/FormCustom/FormSubmit";

const VerifyCode = () => {
  const location = useLocation();
  const { state } = location;
  const [email, setEmail] = useState(state.email);
  console.log("Email:", email);

  const navigate = useNavigate();
  const [verifyCode, setVerifyCode] = useState(true);
  console.log("verifyCode: ", verifyCode);

  const handleVerifyCode = async (e) => {
    e.preventDefault();
    try {
      const response = await ApiCommon.verifyCode({
        email: email,
        enteredOTP: verifyCode,
      });
      if (response.status === true) {
        navigate("/set-password", { state: { email } });
      } else {
        console.log("error!");
      }
    } catch (error) {
      console.log("error: ", error);
      const err = error.response.data.message;
      toast.error(err, toastOptions);
    }
  };
  const handleResendOTP = async (e) => {
    e.preventDefault();
    try {
      await ApiCommon.resendOTP({
        email: email,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <BackToPageStyle to={"/login"}>
        <KeyboardArrowLeftIcon /> <span>{BACK_TO_LOGIN}</span>
      </BackToPageStyle>
      <PageNameStyle variant="h4" component={"h5"}>
        {VERIFY_CODE}
      </PageNameStyle>
      <TitlePageStyle>
        {TITLE_PAGE_VERIFY}
        {email}.
      </TitlePageStyle>
      <FormSubmit onSubmit={handleVerifyCode}>
        <InputCustom
          type="password"
          setValue={setVerifyCode}
          label="Enter Code"
        />
        <Stack
          spacing={1}
          alignItems={"center"}
          direction={"row"}
          style={{ fontSize: "18px", marginBottom: "20px" }}>
          <span>{NOT_RECEIVE_CODE}</span>
          <Link
            component="button"
            onClick={handleResendOTP}
            style={{
              color: "#F5BD19",
              fontWeight: "500",
              textDecoration: "none",
            }}>
            {RESEND}
          </Link>
        </Stack>
        <Grid className="btnLogin">
          <Button
            style={{
              padding: "10px",
              color: "black",
              fontWeight: "bold",
              fontSize: "18px",
            }}
            type="submit"
            fullWidth>
            Verify
          </Button>
        </Grid>
        <ToastContainer />
      </FormSubmit>
    </>
  );
};

export default VerifyCode;

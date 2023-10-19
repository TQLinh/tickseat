import {
    URL_ADDPAYMENT,
    URL_PROFILEOTGANIZER,
    URL_PROFILECLIENT,
    URL_FORGOTPASSWORD,
    URL_SENOTP,
    URL_REGISTERUSER,
    URL_SIGNUP,
    URL_VERIFYCODE,
    URL_VERIFYEMAIL,
    URL_VERIFYOTP,
    URL_LOGIN,
    URL_RESENDOTP,
} from "../ConstAPI";
import axiosDefault from "../Defaults/AxiosDefault";


const ApiCommon = {
    signUp(data) {
        return axiosDefault.post(URL_SIGNUP, { name: data.name });
    },

    profileClient(data) {
        return axiosDefault.post(URL_PROFILECLIENT, data);
    },

    sendOtp(data) {
        return axiosDefault.post(URL_SENOTP, data);
    },

    verifyOtp(data) {
        return axiosDefault.post(URL_VERIFYOTP, data);
    },

    profileOrganizer(data) {
        return axiosDefault.post(URL_PROFILEOTGANIZER, data);
    },

    addPayment(data) {
        return axiosDefault.post(URL_ADDPAYMENT, data);
    },

    forgotPassword(data) {
        return axiosDefault.post(URL_FORGOTPASSWORD, data);
    },

    registerUser(data) {
        return axiosDefault.post(URL_REGISTERUSER, data);
    },

    verifyCode(data) {
        return axiosDefault.post(URL_VERIFYCODE, data);
    },

    verifyEmail(data) {
        return axiosDefault.post(URL_VERIFYEMAIL, data);
    },

    login(data) {
        return axiosDefault.post(URL_LOGIN, data);
    },

    resendOTP(data) {
        return axiosDefault.post(URL_RESENDOTP, data);
    },
};

export default ApiCommon;

import * as Yup from "yup";

export const validationSchema1 = Yup.object().shape({
  emailId: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .matches(/(?=.*[A-Z].*[A-Z])/, "Must contain at least 2 uppercase letters")
    .matches(/(?=.*[a-z].*[a-z])/, "Must contain at least 2 lowercase letters")
    .matches(/(?=.*[0-9].*[0-9])/, "Must contain at least 2 numbers")
    .matches(
      /(?=.*[!@#$%^&*()_+=-].*[!@#$%^&*()_+=-])/,
      "Must contain at least 2 special characters",
    )
    .required("Required"),
});

export const validationSchema2 = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Must only contain alphabets")
    .min(2)
    .max(50)
    .required("Required"),
  lastName: Yup.string().matches(/^[A-Za-z]*$/, "Must only contain alphabets"),
  address: Yup.string().min(10).required("Required"),
});

export const validationSchema3 = Yup.object().shape({
  countryCode: Yup.string().oneOf(["+91", "+1"], "Invalid country code").required("Required"),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, "Must be a 10 digit number")
    .required("Required"),
  acceptTermsAndCondition: Yup.bool().oneOf([true], "Must accept terms and conditions"),
});

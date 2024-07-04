import { useState } from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import { validationSchema1, validationSchema2, validationSchema3 } from "../validationSchemas";

const MainForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const initialValues = {
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    address: "",
    countryCode: "",
    phoneNumber: "",
    acceptTermsAndCondition: false,
  };

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = async (values) => {
    const { acceptTermsAndCondition, ...submitValues } = values;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(submitValues),
    };

    console.log({ acceptTermsAndCondition });

    try {
      const response = await fetch("https://codebuddy.review/submit", requestOptions);
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      const data = await response.json();
      console.log("API Response:", data);
      navigate("/posts");
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  const getValidationSchema = () => {
    switch (step) {
      case 1:
        return validationSchema1;
      case 2:
        return validationSchema2;
      case 3:
        return validationSchema3;
      default:
        return validationSchema1;
    }
  };

  return (
    <>
      <div className="flex justify-around border-b-orange-800 pb-2">
        {[1, 2, 3]?.map((item) => {
          return (
            <button
              key={item}
              type="button"
              disabled={item > step}
              onClick={() => setStep(item)}
              className={`mb-2 me-2 rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none 
    ${item === step ? "border-2 border-solid border-red-500 bg-blue-700" : ""}
    ${item < step ? "border-2 border-solid border-green-500 bg-green-600" : ""}
    ${item > step ? "border-2 border-solid border-gray-500 bg-gray-400" : ""}
    ${item < step ? "hover:bg-green-700" : ""}
    ${item > step ? "cursor-not-allowed" : "cursor-pointer"}
  `}
            >
              Form {item}
            </button>
          );
        })}
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={getValidationSchema()}
        onSubmit={handleSubmit}
      >
        {({ isValid, isSubmitting }) => (
          <Form className="flex flex-col gap-3 ">
            {step === 1 && <Form1 />}
            {step === 2 && <Form2 />}
            {step === 3 && <Form3 />}
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="mb-2 me-2 rounded-full bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="mb-2 me-2 rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Save
              </button>
              {step < 3 && (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!isValid}
                  className="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Save and Next
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default MainForm;

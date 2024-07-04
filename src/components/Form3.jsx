import { Field, ErrorMessage } from "formik";

const Form3 = () => (
  <div className="flex flex-col gap-2">
    <div>
      <label htmlFor="countryCode">Country Code</label>
      <Field
        as="select"
        name="countryCode"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      >
        <option value={"none"} hidden>
          --Select--
        </option>
        <option value="+91">India (+91)</option>
        <option value="+1">America (+1)</option>
      </Field>
      <ErrorMessage name="countryCode" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
    <div>
      <label htmlFor="phoneNumber">Phone Number</label>
      <Field
        type="text"
        name="phoneNumber"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="phoneNumber" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
    <div>
      <label>
        <Field type="checkbox" name="acceptTermsAndCondition" />
        Accept Terms and Conditions
      </label>
      <ErrorMessage
        name="acceptTermsAndCondition"
        component="div"
        className="mt-2 text-xs text-red-600 "
      />
    </div>
  </div>
);

export default Form3;

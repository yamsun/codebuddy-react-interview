import { Field, ErrorMessage } from "formik";

const Form2 = () => (
  <div className="flex flex-col gap-2">
    <div>
      <label htmlFor="firstName">First Name</label>
      <Field
        type="text"
        name="firstName"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="firstName" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field
        type="text"
        name="lastName"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="lastName" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
    <div>
      <label htmlFor="address">Address</label>
      <Field
        type="text"
        name="address"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="address" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
  </div>
);

export default Form2;

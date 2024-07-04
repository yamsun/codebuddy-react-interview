import { Field, ErrorMessage } from "formik";

const Form1 = () => (
  <div className="flex flex-col gap-2">
    <div>
      <label htmlFor="emailId">Email ID</label>
      <Field
        type="email"
        name="emailId"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="emailId" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
    <div>
      <label htmlFor="password">Password</label>
      <Field
        type="password"
        name="password"
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2  text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-transparent dark:text-black dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
      />
      <ErrorMessage name="password" component="div" className="mt-2 text-xs text-red-600 " />
    </div>
  </div>
);

export default Form1;

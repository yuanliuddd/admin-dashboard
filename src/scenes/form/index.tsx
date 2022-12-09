import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";

interface formValuesType {
  firstName: string;
  lastName: string;
  email: string;
  contact: string | number;
  address1: string;
  address2: string;
}

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const submithandler = (values: formValuesType) => {
  console.log(values);
};

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("required")
    .max(15, "Must be 15 characters or less"),
  lastName: yup.string().required("required"),
  email: yup.string().required("required").email("Invalid email address"),
  contact: yup.string().required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

function Form() {
  const isNoMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="20px">
      <Header title="Create User" subTitle="Create a New User Profile"></Header>
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={submithandler}
          validationSchema={validationSchema}
        >
          {
            <form>
              <input></input>
            </form>
          }
        </Formik>
      </Box>
    </Box>
  );
}

export default Form;

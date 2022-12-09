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

const frenchPhoneRegEXP =/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("required")
    .max(15, "Must be 15 characters or less"),
  lastName: yup.string().required("required"),
  email: yup.string().required("required").email("Invalid email address"),
  contact: yup
    .string()
    .matches(frenchPhoneRegEXP, "Phone Number incorrect")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});

function Form() {
  const isNoMobile = useMediaQuery("(min-width:600px)");
  return (
    <Box m="20px">
      <Header title="Create User" subTitle="Create a New User Profile" />
      <Box>
        <Formik
          initialValues={initialValues}
          onSubmit={submithandler}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(4, minmax(0,1fr))"
                sx={{
                  "& > div": { gridColumn: isNoMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  label="First Name"
                  name="firstName"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.firstName}
                  error={!!errors.firstName && touched.firstName}
                  helperText={errors.firstName && touched.firstName}
                  sx={{ gridColumn: "span 2" }}
                ></TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Last Name"
                  name="lastName"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.lastName}
                  error={!!errors.lastName && touched.lastName}
                  helperText={errors.lastName && touched.lastName}
                  sx={{ gridColumn: "span 2" }}
                ></TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Email"
                  name="email"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  error={!!errors.email && touched.email}
                  helperText={errors.email && touched.email}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Contact"
                  name="contact"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  error={!!errors.contact && touched.contact}
                  helperText={errors.contact && touched.contact}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Address1"
                  name="address1"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address1}
                  error={!!errors.address1 && touched.address1}
                  helperText={errors.address1 && touched.address1}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Address2"
                  name="address2"
                  type="text"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address2}
                  error={!!errors.address2 && touched.address2}
                  helperText={errors.address2 && touched.address2}
                  sx={{ gridColumn: "span 4" }}
                ></TextField>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Form;

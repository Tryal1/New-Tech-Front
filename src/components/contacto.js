import { Formik, Form } from "formik";
import CountryInput from "./countryInput";
import TextArea from "./textArea";
import TextInput from "./textinput";
import axios from "axios";

import { Container, Button, Grid, Box } from "@material-ui/core";
import { useState } from "react";

const validates = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Nombre es requerido";
  }
  if (!values.lastName) {
    errors.lastName = "Apellido es requerido";
  }
  if (!values.email) {
    errors.email = "Email es requerido";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "El email no es valido";
  }
  if (!values.country) {
    errors.country = "Pais Requerido";
  }
  if (!values.comments) {
    errors.comments = "Comententario Requerido";
  }
  return errors;
};

const Contacto = () => {
  const [errores, setErrores] = useState(false);
  return (
    <Container maxWidth="md">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          email: "",
          country: "",
          comments: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          // axios.get("http://localhost:4000/").then((response) => {console.log(response)})
           axios.post("http://localhost:4000/enviar", values).then(response =>{response.data.message != "" ? setErrores(true): setErrores(false);console.log(response)});
        }}
        validate={validates}
      >
        <Box mt={10}>
          <Form className="form">
            <Grid container spacing={3}>
              <TextInput name="name" label="Nombre" />
              <TextInput name="lastName" label="Apellido" />
              <TextInput name="email" label="Email" type="email" />
              <CountryInput name="country" label="Pais" />
              <TextArea name="comments" label="Comentario" />
            </Grid>
            <Box mt={1}>
              <Button variant="contained" type="submit" color="primary">
                Enviar
              </Button>
            </Box>
          </Form>
        </Box>
      </Formik>
      {errores && <p>Datos no validos o campos faltantes</p>}
    </Container>
  );
};

export default Contacto;

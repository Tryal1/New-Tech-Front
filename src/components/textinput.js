import { useField, ErrorMessage } from "formik";
import { InputLabel, Input, FormControl, Grid } from "@material-ui/core";

const TextInput = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Grid item md={12}>
      <FormControl style={{width:'350px'}}>
        <InputLabel>{label}</InputLabel>
        <Input {...field}/>
        <ErrorMessage name={props.name} component="p" />
      </FormControl>

    </Grid>
  );
};

export default TextInput;

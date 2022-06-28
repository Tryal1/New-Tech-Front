import { useField, ErrorMessage } from "formik";
import { InputLabel, TextField, FormControl, Grid } from "@material-ui/core";

const TextArea = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Grid item md={12}>
      <FormControl style={{width:'350px'}}>
        
        <TextField
        label={label}
          {...field}
          multiline
          minRows={10}
          variant="outlined"
        />
        <ErrorMessage name={props.name} component="p" />
      </FormControl>
    </Grid>
  );
};

export default TextArea;

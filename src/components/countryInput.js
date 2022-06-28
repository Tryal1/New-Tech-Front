import { useField, ErrorMessage } from "formik";
import { useEffect, useState } from "react";

import { InputLabel, Input, FormControl, Grid } from "@material-ui/core";

const CountryInput = ({ label, ...props }) => {
  const [field] = useField(props);
  const { name, onChange, onBlur ,value} = field;
  const [country, setCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [enable, setEnable] = useState(false);


  const addCountry = (values) => {
    setSearch(values);
    setEnable(!enable);
  };
  const dataCountry = async () => {
    let pais = [];
    const resp = await fetch("https://restcountries.com/v3.1/all");
    const data = await resp.json();
    data.map((data) => pais.push(data.name.common));
    setCountry(pais);
  };

  useEffect(() => {
    dataCountry();
  }, []);

  console.log(value)

  return (
    <Grid item md={12}>
      <FormControl style={{ width: "350px" }}>
        <InputLabel>{label}</InputLabel>
        <Input
          name={name}
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            onChange(e);
          }}
          onClick={() => {
            setEnable(!enable);
          }}
          onBlur={onBlur}
        />
        {enable && (
          <div className="enable">
            {country
              .filter((country) =>
                country.toLowerCase().includes(search.toLowerCase())
              )
              .map((country) => (
                <div
                  key={country}
                  onClick={() => {
                    addCountry(country);
                  }}
                >
                  {country}
                </div>
              ))}
          </div>
        )}
      </FormControl>
      <ErrorMessage name={props.name} component="p" />
    </Grid>
  );
};

export default CountryInput;

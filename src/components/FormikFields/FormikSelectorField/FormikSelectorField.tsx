import React from "react";
import {useField} from 'formik';
import FieldLabel from 'src/components/fields/FieldLabel';
import Select from "src/components/inputs/Select";
import { EventError, FormikContainer } from "../FormikInputField/styled";

function FormikSelectorField(props : any) {
  const [field, meta] = useField(props);
  return (
    <FormikContainer>
      <FieldLabel htmlFor={props.name}>{props.label}</FieldLabel>
      <Select {...field} {...props}>
        {props.options?.map((option : any, key : any) => (
          <option value={option} key={key}>
            {option}
          </option>
        ))}
      </Select>
      {meta.touched && meta.error ? (
       <EventError className="error" style={{color: "red"}}>{meta.error}</EventError>
      ) : null}
    </FormikContainer>
  );

}

export default FormikSelectorField;

import type { NextPage } from "next";
import { FormGroupProps } from "../../../../types";
import { FormInput } from "../input/FormInput";
import { FormLabel } from "../FormLabel";
import { InputHelper } from "../InputHelper";
import { FormSelect } from "../input/FormSelect";

const FormGroup: NextPage<FormGroupProps> = (props) => {
  const isRequired: boolean = props.input
    ? props.input.required
    : props.select
    ? props.select.required
    : false;

  return (
    <div className="mb-6">
      <FormLabel
        {...props.label}
        isRequired={isRequired}
        inputKey={props.inputKey}
      />
      {props.input ? (
        <FormInput {...props.input} inputKey={props.inputKey} />
      ) : null}
      {props.select ? (
        <FormSelect {...props.select} inputKey={props.inputKey} />
      ) : null}
      <div className="text-right">
        {props.helperText ? (
          <InputHelper>{props.helperText}</InputHelper>
        ) : null}
      </div>
    </div>
  );
};

export default FormGroup;

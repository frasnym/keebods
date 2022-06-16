import type { NextPage } from "next";

interface Props {
  text: string;
  inputKey: string;
  isRequired: boolean;
}

const FormLabel: NextPage<Props> = (props) => {
  return (
    <div className="flex gap-1">
      <label
        htmlFor={props.inputKey}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {props.text}
      </label>
      {props.isRequired && <span className="text-red-700">*</span>}
    </div>
  );
};

export default FormLabel;

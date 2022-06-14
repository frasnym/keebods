import type { NextPage } from "next";

interface Props {
  text: string;
  inputKey: string;
}

const FormLabel: NextPage<Props> = (props) => {
  return (
    <label
      htmlFor={props.inputKey}
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {props.text}
    </label>
  );
};

export default FormLabel;

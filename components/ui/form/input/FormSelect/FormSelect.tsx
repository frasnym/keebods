import type { NextPage } from "next";

interface Props {
  inputKey: string;
  placeholder: string;
  required: boolean;
  options: {
    value: string;
    text: string;
  }[];
}

const FormSelect: NextPage<Props> = (props) => {
  return (
    <select
      name={props.inputKey}
      required={props.required}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option value={""} disabled={true}>
        {props.placeholder}
      </option>
      {props.options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.text}
        </option>
      ))}
    </select>
  );
};

export default FormSelect;

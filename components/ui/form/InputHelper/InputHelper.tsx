import type { NextPage } from "next";

interface Props {
  children: React.ReactNode;
}

const InputHelper: NextPage<Props> = (props) => {
  return (
    <p
      id="helper-text-explanation"
      className="mt-2 text-sm text-gray-500 dark:text-gray-400"
    >
      {props.children}
    </p>
  );
};

export default InputHelper;

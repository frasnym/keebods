export type Keyboard = {
  slug?: string;
  name: string;
  keys: string;
  material: string;
  knob: string;
  wirelessConnection: string;
  bluetoothConnection: string;
  wiredConnection: string;
  hotSwapAble: string;
  switch: string;
  keyCaps: string;
  antiGhosting: string;
  rgb: string;
  battery: string;
  keyCapsPuller: string;
  switchPuller: string;
  software: string;
  stabilizer: string;
  warranty: string;
  prices?: string;
  imageUrl?: string;
};

export type KeyboardsObject = {
  [key: string]: Keyboard;
};

export interface AppContextInterface {
  header: string[];
  data: KeyboardsObject;
}

export interface FormGroupProps {
  inputKey: string;
  label: {
    text: string;
  };
  input?: {
    type: "text" | "email";
    placeholder: string;
    required: boolean;
  };
  select?: {
    placeholder: string;
    required: boolean;
    options: {
      value: string;
      text: string;
    }[];
  };
  helperText?: React.ReactNode;
}

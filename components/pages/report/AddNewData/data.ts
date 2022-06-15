import { FormGroupProps } from "../../../../types";

const boolSelectValue = [
  {
    value: "Yes",
    text: "Yes",
  },
  {
    value: "No",
    text: "No",
  },
];

export const form: FormGroupProps[] = [
  {
    inputKey: "name",
    label: {
      text: "Name",
    },
    input: {
      placeholder: "Meca XXX",
      required: true,
      type: "text",
    },
    helperText: "Use complete keyboard name and type. Complete name is better.",
  },
  {
    inputKey: "keys",
    label: {
      text: "Keys",
    },
    input: {
      placeholder: "68 Keys (65%)",
      required: true,
      type: "text",
    },
    helperText: "Number of keys on the keyboard.",
  },
  {
    inputKey: "material",
    label: {
      text: "Material",
    },
    input: {
      placeholder: "ABS",
      required: false,
      type: "text",
    },
    helperText: "Keyboard material",
  },
  {
    inputKey: "knob",
    label: {
      text: "Knob",
    },
    select: {
      placeholder: "Please select one..",
      required: true,
      options: boolSelectValue,
    },
    helperText: "Is knob available on keyboard?",
  },
  {
    inputKey: "wirelessConnection",
    label: {
      text: "Wireless Connection",
    },
    input: {
      placeholder: "2.4Ghz",
      required: true,
      type: "text",
    },
    helperText: `Is wireless connection available? Input "No" if not`,
  },
  {
    inputKey: "bluetoothConnection",
    label: {
      text: "Bluetooth Connection",
    },
    input: {
      placeholder: "Bluetooth 5.0",
      required: true,
      type: "text",
    },
    helperText: `Is bluetooth connection available? Input "No" if not`,
  },
  {
    inputKey: "wiredConnection",
    label: {
      text: "Wired Connection",
    },
    input: {
      placeholder: "1.8m Type-C Cable",
      required: true,
      type: "text",
    },
    helperText: `Is wired connection available? Input "No" if not`,
  },
  {
    inputKey: "hotSwapAble",
    label: {
      text: "Hot-swappable",
    },
    input: {
      placeholder: "South-Facing Switch",
      required: true,
      type: "text",
    },
    helperText: "Is keyboard hot-swapable?",
  },
  {
    inputKey: "switch",
    label: {
      text: "Switch",
    },
    input: {
      placeholder: "Gateron (Red, Brown, Blue)",
      required: true,
      type: "text",
    },
    helperText: "What switch is available by default",
  },
  {
    inputKey: "keyCaps",
    label: {
      text: "Keycaps",
    },
    input: {
      placeholder: "PBT",
      required: false,
      type: "text",
    },
    helperText: "Key caps material",
  },
  {
    inputKey: "antiGhosting",
    label: {
      text: "Anti-Ghosting",
    },
    input: {
      placeholder: "Yes",
      required: false,
      type: "text",
    },
    helperText: "Is keyboard anti-ghosting?",
  },
  {
    inputKey: "rgb",
    label: {
      text: "RGB",
    },
    select: {
      placeholder: "Please select one..",
      required: true,
      options: boolSelectValue,
    },
    helperText: "Is keyboard have RGB?",
  },
  {
    inputKey: "battery",
    label: {
      text: "Battery",
    },
    input: {
      placeholder: "1000mAh",
      required: false,
      type: "text",
    },
    helperText: "Keyboard battery capacity",
  },
  {
    inputKey: "keyCapsPuller",
    label: {
      text: "Keycaps Puller",
    },
    select: {
      placeholder: "Please select one..",
      required: true,
      options: boolSelectValue,
    },
    helperText: "Is key caps puller included?",
  },
  {
    inputKey: "switchPuller",
    label: {
      text: "Switch Puller",
    },
    select: {
      placeholder: "Please select one..",
      required: true,
      options: boolSelectValue,
    },
    helperText: "Is switch puller included?",
  },
  {
    inputKey: "software",
    label: {
      text: "Software",
    },
    select: {
      placeholder: "Please select one..",
      required: true,
      options: boolSelectValue,
    },
    helperText: "Is software available?",
  },
  {
    inputKey: "stabilizer",
    label: {
      text: "Stabilizer",
    },
    input: {
      placeholder: "Pre-lubed",
      required: false,
      type: "text",
    },
    helperText: "Describe keyboard stabilizer",
  },
  {
    inputKey: "warranty",
    label: {
      text: "Warranty",
    },
    input: {
      placeholder: "1 Year",
      required: false,
      type: "text",
    },
    helperText: "Describe keyboard warranty",
  },
  {
    inputKey: "imageUrl",
    label: {
      text: "Image",
    },
    input: {
      placeholder: "https://google.com/",
      required: true,
      type: "text",
    },
    helperText: "Full path url for keyboard image",
  },
];

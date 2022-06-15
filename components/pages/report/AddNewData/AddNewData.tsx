import type { NextPage } from "next";
import { FormGroup } from "../../../ui/form/FormGroup";
import { form } from "./data";

const AddNewData: NextPage = () => {
  return (
    <form onSubmit={formSubmitHandler}>
      {form.map((f) => (
        <FormGroup key={f.inputKey} {...f} />
      ))}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

async function formSubmitHandler(e: React.SyntheticEvent) {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    name: { value: string };
    keys: { value: string };
    material: { value: string };
    knob: { value: string };
    wirelessConnection: { value: string };
    bluetoothConnection: { value: string };
    wiredConnection: { value: string };
    hotSwapAble: { value: string };
    switch: { value: string };
    keyCaps: { value: string };
    antiGhosting: { value: string };
    rgb: { value: string };
    battery: { value: string };
    keyCapsPuller: { value: string };
    switchPuller: { value: string };
    software: { value: string };
    stabilizer: { value: string };
    warranty: { value: string };
    imageUrl: { value: string };
  };

  // Get data from the form.
  const data = {
    name: target.name.value,
    keys: target.keys.value,
    material: target.material.value,
    knob: target.knob.value,
    wirelessConnection: target.wirelessConnection.value,
    bluetoothConnection: target.bluetoothConnection.value,
    wiredConnection: target.wiredConnection.value,
    hotSwapAble: target.hotSwapAble.value,
    switch: target.switch.value,
    keyCaps: target.keyCaps.value,
    antiGhosting: target.antiGhosting.value,
    rgb: target.rgb.value,
    battery: target.battery.value,
    keyCapsPuller: target.keyCapsPuller.value,
    switchPuller: target.switchPuller.value,
    software: target.software.value,
    stabilizer: target.stabilizer.value,
    warranty: target.warranty.value,
    imageUrl: target.imageUrl.value,
  };

  // Send the data to the server in JSON format.
  const JSONdata = JSON.stringify(data);

  // API endpoint where we send form data.
  const endpoint = "/api/sheets";

  // Form the request for sending data to the server.
  const options = {
    // The method is POST because we are sending data.
    method: "POST",
    // Tell the server we're sending JSON.
    headers: {
      "Content-Type": "application/json",
    },
    // Body of the request is the JSON data we created above.
    body: JSONdata,
  };

  // Send the form data to our forms API on Vercel and get a response.
  const response = await fetch(endpoint, options);

  // Get the response data from server as JSON.
  // If server returns the name submitted, that means the form works.
  const result = await response.json();
  alert(result.message);
}

export default AddNewData;

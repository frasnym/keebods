import React from "react";
import { AppContextInterface } from "../types";

const AppContext = React.createContext<AppContextInterface | null>(null);

export default AppContext;

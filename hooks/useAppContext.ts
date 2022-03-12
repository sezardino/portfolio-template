import { AppContext } from "@/context";
import { useContext } from "react";

export const useAppContext = (): AppContext => useContext(AppContext);

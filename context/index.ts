import React from "react";
import { SectionsIds } from "@/types";

export interface AppContext {
  state: { activeSection: string };
}

export const AppContext = React.createContext<AppContext>({
  state: { activeSection: SectionsIds.HOME },
});

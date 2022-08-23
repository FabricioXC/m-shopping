import React, { createContext, useContext } from "react";

import { ProductUsecasesType } from "./usecases-types";
import { OrderUsecasesType } from "./usecases-types/order";

export type UsecasesContextType = ProductUsecasesType & OrderUsecasesType;

export const UsecasesContext = createContext<UsecasesContextType>(
  {} as UsecasesContextType
);

type PropTypes = {
  usecases: UsecasesContextType;
  children: any;
};

export const UsecasesProvider: React.FC<PropTypes> = ({
  usecases,
  children,
}) => {
  return (
    <UsecasesContext.Provider
      value={{
        ...usecases,
      }}
    >
      {children}
    </UsecasesContext.Provider>
  );
};

export const useUsecase = (): UsecasesContextType =>
  useContext(UsecasesContext);

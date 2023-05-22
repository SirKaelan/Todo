import React from "react";

type ComponentDataState = {
  todoId: string;
};

type PageContextType = [
  componentData: ComponentDataState,
  setComponentData: React.Dispatch<React.SetStateAction<ComponentDataState>>
];

type PageDataProviderProps = {
  children: JSX.Element;
};

const PageContext = React.createContext<PageContextType>(
  [] as unknown as PageContextType
);

const initialState = {
  todoId: "",
};

export const PageDataProvider = ({
  children,
}: PageDataProviderProps): JSX.Element => {
  const [componentData, setComponentData] =
    React.useState<ComponentDataState>(initialState);

  return (
    <PageContext.Provider value={[componentData, setComponentData]}>
      {children}
    </PageContext.Provider>
  );
};

// Hooks
export const useGetTodoId = (): string => {
  const [{ todoId }] = React.useContext(PageContext);
  return todoId;
};

type SetTodoId = (id: string) => void;

export const useSetTodoId = (): SetTodoId => {
  const [_, setComponentData] = React.useContext(PageContext);

  return (id: string): void => {
    setComponentData(
      (currComponentData: ComponentDataState): ComponentDataState => {
        return { ...currComponentData, todoId: id };
      }
    );
  };
};

import React, { createContext, useState } from 'react';
import { Pay } from '../interfaces/filterContextvalue';
import { filterProps } from '../interfaces/props';
import { dataMock } from './../__mocks/dataPay'


interface ContextProps {
    data: Pay[];
    setData: React.Dispatch<React.SetStateAction<Pay[]>>;
  }

const DataContext = createContext<ContextProps>({
  data: [],
  setData: () => {},
});

const DataProvider = ({children}: filterProps) => {
    const [data, setData] = useState<Pay[]>(dataMock);


  return (
    <DataContext.Provider value={{ data, setData }}>
      { children }
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface AddressSearchData {
  cep: string;
  setCep: (cep: string) => void;
  address: Address;
}

interface AddressSearchProviderProps {
  children: ReactNode;
}

interface Address {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export const AddressSearchContext = createContext({} as AddressSearchData);

export function AddressSearchProvider({ children }: AddressSearchProviderProps) {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address>({} as Address);

  useEffect(() => {
    if (!cep || cep.length < 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(data => data.json())
    .then(data => setAddress(data));
  }, [cep]);

  return <AddressSearchContext.Provider value={{cep, setCep, address}}>
    {children}
  </AddressSearchContext.Provider>
}

export function useAddressSearch() {
  const { cep, setCep, address } =  useContext(AddressSearchContext);

  return { cep, setCep, address };
}
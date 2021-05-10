import {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactElement,
} from 'react';

export type SettingsState = { nat: string };

type FilterContextValue = {
  settings: SettingsState;
  setSettings: Dispatch<SetStateAction<SettingsState>>;
};

const settingsCtxDefaultValue: FilterContextValue = {
  settings: { nat: '' },
  setSettings: () => {},
};

const SettingsContext = createContext(settingsCtxDefaultValue);

interface SettingsProviderProps {
  children: ReactElement | ReactElement [];
}

const SettingsProvider = ({ children }: SettingsProviderProps): JSX.Element => {
  const [settings, setSettings] = useState();

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };

import React, { useContext } from 'react';
import { SettingsContext } from 'src/contexts/settingsContext';
import {
  Wrapper,
  Select,
  Header,
} from './style';

const NatSelector = (): JSX.Element => {
  const { settings, setSettings } = useContext(SettingsContext);

  const handleChange = (event) => {
    event.preventDefault();
    setSettings({
      nat: event.currentTarget.value,
    });
  };

  return (
    <Wrapper>
      <Header>Please select the option:</Header>
      <Select id="nat" onChange={handleChange} value={settings && settings.nat}>
        <option value="">Select Nationality</option>
        <option value="CH">CH</option>
        <option value="ES">ES</option>
        <option value="FR">FR</option>
        <option value="GB">GB</option>
      </Select>
    </Wrapper>
  );
};

export default NatSelector;

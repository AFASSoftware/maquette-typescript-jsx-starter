import { MaquetteComponent } from 'maquette';
import { jsx } from 'maquette-jsx';

export interface TextInputConfig {
  placeholder: string;
  getValue(): string;
  setValue(value: string): void;
}

export let createTextInput = (config: TextInputConfig): MaquetteComponent => {
  function handleInput(evt: Event) {
    config.setValue((evt.target as HTMLInputElement).value);
  }

  return {
    render: () => {
      return <input
        type='text'
        placeholder={config.placeholder}
        value={config.getValue()}
        oninput={handleInput} />;
    }
  };
};

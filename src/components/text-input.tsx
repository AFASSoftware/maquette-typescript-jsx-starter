import {Component} from 'maquette';
import * as maquette from 'maquette';
const h = maquette.h;

export interface TextInputConfig {
  placeholder: string;
  getValue: () => string;
  setValue: (value: string) => void;
}

export let createTextInput = (config: TextInputConfig) : Component => {
  
  function handleInput(evt: Event) {
    config.setValue((evt.target as HTMLInputElement).value)
  }
  
  return {
    renderMaquette: () => {
      return <input 
        type="text" 
        placeholder={config.placeholder}
        value={config.getValue()} 
        oninput={handleInput} />;
    }
  }
}
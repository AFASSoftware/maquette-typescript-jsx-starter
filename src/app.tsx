import {createTextInput} from './components/text-input'

import * as maquette from 'maquette';
const h = maquette.h;

let name = ''; // Piece of data

let nameInput = createTextInput({
  placeholder: 'What is your name?',
  getValue: () => name, 
  setValue: (value: string) => {name = value;}
});

// This function uses the 'jsx' notation 
// to create the virtual DOM. 
export function renderMaquette() {
  return <div>
    { nameInput.renderMaquette() }
    <p class="output">
      Hello {name || 'you'}!
    </p>
  </div>;
};

import {createTextInput} from './components/text-input';

let name = ''; // Piece of data

let nameInput = createTextInput({
  placeholder: 'What is your name?',
  getValue: () => name, 
  setValue: (value: string) => {
    name = value;
  }
});

// This function uses the 'jsx' notation 
// to create the virtual DOM. 
export function render() {
  return <div>
    { nameInput.render() }
    { null }
    <p class="output">
      Hello {name || 'you'}!
    </p>
  </div>;
}

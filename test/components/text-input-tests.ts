import { createTextInput } from '../../src/components/text-input';
import { createTestProjector }  from 'maquette-query';
import { expect } from 'chai';

describe('text input', () => {
  it('can edit a value', () => {
    let value = '';
    let input = createTextInput({
      placeholder: 'edit me',
      getValue: () => value,
      setValue: (newVal: string) => { value = newVal; }
    });
    let projector = createTestProjector();
    projector.initialize(input.render);

    projector.root.simulate.input({ value: 'Text' });

    expect(value).to.equal('Text');
    expect(projector.root.properties.value).to.equal('Text');

    value = 'Another text';
    expect(projector.root.properties.value).to.equal('Another text');
  });
});

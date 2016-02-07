import {createProjector} from 'maquette';
import {renderMaquette} from './app';

createProjector({}).append(document.body, renderMaquette);
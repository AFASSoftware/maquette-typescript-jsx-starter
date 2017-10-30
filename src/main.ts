import {createProjector} from 'maquette';
import {renderMaquette} from './app';
import { enableJsx } from 'maquette-jsx';

enableJsx();
createProjector({}).append(document.body, renderMaquette);

import {createProjector} from 'maquette';
import {renderMaquette} from './app';
import { enableGlobalJsx } from 'maquette-jsx';

enableGlobalJsx();
createProjector({}).append(document.body, renderMaquette);

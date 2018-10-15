import { createProjector } from 'maquette';
import { render as renderApplication } from './application';
import { enableGlobalJsx } from 'maquette-jsx';

enableGlobalJsx();
createProjector({}).append(document.body, renderApplication);

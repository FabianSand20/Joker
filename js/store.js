// js/store.js

import { renderProducts } from './components/moreproducts.js';
import { initVisualizations } from './components/visualizations.js';
import { initDetails } from './components/details.js';
import { initColors } from './components/colors.js';

initVisualizations();
initDetails();
renderProducts();
initColors();

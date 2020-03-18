import './core/polyfill';
import {boot} from './core/boot';
import { Lazy } from './lazy';
import './main';

boot.init([
	// module
	{ module: Lazy }
]);


/* IMPORT */

import type {Env} from './types';

/* MAIN */

const ENV: Env = globalThis.process?.env || {};

/* EXPORT */

export {ENV};

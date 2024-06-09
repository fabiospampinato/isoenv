
/* IMPORT */

import once from 'function-once';
import type {Env} from './types';

/* MAIN */

const getEnv = once ((): Env => {

  return globalThis.process?.env || {};

});

/* EXPORT */

export {getEnv};

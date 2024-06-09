
/* IMPORT */

import once from 'function-once';
import type {Env} from './types';

/* MAIN */

const getEnv = once ((): Env => {

  const process = ( globalThis.process ||= {} );
  const env = ( process.env ||= {} );

  return env;

});

/* EXPORT */

export {getEnv};

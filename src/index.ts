
/* IMPORT */

import {getEnv} from './utils';

/* MAIN */

const Env = {

  /* API */

  delete: ( key: string ): boolean => {

    const deleted = ( key in getEnv () );

    delete getEnv ()[key];

    return deleted;

  },

  get: ( key: string ): string | undefined => {

    return getEnv ()[key];

  },

  has: ( key: string ): boolean => {

    return ( key in getEnv () );

  },

  set: ( key: string, value: number | string ): void => {

    getEnv ()[key] = `${value}`;

  }

};

/* EXPORT */

export default Env;


/* IMPORT */

import {ENV} from './constants';

/* MAIN */

const Env = {

  /* API */

  delete: ( key: string ): boolean => {

    const deleted = ( key in ENV );

    delete ENV[key];

    return deleted;

  },

  get: ( key: string ): string | undefined => {

    return ENV[key];

  },

  has: ( key: string ): boolean => {

    return ( key in ENV );

  },

  set: ( key: string, value: number | string ): void => {

    ENV[key] = `${value}`;

  }

};

/* EXPORT */

export default Env;

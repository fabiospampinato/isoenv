
/* IMPORT */

import {describe} from 'fava';
import Env from '../dist/index.js';

/* MAIN */

describe ( 'IsoEnv', it => {

  it ( 'works', t => {

    /* SET */

    Env.set ( 'foo', 123 );
    Env.set ( 'bar', '123' );

    /* GET */

    t.is ( Env.get ( 'foo' ), '123' );
    t.is ( Env.get ( 'bar' ), '123' );
    t.is ( Env.get ( 'baz' ), undefined );

    /* DELETE */

    t.is ( Env.delete ( 'foo' ), true );
    t.is ( Env.delete ( 'baz' ), false );

    /* HAS */

    t.is ( Env.has ( 'foo' ), false );
    t.is ( Env.has ( 'bar' ), true );

  });

});

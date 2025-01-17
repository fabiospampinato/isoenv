# IsoEnv

A cross-platform Map-like interface for reading and writing environment variables.

If available it will use the `globalThis.process.env` object, otherwise it will use an internal object.

## Install

```sh
npm install isoenv
```

## Usage

```ts
import Env from 'isoenv';

// Set some environment variables

Env.set ( 'foo', 123 );
Env.set ( 'bar', '123' );

// Get some environment variables

Env.get ( 'foo' ); // '123'
Env.get ( 'bar' ); // '123'
Env.get ( 'baz' ); // undefined

// Delete some environment variables

Env.delete ( 'foo' );

// Check if an environment variable exists

Env.has ( 'foo' ); // false
Env.has ( 'bar' ); // true
```

## License

MIT © Fabio Spampinato

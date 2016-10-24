/**
 * @flow
 */

'use strict';

/* eslint-disable */

// Fix Promise$All problem of fbjs see https://github.com/facebook/flow/issues/2548
// Should be fixed in fbjs 0.8.5
type Promise$All = <Elem, T: Iterable<Elem>>(promises: T) => Promise<$TupleMap<T, typeof $await>>;
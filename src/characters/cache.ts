/* eslint-disable prettier/prettier */
import { InMemoryCache, Reference, makeVar } from '@apollo/client';

export const cache: InMemoryCache = new InMemoryCache({

});

// export const isLoggedInVar =
//   makeVar<boolean>(!!localStorage.getItem('token'));
// export const cartItemsVar = makeVar<string[]>([]);
import { enableStaticRendering } from 'mobx-react-lite';
import React, { createContext, ReactNode, useContext } from 'react';
import { RootStoreHydration } from 'src/types/posts';
import { RootStore } from '../stores/RootStore';

enableStaticRendering(typeof window === 'undefined');

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}

export function usePostsStore() {
  const { postsStore } = useRootStore();
  return postsStore;
}

function initializeStore(initialData?: RootStoreHydration): RootStore {
  const _store = store ?? new RootStore();

  // If your page has Next.js data fetching methods that use a Mobx store, it will
  // get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
  if (initialData) {
    _store.hydrate(initialData);
  }
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
}

export function RootStoreProvider({
  children,
  initialState
}: {
  children: ReactNode;
  initialState?: RootStoreHydration;
}) {
  const store = initializeStore(initialState);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}

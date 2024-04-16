/* eslint-disable no-unused-vars */
export type RootStoreHydration = {
  initialAllPosts: TPostsHydration;
  initialCurrentPost: TPostsHydration;
};

export type TPostsByCategory = [number, TCurrentPost[]];

export type TPostsHydration = {
  allPosts: TPostsByCategory[];
  currentPost: TCurrentPost;
};

export type TCurrentPost = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

export enum EGlobalLoading {
  INITIAL = 'initial',
  LOADING = 'loading',
  LOADED = 'loaded'
}

export enum EMenuLinkFlag {
  LINKED_IN = 'linkedIn',
  HH = 'hh',
  CV = 'cv'
}

export type TMenu = {
  id: number;
  name: string;
  url: string;
  tab?: boolean;
  flag?: EMenuLinkFlag.LINKED_IN | EMenuLinkFlag.HH | EMenuLinkFlag.CV;
};

export enum EHTTPMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH'
}

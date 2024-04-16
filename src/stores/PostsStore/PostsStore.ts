import { action, makeObservable, observable } from 'mobx';
import { RootStore } from '../RootStore';
import { getAllPostsByCategory, deletePost, getCurrentPost } from './utils';
import { TPostsHydration, TCurrentPost, TPostsByCategory, EGlobalLoading } from '../../types/posts';

export type CounterHydration = {
  start: number;
};

export class PostsStore {
  root: RootStore;
  globalLoading: EGlobalLoading = EGlobalLoading.INITIAL;
  allPosts: TPostsByCategory[] = [
    [
      1,
      [
        {
          id: 1,
          userId: 1,
          title: 'Sample',
          body: 'Sample'
        }
      ]
    ]
  ];
  currentPost: TCurrentPost = {
    id: 1,
    userId: 1,
    title: 'Sample',
    body: 'Sample'
  };

  constructor(root: RootStore) {
    this.root = root;
    makeObservable(this, {
      hydrate: action,
      getPosts: action,
      allPosts: observable,
      currentPost: observable,
      globalLoading: observable
    });
  }

  getPosts = async () => {
    this.allPosts = await getAllPostsByCategory();

    return this.allPosts;
  };

  getCurrentPost = async (id: string | string[]) => {
    this.currentPost = await getCurrentPost(id);

    return this.currentPost;
  };

  async deletePost(id: string) {
    const result = await deletePost(id);

    return result;
  }

  protected setLoading(flag: EGlobalLoading) {
    this.globalLoading = flag;
  }

  hydrate(data?: TPostsHydration) {
    if (data.allPosts) {
      this.allPosts = data.allPosts;
    }
    if (data.currentPost) {
      this.currentPost = data.currentPost;
    }
  }
}

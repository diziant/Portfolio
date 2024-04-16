import { PostsStore } from './PostsStore/PostsStore';
import { RootStoreHydration } from 'src/types/posts';

export class RootStore {
  postsStore: PostsStore;

  constructor() {
    this.postsStore = new PostsStore(this);
  }

  hydrate(data: RootStoreHydration) {
    if (data.initialAllPosts) {
      this.postsStore.hydrate(data.initialAllPosts);
    }
    if (data.initialCurrentPost) {
      this.postsStore.hydrate(data.initialCurrentPost);
    }
  }
}

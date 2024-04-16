import { EHTTPMethod, TPostsByCategory } from 'src/types/posts';

export const fetcher = async (
  url: string,
  method: EHTTPMethod = EHTTPMethod.GET,
  body?: string
) => {
  return fetch(url, {
    method,
    body
  });
};

export const getAllPosts = async () => {
  const response = await fetcher('http://jsonplaceholder.typicode.com/posts');

  const result = {
    response,
    data: (await response.json()) || {}
  };

  if (!response.ok) throw result;

  return result.data;
};

export const getAllPostsByCategory = async () => {
  const response = await fetcher('http://jsonplaceholder.typicode.com/posts');

  const result = {
    response,
    data: (await response.json()) || {}
  };

  if (!response.ok) throw result;

  const postsByCategory = new Map();

  result.data.forEach((item) => {
    if (postsByCategory.has(item.userId)) {
      postsByCategory.get(item.userId).push(item);
    } else {
      postsByCategory.set(item.userId, [item]);
    }
  });

  return Array.from(postsByCategory) as TPostsByCategory[];
};

export const getCurrentPost = async (id: string | string[]) => {
  const response = await fetcher(`http://jsonplaceholder.typicode.com/posts/${id}`);

  const result = {
    response,
    data: (await response.json()) || {}
  };

  if (!response.ok) throw result;

  return result.data;
};

export const deletePost = async (id: string | string[]) => {
  const response = await fetcher(
    `http://jsonplaceholder.typicode.com/posts/${id}`,
    EHTTPMethod.PATCH,
    JSON.stringify({ id: id })
  );

  const result = {
    response,
    data: (await response.json()) || {}
  };

  if (!response.ok) throw result;

  return result.data;
};

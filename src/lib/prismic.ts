import Prismic from '@prismicio/client';

export const apiEndpoint = 'https://e-leonor.cdn.prismic.io/api/v2';

export const client = (req = null) => {
  const options = req ? { req } : null;
  return Prismic.client(apiEndpoint, options);
};

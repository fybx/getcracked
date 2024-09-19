import fetchAuthors from '$lib/assets/js/fetchAuthors';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const GET = async ({ params }) => {
  const { author } = params;
  const authors = (await fetchAuthors()).authors;
  const authorData = authors.find(a => a.name === author);
 
  if (!authorData) {
    throw error(404, 'Author not found');
  }

  const imageUrl = authorData.imageUrl;
  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw error(404, 'Image not found');
  }

  const contentType = response.headers.get('content-type');
  return new Response(response.body, {
    headers: {
      'Content-Type': contentType
    }
  });
};

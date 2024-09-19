import fetchPosts from '$lib/assets/js/fetchPosts';
import { siteURL } from '$lib/config.js';

async function sha256(message) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}

const fetchAuthors = async () => {
  const authors = await Promise.all(
    Object.entries(import.meta.glob('/src/lib/authors/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      const postCount = (await fetchPosts({byAuthor: metadata.name})).posts.length;

      return { ...metadata, postCount, slug }
    })
  )

  await Promise.all(
    authors.map(async (a) => {
      if (!a.imageUrl && a.links.email) {
        const hash = await sha256(a.links.email.trim().toLowerCase());
        a.imageUrl = `https://gravatar.com/avatar/${hash}`;
      } else if (!a.imageUrl) {
        a.imageUrl = `https://${siteURL}/ui/default_user.svg`;
      }
    })
  )

  return { authors }
}

export default fetchAuthors

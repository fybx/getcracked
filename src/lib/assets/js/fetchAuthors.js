import fetchPosts from '$lib/assets/js/fetchPosts';

const fetchAuthors = async () => {
  const authors = await Promise.all(
    Object.entries(import.meta.glob('/src/lib/authors/*.md')).map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const slug = path.split('/').pop().slice(0, -3)
      const postCount = (await fetchPosts({byAuthor: metadata.name})).posts.length;

      return { ...metadata, postCount, slug }
    })
  )

  return { authors }
}

export default fetchAuthors

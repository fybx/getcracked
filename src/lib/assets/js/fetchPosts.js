import { postsPerPage } from '$lib/config'

const fetchPosts = async ({ offset = 0, limit = postsPerPage, byAuthor = '', tag = '' } = {}) => {

	const posts = await Promise.all(
		Object.entries(import.meta.glob('/src/lib/posts/*.md')).map(async ([path, resolver]) => {
			const { metadata } = await resolver()
			const slug = path.split('/').pop().slice(0, -3)
      metadata.author = (typeof metadata.author === 'string') ? [ metadata.author ] : [ ...metadata.author ];
      return { ...metadata, slug }
		})
	)

	let sortedPosts = posts.sort((a, b) => new Date(b.date) - new Date(a.date))
	
  if (byAuthor) {
    sortedPosts = sortedPosts.filter(post => post.author.includes(byAuthor))
  }

	if (tag) {
    sortedPosts = sortedPosts.filter(post => post.categories.includes(tag))
	}
  
	if (offset) {
		sortedPosts = sortedPosts.slice(offset)
	}
	
	if (limit && limit < sortedPosts.length && limit != -1) {
		sortedPosts = sortedPosts.slice(0, limit)
	}

	sortedPosts = sortedPosts.map(post => ({
		author: post.author,
    title: post.title,
		slug: post.slug,
		excerpt: post.excerpt,
		coverImage: post.coverImage,
		coverWidth: post.coverWidth, 
		coverHeight: post.coverHeight,
		date: post.date,
		categories: post.categories,
	}))

	return {
		posts: sortedPosts
	}
}

export default fetchPosts

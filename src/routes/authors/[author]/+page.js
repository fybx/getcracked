import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
	try {
		const author = await import(`../../../lib/authors/${params.author}.md`)

		return {
			content: author.default,
			meta: { ...author.metadata, slug: params.author }
		}
	} catch(err) {
		error(404, err);
	}
}

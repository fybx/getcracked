import { error } from '@sveltejs/kit'

export const load = async () => {
	try {
		const indexFile = await import('../lib/index.md')
		const index = indexFile.default
		
		return {
			index
		}
	}
	catch(err) {
		error(500, err);
	}
}

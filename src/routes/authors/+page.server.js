export const load = async ({ url, fetch}) => {
  const authorRes = await fetch(`${url.origin}/api/authors.json`)
	const authors = await authorRes.json()
  return { authors }
};

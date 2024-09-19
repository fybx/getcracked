import fetchAuthors from '$lib/assets/js/fetchAuthors'
import { json } from '@sveltejs/kit'

export const prerender = true

export const GET = async () => {
  const { authors } = await fetchAuthors()

  return json(authors)
}

<!-- Renders any page at /blog/tag/* -->
<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import { contributeLink, postsPerPage } from '$lib/config';

	export let data;

	const { page, posts, tag, total } = data;

	$: lowerBound = page * postsPerPage - (postsPerPage - 1) || 1;
	$: upperBound = Math.min(page * postsPerPage, total);
</script>

<svelte:head>
	<title>Tag: {tag} • getcracked</title>
</svelte:head>

<h1>Tag: {tag}</h1>

{#if posts.length}
	<PostsList {posts} />
	<Pagination currentPage={page} totalPosts={total} path="/blog/tag/{tag}/page" />
{:else}
	<p>
		<strong>Oops!</strong> Apparently no one's talked about "{tag}". Would you like to be the first
		one? If yes, <a href={contributeLink}>contribute</a>.
	</p>

	<p><a href="/tags">Back to blog</a></p>
{/if}


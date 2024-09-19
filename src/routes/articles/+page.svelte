<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	export let data;
</script>

<svelte:head>
	<title>Articles</title>
	<meta data-key="description" name="description" content="TODO: update here" />
</svelte:head>

<h1>Articles</h1>

<p>All articles, sorted by the freshest.</p>

<div class="container">
	<div class="left">
		<PostsList posts={data.posts} />
		<Pagination currentPage={1} totalPosts={data.total} />
	</div>
	<div class="right">
		<!-- suggested tags     -->
		<!-- suggested authors  -->
	</div>
</div>

<style lang="scss">
</style>

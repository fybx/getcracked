<script>
	import PostsList from '$lib/components/PostsList.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Seo from 'sk-seo';

	export let data;
</script>

<Seo
	title="Articles • getcracked"
	description="All articles available on getcracked.wiki - for you!"
	imageURL="https://getcracked.wiki/og.png"
/>

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

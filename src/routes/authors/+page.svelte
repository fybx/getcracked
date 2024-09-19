<script>
	import AuthorCard from '$lib/components/AuthorCard.svelte';
	export let data;
</script>

<svelte:head>
	<title>Authors • getcracked</title>
	<!--TODO: add description -->
	<meta data-key="description" name="description" content="" />
</svelte:head>

<h1>Authors</h1>

<p>This is our hall of fame, thanks to these guys we have getcracked.wiki.</p>

<div class="container">
	{#each data.authors as author}
		<AuthorCard {author} />
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
</style>

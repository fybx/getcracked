<script>
	import AuthorCard from '$lib/components/AuthorCard.svelte';
	import Seo from 'sk-seo';
	export let data;
</script>

<Seo
	title="Authors • getcracked"
	description="Our hall of fame, thanks to our authors we have getcracked.wiki"
	imageURL="https://getcracked.wiki/og.png"
/>

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

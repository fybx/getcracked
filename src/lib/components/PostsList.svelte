<script>
	import ArticleCard from './ArticleCard.svelte';
	export let posts = [];
</script>

<section>
	{#each posts as post}
		<ArticleCard {post} />
	{/each}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;
		row-gap: 3rem;
	}
</style>

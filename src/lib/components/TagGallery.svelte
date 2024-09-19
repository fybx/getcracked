<script>
	export let heatmap = false;
	export let data;
	let uniqueCategories;
	let maxCount;

	if (heatmap) {
		uniqueCategories = data.uniqueCategories;
		maxCount = Math.max(...uniqueCategories.map((category) => category.count));
	}

	function getTagColor(count) {
		const maxColor = 100;
		const minColor = 0;
		const percentage = (count / maxCount) * (maxColor - minColor) + minColor;
		return `rgba(34, 151, 153, ${percentage}%)`;
	}
</script>

<div class="tag-grid">
	{#if heatmap}
		{#each uniqueCategories as tag}
			<a class="tag" href="/tags/{tag.title}" style="--tag-color: {getTagColor(tag.count)};">
				{tag.title} ({tag.count})
			</a>
		{/each}
	{:else}
		{#each data as tag}
			<a class="tag" href="/tags/{tag}">{tag}</a>
		{/each}
	{/if}
</div>

<style lang="scss">
	.tag-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.tag {
		background-color: var(--tag-color, rgba(34, 151, 153, 100%));
		color: #fff;
		text-align: center;
		text-decoration: none !important;
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		font-weight: bold;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
		transition: transform 0.3s ease-out;

		&:hover {
			color: #fff !important;
			transform: scale(1.05);
		}
	}
</style>

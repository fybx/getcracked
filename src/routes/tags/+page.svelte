<script>
	export let data;
	const { uniqueCategories } = data;

	const maxCount = Math.max(...uniqueCategories.map((category) => category.count));

	function getTagColor(count) {
		const maxColor = 100;
		const minColor = 0;
		const percentage = (count / maxCount) * (maxColor - minColor) + minColor;
		return `rgba(34, 151, 153, ${percentage}%)`;
	}
</script>

<svelte:head>
	<title>Tags • getcracked</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All tags</h1>
	<p>Check out what we've talked about so far</p>

	<div class="tag-grid">
		{#each uniqueCategories as tag}
			<a class="tag" href="/tags/{tag.title}" style="--tag-color: {getTagColor(tag.count)};">
				{tag.title} ({tag.count})
			</a>
		{/each}
	</div>
</div>

<style lang="scss">
	.tag-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.tag {
		background-color: var(--tag-color, hsl(120, 60%, 70%));
		color: #fff;
		text-align: center;
		text-decoration: none !important;
		padding: 1rem;
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

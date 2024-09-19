<script>
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
		<div class="author">
			<img src={author.imageUrl} alt="{author.name}'s image" />
			<div class="author-info">
				<h1>{author.name}</h1>
				<p>Has {author.count} articles.</p>
			</div>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;

		.author {
			display: flex;
			align-items: flex-start;
			width: 100%;
			max-width: 300px;
			padding: 1rem;
			border: 1px solid #229799;
			border-radius: 0.5rem;

			img {
				width: 80px;
				height: 80px;
				object-fit: cover;
				border-radius: 0.5rem;
				margin-right: 1rem;
			}

			.author-info {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;

				h1 {
					font-size: 1.2rem;
					margin: 0 0 0.5rem 0;
				}

				p {
					font-size: 0.9rem;
					margin: 0;
					color: #666;
				}
			}
		}
	}
</style>

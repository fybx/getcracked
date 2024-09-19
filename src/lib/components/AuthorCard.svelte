<script>
	export let author;
	const links = Object.keys(author.links)
		.sort()
		.map((key) => [key, author.links[key]]);
	const logoMap = {
		github: '/ui/github.svg',
		x: '/ui/x.svg',
		twitter: '/ui/x.svg',
		link: '/ui/link.svg',
		email: '/ui/email.svg'
	};

	Object.keys(links).forEach((key) => {
		if (key === 'x' || key === 'twitter') {
			links[key] = `https://x.com/${links[key]}`;
		} else if (key === 'email') {
			links[key] = `mailto:${links[key]}`;
		} else if (key === 'github') {
			links[key] = `https://github.com/${links[key]}`;
		}
	});
</script>

<div class="author">
	<img src={author.imageUrl} alt="{author.name}'s image" crossorigin="anonymous" />
	<div class="author-info">
		<h1>{author.name}</h1>
		<p>Has {!author.postCount ? 0 : author.postCount} articles.</p>
		{#if author.links}
			<nav>
				{#each links as [key, value]}
					<a href={value}><img src={logoMap[key]} alt={key} /></a>
				{/each}
			</nav>
		{/if}
	</div>
</div>

<style lang="scss">
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
				margin: 0 0 0.25rem 0;
			}

			p {
				font-size: 1rem;
				margin: 0;
				color: #666;
			}

			nav {
				display: flex;

				a img {
					height: 1rem;
					width: auto;
					border-radius: unset;
				}
			}
		}
	}
</style>

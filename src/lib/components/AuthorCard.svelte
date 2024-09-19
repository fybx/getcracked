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

	links.forEach((l) => {
		if (l[0] == 'x' || l[0] == 'twitter') {
			l[1] = `https://x.com/${l[1]}`;
		} else if (l[0] == 'email') {
			l[1] = `mailto:${l[1]}`;
		} else if (l[0] == 'github') {
			l[1] = `https://github.com/${l[1]}`;
		}
	});
</script>

<a href="/authors/{author}">
	<div class="author">
		<img src={author.imageUrl} alt="{author.name}'s image" crossorigin="anonymous" />
		<div class="author-info">
			<h1>{author.name}</h1>
			<p>
				Has {author.postCount ? author.postCount : 0}
				{author.postCount === 1 ? 'article' : 'articles'}.
			</p>
			{#if author.links}
				<nav>
					{#each links as [key, value]}
						<a href={value} target="_blank" rel="noopener noreferrer"
							><img src={logoMap[key]} alt={key} /></a
						>
					{/each}
				</nav>
			{/if}
		</div>
	</div>
</a>

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
			row-gap: 0.25rem;
			flex: 1;

			h1 {
				margin: 0;
				font-size: 1.2rem;
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

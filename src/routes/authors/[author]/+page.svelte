<script>
	import TagGallery from '$lib/components/TagGallery.svelte';
	import Seo from 'sk-seo';

	export let data;
	let author = data.meta;

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

<div class="layout">
	<div class="left">
		<img src="/api/authors/{author.name}/image?s=256" alt="{author.name}'s profile picture" />
		<h1>{author.name}</h1>
		<hr class="ui" />
		<nav>
			{#each links as [key, value]}
				<div class="item">
					<img src={logoMap[key]} alt={key} />
					<a href={value} target="_blank" rel="noopener noreferrer">
						{value}
					</a>
				</div>
			{/each}
		</nav>
	</div>
	<div class="right">
		<article class="markdown contained">
			<svelte:component this={data.content} />
		</article>
		<!--TODO: complete this impl
    <section class="latest-posts">
    </section>
	  <section class="tags">
      <TagGallery {data} />
    </section>
    -->
	</div>
</div>

<style lang="scss">
	.layout {
		padding: 60px 0 0 0;

		display: grid;
		grid-template-columns: 16rem 1fr;
		grid-template-rows: 1fr;
		column-gap: 4rem;
	}

	.left {
		grid-area: 1 / 1 / 2 / 2;

		img {
			height: 16rem;
			border-radius: 1rem;
		}

		h1 {
			font-size: 1.75rem;
		}

		nav {
			display: flex;
			flex-direction: column;
			row-gap: 0.65rem;

			.item {
				display: flex;
				align-items: center;

				img {
					border-radius: unset;
					margin: 0 1rem 0 0;
					height: 1.25rem;
					width: 1.25rem;
				}

				a {
					font-size: 1.25rem;
					text-underline-offset: 2px;
					&:hover {
						text-decoration: underline;
					}
				}
			}
		}
	}

	.right {
		grid-area: 1 / 2 / 2 / 3;

		border-radius: 1rem;
		border: solid 1px #229799;
		box-sizing: border-box;
		padding: 2rem;
	}

	@media (max-width: 600px) {
		.layout {
			flex-direction: column;
		}

		.left {
			position: static;
			width: 100%;
			text-align: center;
		}
	}
</style>

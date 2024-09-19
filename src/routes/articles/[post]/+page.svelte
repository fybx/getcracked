<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
	import TagGallery from '$lib/components/TagGallery.svelte';
	import Seo from 'sk-seo';

	export let data;
	let post = data.meta;

	post.date = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});
	post.updated = new Date(post.date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'short',
		day: 'numeric'
	});

	const { categories } = data.meta;
	const { PostContent } = data;
</script>

<Seo
	title="{post.title} • getcracked"
	description={post.excerpt}
	keywords={post.categories.join(', ')}
	imageURL="https://getcracked.wiki{post.coverImage}"
	author={post.author}
/>

<svelte:head>
	<link rel="stylesheet" href="/css/prism-one-light.css" media="(prefers-color-scheme: light)" />
	<link rel="stylesheet" href="/css/prism-one-dark.css" media="(prefers-color-scheme: dark)" />
</svelte:head>

<article class="markdown">
	{#if !post.dontCover && post.coverImage}
		<center
			><img
				class="cover-image"
				src={post.coverImage}
				alt="Cover image of post {post.title}"
				style="aspect-ratio: {post.coverWidth} / {post.coverHeight};"
			/></center
		>
	{/if}

	<h1>{post.title}</h1>

	<div class="meta">
		<div class="row0">
			{#each Array.isArray(post.author) ? post.author : [post.author] as author}
				<img
					class="author-image"
					src="/api/authors/{author}/image"
					alt="{author}'s profile image"
				/>
			{/each}
			{#each Array.isArray(post.author) ? post.author : [post.author] as author}
				<p>{author}</p>
			{/each}
		</div>
		{#if post.date != post.updated}
			<p>Published {post.date} · Updated {post.updated}</p>
		{:else}
			<p>Published {post.date}</p>
		{/if}
	</div>

	<svelte:component this={PostContent} />
</article>

<hr class="ui" />

{#if categories}
	<aside>
		<h2>Tags</h2>
		<TagGallery data={categories} />
	</aside>
{/if}

<style lang="scss">
	.cover-image {
		margin-top: 60px; // should match h1's margin-top in global.scss
		width: 90%;
	}

	.meta {
		.row0 {
			display: flex;
			align-items: center;

			img {
				height: 2rem;
				width: 2rem;
				border-radius: 50%;
				display: inline-block;
				margin-right: 0.5rem;
			}

			p {
				margin: 0 1rem 0 0;
				color: #fff;
				font-size: 1.2rem !important;

				&:last-of-type {
					margin: 0;
				}
			}
		}

		p {
			color: #bbb;
			font-size: 1rem !important;
		}
	}
</style>

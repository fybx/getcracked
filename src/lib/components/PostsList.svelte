<script>
	export let posts = [];
</script>

<section>
	{#each posts as post}
		<a href="/articles/{post.slug}">
			<article>
				<img
					class="post-image"
					src={post.coverImage}
					alt="{post.slug}'s cover image"
					width={post.coverWidth}
					height={post.coverHeight}
					style="aspect-ratio: {post.coverWidth} / {post.coverHeight}"
				/>
				<div class="post-details">
					<h2>{post.title}</h2>
					<p>{post.excerpt}</p>
					<div class="author-info">
						{#each post.author as author}
							<img
								class="author-image"
								src="/api/authors/{author}/image"
								alt="{author}'s profile image"
							/>
						{/each}
						<p>{post.author}</p>
						<p>{post.date}</p>
					</div>
				</div>
			</article>
		</a>
	{/each}
</section>

<style lang="scss">
	section {
		display: flex;
		flex-direction: column;

		a {
			text-decoration: none !important;
		}

		article {
			display: grid;
			grid-template-columns: 1fr 2fr;
			gap: 20px;
			margin-bottom: 30px;

			.post-details {
				display: grid;
				grid-template-rows: auto 1fr auto;
				gap: 10px;

				h2 {
					margin: 0;
				}
			}
			.author-info {
				display: flex;
				align-items: center;
				gap: 10px;
			}
			.author-image {
				width: 1.5rem;
				height: 1.5rem;
				border-radius: 50%;
				object-fit: cover;
			}
			.post-image {
				width: 100%;
				height: auto;
				object-fit: cover;
			}
			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
</style>

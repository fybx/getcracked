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
						<p>{post.author.join(', ')}</p>
						<p>
							{new Date(post.date).toLocaleDateString('en-US', {
								year: 'numeric',
								month: 'short',
								day: 'numeric'
							})}
						</p>
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
		row-gap: 3rem;

		a {
			text-decoration: none !important;
			&:hover {
				color: #fff !important;
			}
		}

		article {
			display: grid;
			grid-template-columns: 1fr 2fr;
			gap: 1rem;

			.post-details {
				display: grid;
				grid-template-rows: auto 1fr auto;
				gap: 0.5rem;

				h2,
				p {
					margin: 0;
				}
			}
			.author-info {
				display: flex;
				align-items: center;
				gap: 0.5rem;

				p:last-of-type {
					margin-left: auto;
				}

				img {
					width: 1.5rem;
					height: 1.5rem;
					border-radius: 50%;
					object-fit: cover;
				}
			}

			.post-image {
				width: 100%;
				height: auto;
				object-fit: cover;
			}

			@media (max-width: 700px) {
				grid-template-columns: 1fr;
				grid-template-rows: auto 1fr auto;

				.post-details {
					grid-row: 2 / 3;
				}

				.author-info {
					grid-row: 3 / 4;
					grid-column: 1 / -1;
				}
			}
		}
	}
</style>

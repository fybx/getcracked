<script>
	import NavItems from './NavItems.svelte';
</script>

<header>
	<a href="/" class="site-title"> <img src="/ui/logomark.png" alt="getcracked.wiki" /> </a>

	<NavItems />
</header>

<style lang="scss">
	header {
		padding: 1rem clamp(240px, 10vw, 1000px);
		box-sizing: border-box;
		display: flex;
		justify-content: space-between;
		align-items: center;

		border-bottom: 1px solid #135859;
		box-shadow: 0 0px 32px 0px #229799;
	}

	.site-title {
		height: 2rem;

		img {
			height: 2rem;
		}
	}

	@media (prefers-color-scheme: light) {
		header {
			border-bottom-color: #22979975;
		}
	}

	@media (max-width: 1100px) {
		header {
			padding: 1rem 2rem;
		}
	}

	@media (max-width: 620px) {
		header {
			flex-direction: column;
		}

		.site-title {
			font-size: 1.75rem;
		}
	}
</style>

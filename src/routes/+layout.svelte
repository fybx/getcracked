<!-- This is the global layout file; it "wraps" every page on the site. (Or more accurately: is the parent component to every page component on the site.) -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { currentPage, isMenuOpen } from '../lib/assets/js/store.js';
	import { navItems } from '$lib/config';
	import { preloadCode } from '$app/navigation';
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { siteTitle, siteURL } from '$lib/config.js';
	import '../global.scss';
	export let data;

	const transitionIn = { delay: 150, duration: 150 };
	const transitionOut = { duration: 100 };

	/**
	 * Updates the global store with the current path. (Used for highlighting
	 * the current page in the nav, but could be useful for other purposes.)
	 **/
	$: currentPage.set(data.path);

	/**
	 * This pre-fetches all top-level routes on the site in the background for faster loading.
	 * https://kit.svelte.dev/docs/modules#$app-navigation-preloaddata
	 *
	 * Any route added in src/lib/config.js will be preloaded automatically. You can add your
	 * own preloadData() calls here, too.
	 **/
	onMount(() => {
		const navRoutes = navItems.map((item) => item.route);
		preloadCode(...navRoutes);
	});
</script>

<svelte:head>
	<link
		rel="alternate"
		type="application/rss+xml"
		title={siteTitle}
		href="http://{siteURL}/api/rss.xml"
	/>
</svelte:head>

<div class="layout" class:open={$isMenuOpen}>
	<Header />
	{#key data.path}
		<main id="main" tabindex="-1" in:fade|global={transitionIn} out:fade|global={transitionOut}>
			<div class="left"></div>
			<div class="center">
				<slot />
			</div>
			<div class="right"></div>
		</main>
	{/key}
	<Footer />
</div>

<style lang="scss">
	.layout {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	#main {
		flex: 1;
		display: grid;
		grid-template-columns: minmax(240px, 10vw) auto minmax(240px, 10vw);
		background-color: #222;

		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='199' viewBox='0 0 100 199'%3E%3Cg fill='%23229799' fill-opacity='0.4'%3E%3Cpath d='M0 199V0h1v1.99L100 199h-1.12L1 4.22V199H0zM100 2h-.12l-1-2H100v2z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");

		.left,
		.right {
			background-color: rgba(0, 0, 0, 0.2);
		}

		.center {
			padding-inline: 4rem;
			padding-bottom: 60px; // this should follow the margin-top of h1 defined at global.scss
			background-color: #00000060;
			backdrop-filter: blur(4px);
			-webkit-backdrop-filter: blur(4px);
		}

		@media (prefers-color-scheme: light) {
			background-color: #fff;

			.center {
				background-color: rgba(0, 0, 0, 0.05);
				backdrop-filter: blur(8px);
				-webkit-backdrop-filter: blur(8px);
			}

			.left,
			.right {
				background-color: rgba(0, 0, 0, 0.1);
			}
		}

		@media (max-width: 1100px) {
			grid-template-columns: 0 auto 0;

			.center {
				padding-inline: 2rem;
			}
		}
	}
</style>

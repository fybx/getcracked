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
		background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23229799' fill-opacity='0.32'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
	}

	@media (max-width: 1100px) {
		#main {
			grid-template-columns: 0 auto 0;
		}

		#main .center {
			padding-inline: 2rem;
		}
	}

	#main .left,
	#main .right {
		background-color: rgba(0, 0, 0, 0.2);
	}

	#main .center {
		padding-inline: 4rem;
		background-color: #00000030;
		backdrop-filter: blur(4px);
		overflow-y: auto;
	}
</style>

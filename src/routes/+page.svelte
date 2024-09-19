<script>
	import { siteTitle } from '$lib/config';

	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>

<article class="markdown">
	<svelte:component this={data.index} />
</article>

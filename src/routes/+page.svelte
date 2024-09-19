<script>
	import Seo from 'sk-seo';
	export let data;
</script>

<Seo
	title="Home • getcracked"
	description="Welcome to getcracked.wiki, where information has no bounds. Let's get cracked together!"
	imageURL="https://getcracked.wiki/og.png"
/>

<article class="markdown">
	<svelte:component this={data.index} />
</article>

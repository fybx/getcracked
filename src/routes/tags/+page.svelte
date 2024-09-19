<script>
	import TagGallery from '$lib/components/TagGallery.svelte';
	import Seo from 'sk-seo';
	export let data;
</script>

<Seo
	title="Tags • getcracked"
	description="All of the things our authors have talked about on getcracked.wiki"
	imageURL="https://getcracked.wiki/og.png"
/>

<div class="compressed-content">
	<h1 class="h2">All tags</h1>
	<p>Check out what we've talked about so far</p>
	<TagGallery heatmap={true} {data} />
</div>

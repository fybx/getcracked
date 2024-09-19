<script>
	import TagGallery from '$lib/components/TagGallery.svelte';

	export let data;
</script>

<svelte:head>
	<title>Tags • getcracked</title>
</svelte:head>

<div class="compressed-content">
	<h1 class="h2">All tags</h1>
	<p>Check out what we've talked about so far</p>
	<TagGallery heatmap={true} {data} />
</div>

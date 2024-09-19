<script>
	export let title = '';
	export let type = 'note';

	if (!title) {
		title = type.charAt(0).toUpperCase() + type.slice(1);
	}
	const colors = {
		note: 'rgb(68, 147, 248)',
		tip: 'rgb(63, 185, 80)',
		important: 'rgb(171, 125, 248)',
		warning: 'rgb(210, 153, 34)',
		caution: 'rgb(248, 81, 73)'
	};
</script>

<div class={`callout ${type}`} style="border-color: {colors[type]}">
	<div class="callout-title" style="color: {colors[type]}">{title}</div>
	<div>
		<slot></slot>
	</div>
</div>

<style>
	.callout {
		padding: 1rem;
		margin: 1rem 0;
		border-left: 0.3rem solid;
	}
	.callout-title {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}
</style>


<script>
	import { navItems } from '$lib/config';
	import NavItem from './NavItem.svelte';
</script>

<nav>
	{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
	{/each}
</nav>

<style lang="scss">
	nav {
		display: flex;
		align-content: center;
	}
</style>

<script>
	import { currentPage, isMenuOpen } from '../assets/js/store';

	export let href;

	$: isCurrentPage = $currentPage.startsWith(href);

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false);
		}
	};
</script>

<a
	{href}
	on:click={maybeCloseMenu}
	class:active={isCurrentPage}
	aria-current={isCurrentPage ? 'page' : false}
>
	<slot />
</a>

<style lang="scss">
	a {
		font-size: 1.25rem;
		margin-right: 1rem;

		&:last-of-type {
			margin-right: 0;
		}

		&:hover {
			color: #229799;
		}

		&.active {
			color: #229799;
			text-decoration: underline solid 1px;
			text-underline-offset: 2px;
		}
	}
</style>

<script lang="ts">
	import '../app.css';
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import { Header } from '../components';
	let { children } = $props();
</script>

<div>
	<Header />
	{@render children()}
</div>

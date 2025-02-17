<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
    import logo from '$lib/assets/logo.jpg';
</script>

<Navbar>
    <NavBrand href="/">
        <img src={logo} class="me-3 h-16 sm:h-9" alt="Flowbite Logo" />
        <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">ERNI</span>
    </NavBrand>
</Navbar>
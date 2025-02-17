<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { Button } from 'flowbite-svelte';
    import { isLoggedIn } from '$lib/localStorage.js';

    onMount(() => {
        if (isLoggedIn()) {
            goto('./main');
        } else {
            goto('./login');
        }
    });
</script>
  
<div class="p-8">
    <Button>Default</Button>
</div>
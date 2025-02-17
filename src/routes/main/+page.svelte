<script lang='ts'>
  import { Card } from 'flowbite-svelte';
  import robot from '$lib/assets/robot.webp';
  import tresRaya from '$lib/assets/tresRaya.webp';
  import { goto } from '$app/navigation';
  let vCard = false;

  function navigateTo(path: string) {
    goto(path);
  }
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="space-y-4">
    <Card img={robot} reverse={vCard} on:click={() => navigateTo('/robot')} class="cursor-pointer"/>
    <Card img={tresRaya} reverse={vCard} on:click={() => navigateTo('/tres-raya')} class="cursor-pointer"/>
  </div>
</div>
<script>
  import { Card, Button, Toggle } from 'flowbite-svelte';
  import { ArrowRightOutline } from 'flowbite-svelte-icons';
  import robot from '$lib/assets/robot.webp';
  import tresTaya from '$lib/assets/tresRaya.webp';
  let vCard = false;
</script>

<div class="flex items-center justify-center min-h-screen">
  <div class="space-y-4">
    <Card img={robot} reverse={vCard}>
      <div class="flex justify-center">
        <Button class="bg-blue-500 hover:bg-blue-700 text-white">
          Start <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
      </div>
    </Card>
    <Card img={tresTaya} reverse={vCard}>
      <div class="flex justify-center">
        <Button class="bg-blue-500 hover:bg-blue-700 text-white">
          Start <ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
        </Button>
      </div>
    </Card>
  </div>
</div>
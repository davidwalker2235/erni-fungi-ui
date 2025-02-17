<script>
    import { Card, Input, Label, Button } from 'flowbite-svelte';
    import { setItem } from '$lib/localStorage.js';
    import { goto } from '$app/navigation';

    let email = '';
    let password = '';

    function handleSubmit(event) {
        event.preventDefault();
        if (email === 'erni' && password === 'erni') {
            setItem('loggedIn', 'true');
            goto('/main');
        } else {
            alert('incorrect user or pass');
        }
    }
</script>

<div class="flex items-center justify-center min-h-screen">
    <Card>
        <form on:submit={handleSubmit}>
            <div class="grid gap-12 mb-12 md:grid-cols-1">
                <div class="mb-6">
                    <Label for="user" class="mb-2">Email address</Label>
                    <Input type="text" id="email" bind:value={email} placeholder="Your name" required />
                </div>
                <div class="mb-6">
                    <Label for="password" class="mb-2">Password</Label>
                    <Input type="password" id="password" bind:value={password} placeholder="•••••••••" required />
                </div>
                <Button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white">Submit</Button>
            </div>
        </form>
    </Card>
</div>
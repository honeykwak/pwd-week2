<!-- src/routes/+layout.svelte -->
<script>
  // v5: <slot> 대신 children 스니펫을 받아 {@render children()}로 렌더
  let { children } = $props();
</script>

<svelte:head>
  <title>AJOU Mini Portfolio</title>
  <meta name="description" content="SvelteKit + Vercel mini portfolio" />
</svelte:head>

<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/projects">Projects</a>
</nav>

<main>
  {@render children()}
</main>

<style global>
  @import '../app.css';
</style>
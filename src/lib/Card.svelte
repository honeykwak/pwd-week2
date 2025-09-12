<!-- src/lib/Card.svelte -->
<script>
  let { slug, title, summary, image = undefined, href = undefined } = $props();
</script>

<article class="card">
  {#if image}
    <img src={image} alt="{title} project preview" class="card-image"/>
  {/if}
  <div class="card-content">
    <h3>
      <!-- If href exists, it's an external link. Otherwise, internal. -->
      <a href={href ? href : `/projects/${slug}`} target={href ? '_blank' : '_self'}>
        {title}
      </a>
    </h3>
    <p>{summary}</p>
  </div>
</article>

<style>
  .card-image {
    width: 100%;
    height: auto;
    border-radius: 12px 12px 0 0;
    border-bottom: 1px solid #eee;
  }
  .card-content {
    padding: 1rem;
  }
  /* Reset padding if there's an image */
  .card {
    padding: 0;
  }
</style>
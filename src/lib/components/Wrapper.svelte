<section>
  <slot />
</section>

<style>
  section {
    border-radius: calc(var(--baseFontSize) * 2);
    background: var(--bg-3);
    min-height: 50vh;
    width: 90%;
    max-width: calc(var(--baseFontSize) * 30);
    padding: calc(var(--baseFontSize) * 1.5);
  }
</style>

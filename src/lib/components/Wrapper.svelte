<section>
  <slot />
</section>

<style>
  section {
    border-radius: calc(var(--baseFontSize) * 1.5);
    background: var(--bg-3);
    min-height: 40vh;
    width: 95%;
    max-width: calc(var(--baseFontSize) * 28);
    padding: calc(var(--baseFontSize) * 1.5);
  }
</style>

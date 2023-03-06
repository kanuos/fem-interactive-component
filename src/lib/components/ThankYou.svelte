<!-- Thank You -->
<script lang="ts">
  import Wrapper from "./Wrapper.svelte";

  // props
  export let feedbackScore: number;
</script>

<Wrapper>
  <article>
    <figure>
      <img src="/illustration-thank-you.svg" alt="Thank you icon" />
    </figure>
    <h2 aria-label="result">
      You selected {feedbackScore} out of 5
    </h2>
    <h1>Thank you!</h1>
    <p>
      We appreciate you taking the time to give a rating. If you ever need more
      support, don't hesitate to get in touch!
    </p>
  </article>
</Wrapper>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: calc(var(--baseFontSize) * 1.5);
    text-align: center;
    padding: calc(var(--baseFontSize) * 2) var(--baseFontSize);
  }

  img {
    display: block;
    height: 35%;
    width: auto;
    object-fit: contain;
  }

  h2 {
    background-color: var(--bg-2-op);
    padding: calc(var(--baseFontSize) * 0.5) var(--baseFontSize);
    font-weight: 400;
    font-size: var(--baseFontSize);
    border-radius: calc(var(--baseFontSize) * 2);
    color: var(--primary);
    opacity: 0.9;
  }

  h1 {
    font-size: calc(var(--baseFontSize) * 1.75);
    font-weight: 700;
    color: var(--heading);
  }

  p {
    color: var(--text);
    font-weight: 400;
    font-size: calc(var(--baseFontSize) * 1.05);
    line-height: calc(var(--baseFontSize) * 1.5);
  }
</style>

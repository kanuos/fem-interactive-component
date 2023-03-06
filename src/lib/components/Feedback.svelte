<!-- Feedback -->
<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import FeedbackSelector from "./FeedbackSelector.svelte";
  import Wrapper from "./Wrapper.svelte";

  // props
  export let feedbackScore: number;

  // dispatch events when the form is submitted
  const dispatch = createEventDispatcher();
  function handleSubmitForm() {
    dispatch("submit-form");
  }
</script>

<Wrapper>
  <article>
    <figure>
      <img src="/icon-star.svg" alt="Welcome star icon" />
    </figure>
    <h1>How did we do?</h1>
    <p>
      Please let us know how we did with your support request. All feedback is
      appreaciated to help us improve our offering!
    </p>
    <form on:submit|preventDefault={handleSubmitForm}>
      <ul>
        {#each [1, 2, 3, 4, 5] as value (value)}
          <li>
            <FeedbackSelector {value} bind:feedbackScore on:get-feedback />
          </li>
        {/each}
      </ul>
      <button disabled={isNaN(feedbackScore)} type="submit">submit</button>
    </form>
  </article>
</Wrapper>

<style>
  article {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: calc(var(--baseFontSize) * 1.05);
  }

  figure {
    height: calc(var(--baseFontSize) * 2.5);
    display: grid;
    width: auto;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    place-items: center;
    background-color: var(--bg-2-op);
  }

  img {
    display: block;
    height: 35%;
    width: auto;
    object-fit: contain;
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

  form {
    display: block;
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    margin-top: var(--baseFontSize);
  }

  button[type="submit"] {
    width: 100%;
    padding: var(--baseFontSize);
    border-radius: calc(var(--baseFontSize) * 3);
    border: 0;
    margin-top: calc(var(--baseFontSize) * 2);
    text-transform: uppercase;
    font-weight: 700;
    font-size: calc(var(--baseFontSize) * 0.9);
    letter-spacing: calc(var(--baseFontSize) * 0.45);
    transition: all 0.25s ease;
    cursor: pointer;
  }

  button[type="submit"] {
    color: var(--heading);
    background-color: var(--primary);
  }

  button[type="submit"]:not(:disabled):hover {
    color: var(--primary);
    background-color: var(--heading);
    filter: drop-shadow(0 1px var(--baseFontSize) rgba(0 0 0 /0.05));
  }

  button[type="submit"]:not(:disabled):focus {
    scale: 0.98;
  }
  button[type="submit"]:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>

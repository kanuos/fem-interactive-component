<script lang="ts">
  import { createEventDispatcher } from "svelte";

  // props

  export let value: number;
  export let feedbackScore: number;

  //   handle selector callback
  const dispatch = createEventDispatcher();
  function handleSelectFeedback() {
    dispatch("get-feedback", value);
  }
</script>

<button
  type="button"
  on:click={handleSelectFeedback}
  class:selectedBtn={feedbackScore === value}
  aria-label={`Feeback-${value}`}
>
  {value}
</button>

<style>
  button,
  button:focus {
    display: inline-block;
    height: calc(var(--baseFontSize) * 3);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: none;
    outline: 0;
    cursor: pointer;
    font-weight: 700;
    transition: all 0.25s ease;
  }

  button {
    background-color: var(--bg-2-op);
    color: var(--text);
  }

  button:hover {
    background-color: var(--primary);
    color: var(--heading);
  }

  .selectedBtn,
  button:focus {
    background-color: var(--bg-2);
    color: var(--heading);
  }
</style>

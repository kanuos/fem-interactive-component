<script lang="ts">
  import Feedback from "./lib/components/Feedback.svelte";
  import ThankYou from "./lib/components/ThankYou.svelte";

  $: feedbackScore = NaN;
  $: isSubmitted = false;

  function getFeedBack() {
    const score = parseInt(arguments[0].detail);
    if (score >= 1 && score <= 5) {
      feedbackScore = score;
    }
  }

  function handleSubmitForm() {
    isSubmitted = true;
  }
</script>

<main>
  {#if isSubmitted}
    <ThankYou bind:feedbackScore />
  {:else}
    <Feedback
      bind:feedbackScore
      on:get-feedback={getFeedBack}
      on:submit-form={handleSubmitForm}
    />
  {/if}
</main>

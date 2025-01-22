<script>
  import { onMount } from "svelte";

  let overlayAnimation = "in"; // default to "in"

  export let toggleOverlay;

  $: {
    overlayAnimation = toggleOverlay === "in" ? "slideIn" : "slideOut";
  }
</script>

<div class="hero-container min-h-screen relative overflow-hidden">
  <!-- Hero Section -->
  <div class="hero absolute top-0 left-0 w-full h-full">
    <!-- Background container -->
    <div
      class="background-container absolute top-0 left-0 w-full h-full"
      style="background-image: url('/images/skills.JPG');"
    ></div>

    <!-- Glassmorphism Overlay -->
    <div
      class={`glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10 ${overlayAnimation}`}
    ></div>

    <!-- Content in the hero section -->
    <div
      class="hero-content absolute left-0 z-20 text-left transform translate-y-1/4"
      style="bottom: 20%;"
    >
      <div class="max-w-md pl-8">
        <h1
          class="text-5xl md:text-5xl font-bold text-neutral-200 opacity-0 leading-none line-1"
        >
          Max Aronheim
        </h1>
        <h1 class="text-3xl opacity-0 line-2 text-white">______________</h1>
        <h1
          class="text-3xl md:text-7xl font-bold text-neutral-200 opacity-0 leading-none line-3"
        >
          Skillsets
        </h1>
        <button
          class="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg btn-primary opacity-0 line-4 mt-8 text-white"
        >
          <a
            href="/Max Aronheim Spring 2024 Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </button>
      </div>
    </div>
  </div>
</div>

<style>
  /* Ensure the hero container has a locked size */
  .hero-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Locks the hero section to viewport height */
    overflow: hidden; /* Prevents content from expanding outside the frame */
  }

  .hero {
    width: 100%;
    height: 100%; /* Full height of the container */
    position: relative;
  }

  .background-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  /* Hero Content */
  .hero-content {
    position: absolute; /* Keeps it relative to the hero section */
    left: 0;
    bottom: 33%; /* Positioned in the lower third */
    text-align: left; /* Aligns text to the left */
    z-index: 20;
  }

  /* Glassmorphism Overlay Animations */
  @keyframes slideIn {
    0% {
      width: 0%;
      opacity: 0.2;
    }
    100% {
      width: 100%;
      opacity: 0.2;
    }
  }

  @keyframes slideOut {
    0% {
      width: 100%;
      opacity: 0.2;
    }
    100% {
      width: 0%;
      opacity: 0.2;
    }
  }

  .slideIn {
    animation: slideIn 2.5s ease-out forwards;
  }

  .slideOut {
    animation: slideOut 2.5s ease-out forwards;
  }

  /* Line-by-line Animation */
  @keyframes slideInLine {
    0% {
      transform: translateX(-100%); /* Start off-screen to the left */
      opacity: 0;
    }
    100% {
      transform: translateX(0); /* Move to the natural position */
      opacity: 1;
    }
  }

  .line-1 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 0s; /* Start immediately */
    line-height: 1.25;
    margin-bottom: 0.25em;
    margin-top: -1em;
  }

  .line-2 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 0.5s; /* Start after line 1 */
    line-height: 1.25;
    margin-bottom: 0.25em;
  }

  .line-3 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 1s; /* Start after line 2 */
    line-height: 1.25;
  }

  .line-4 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 1.5s; /* Start after line 3 */
  }
</style>

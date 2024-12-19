<script>
  import { onMount } from "svelte";

  let overlayAnimation = "in"; // default to "in"

  export let toggleOverlay;

  $: {
    overlayAnimation = toggleOverlay === "in" ? "slideIn" : "slideOut";
  }
</script>

<div
  class="hero min-h-screen relative"
  style="background-image: url('/images/hero.JPG'); background-size: cover; background-position: center; background-attachment: fixed;">
  
  <!-- Glassmorphism Overlay -->
  <div
    class={`glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10 ${overlayAnimation}`}>
  </div>

  <!-- Fixed Position Text on the Left -->
  <div class="fixed left-0 top-1/3 z-20 px-4">
    <h1 class="text-7xl md:text-8xl font-bold text-neutral-200 opacity-0 leading-none line-1">
      Technical.
    </h1>
    <h1 class="text-7xl md:text-8xl font-bold text-neutral-200 opacity-0 leading-none line-2">
      Creative.
    </h1>
    <h1 class="text-7xl md:text-8xl font-bold text-neutral-200 opacity-0 leading-none line-3">
      Compelling.
    </h1>
  </div>

  <!-- Content in the hero section -->
  <div class="hero-content text-neutral-content text-center relative z-20">
    <div class="max-w-md">
      <!-- Your content here -->
    </div>
  </div>
</div>

<style>
  /* Hero Background Animation */
  @keyframes backgroundMoveUp {
    0% {
      transform: translateY(0) scale(1); /* Starting position */
      background-position: center;
    }
    100% {
      transform: translateY(-15px) scale(1.1); /* Moves up and slightly zooms in */
      background-position: center top; /* Move the image upwards */
    }
  }

  .hero {
    animation: backgroundMoveUp 5s ease-in-out infinite alternate; /* Infinite animation */
    background-attachment: fixed; /* Keeps the background image fixed */
    background-size: cover; /* Ensures background image covers the area without resizing */
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
  }

  .line-2 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 0.5s; /* Start after line 1 */
  }

  .line-3 {
    animation: slideInLine 1s ease-out forwards;
    animation-delay: 1s; /* Start after line 2 */
  }
</style>

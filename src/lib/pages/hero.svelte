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
  style="background-image: url('/images/hero.JPG'); background-size: cover; background-position: center;">
  
  <!-- Glassmorphism Overlay -->
  <div
    class={`glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10 ${overlayAnimation}`}>
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
</style>

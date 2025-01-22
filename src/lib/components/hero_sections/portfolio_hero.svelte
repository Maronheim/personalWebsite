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
      style="background-image: url('/images/experiences.JPG');"
    ></div>

    <!-- Glassmorphism Overlay -->
    <div
      class={`glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10 ${overlayAnimation}`}
    ></div>

    <!-- Content in the hero section -->
    <div class="hero-content absolute left-0 z-20 text-left transform translate-y-1/4" style="bottom: 20%;">
      
      <!-- Glass Card -->
      <div class="max-w-md p-8 glass-card shadow-lg animate-slideInFromLeft rounded-lg">
        <h1 class="text-5xl font-bold text-white">Max Aronheim</h1>
        <h2 class="text-3xl text-white my-2">______________</h2>
        <h1 class="text-5xl font-bold text-white">Projects</h1>
        <button class="btn btn-primary btn-lg mt-6">
          <a href="/Max Aronheim Spring 2024 Resume.pdf" target="_blank" class="text-white" rel="noopener noreferrer">
            View Resume
          </a>
        </button>
      </div>

    </div>
  </div>
</div>

<style>
  /* Hero Container */
  .hero-container {
    position: relative;
    width: 100%;
    height: 100vh; /* Full viewport height */
    overflow: hidden;
  }

  /* Background */
  .background-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
  }

  /* Glass Overlay Animations */
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

  /* Hero Content */
  .hero-content {
    position: absolute;
    left: 2%;
    top: 33%; /* Adjust as necessary */
    z-index: 20;
  }

  /* Glass Card Animation */
  @keyframes slideInFromLeft {
    0% {
      transform: translateX(-100%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  .animate-slideInFromLeft {
    animation: slideInFromLeft 1.5s ease-out forwards;
  }

  .glass-card {
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.4); /* Glassmorphism effect */
    padding: 2rem; /* Adds padding to the card */
    border-radius: 12px; /* Keeps the rounded corners */
  }

  /* Text Styling for Hero */
  h1, h2, .btn a {
    color: #ffffff !important; /* Ensures text remains pure white */
  }
</style>

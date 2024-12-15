<div
  class="hero min-h-screen relative"
  style="background-image: url('/images/hero.JPG'); background-size: cover; background-position: center;">
  
  <!-- Glassmorphism Overlay that will animate from left to right -->
  <div class="glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10"></div>

  <!-- Content in the hero section -->
  <div class="hero-content text-neutral-content text-center relative z-20">
    <div class="max-w-md">
      <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
      <p class="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
      </p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>

<style>
  /* Glassmorphism Overlay Animation */
  @keyframes slideIn {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }

  .hero .glass-overlay {
    animation: slideIn 2s ease-out forwards;
  }
</style>

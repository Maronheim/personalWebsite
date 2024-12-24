<script>
  export let toggleOverlay;
  export let imagePath = ""; // Default to empty string if no image is passed
  export let applyZoom = false;
  export let title = "Default Title";
  export let subtitle = "";

  let overlayAnimation = "in"; // Default animation state

  // Update the overlay animation based on the toggleOverlay value
  $: {
    overlayAnimation = toggleOverlay === "in" ? "slideIn" : "slideOut";
  }
</script>

<!-- Import the external CSS file -->
<style src="/lib/components/hero.css"></style>

<div class="hero-container min-h-screen relative overflow-hidden">
  <div class="hero absolute top-0 left-0 w-full h-full">
    <!-- Set the background image dynamically -->
    <div
      class="background-container absolute top-0 left-0 w-full h-full"
      style={`background-image: url('${imagePath || '/images/default-background.jpg'}');`}
      class:zoom-animation={applyZoom}
    ></div>

    <!-- Glassmorphism Overlay with z-index adjustment -->
    <div
      class={`glass-overlay absolute top-0 left-0 w-full h-full bg-white bg-opacity-20 backdrop-blur-lg z-10 ${overlayAnimation}`}
    ></div>

    <div class="hero-content absolute left-0 top-1/3 z-20">
      <div class="max-w-md">
        <h1 class="text-7xl md:text-8 font-bold text-neutral-200 opacity-0 leading-none line-1">
          {title}
        </h1>
        {#if subtitle}
          <h2 class="text-4xl md:text-5 font-semibold text-neutral-200 opacity-0 line-2">
            {subtitle}
          </h2>
        {/if}
      </div>
    </div>
  </div>
</div>

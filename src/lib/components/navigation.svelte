<script>
    import { onMount } from "svelte";
    import ThemeController from "./theme_controller.svelte";
  
    let overlayToggle = false; // Default state for overlay animation
  
    // Event handler for theme change
    const handleOverlayToggle = (event) => {
      overlayToggle = event.detail; // Get overlay toggle state from the Theme component
    };
  </script>
  
  <div class="navbar bg-transparent fixed top-0 left-0 w-full z-50 text-white">
    <!-- Left: Logo or Brand Name -->
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl">Max Aronheim</a>
    </div>
  
    <!-- Right: Navigation Links -->
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="#skills">Skills</a></li>
        <li><summary>Experiences</summary></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
  
      <!-- Theme Switcher (Imported from Theme.svelte) -->
      <ThemeController on:overlayToggle={handleOverlayToggle} />
    </div>
  </div>
  
  <style>
    /* Navbar sliding down animation */
    @keyframes navbarSlideDown {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(0);
      }
    }
  
    .navbar {
      animation: navbarSlideDown 1s ease-out forwards;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 999;
      backdrop-filter: blur(10px);
    }
  
    .navbar a,
    .navbar ul li a {
      color: white;
    }
  </style>
  
<script>
  import { onMount } from "svelte";
  import { Link } from "svelte-routing"; // Import the Link component from svelte-routing
  import ThemeController from "./theme_controller.svelte";

  let overlayToggle = false; // Default state for overlay animation
  let isScrolled = false;
  let heroSectionHeight = 0;

  // Event handler for theme change
  const handleOverlayToggle = (event) => {
    overlayToggle = event.detail; // Get overlay toggle state from the Theme component
  };

  // Scroll event to change navbar style
  const handleScroll = () => {
    // Check if we've scrolled past the hero section
    isScrolled = window.scrollY > heroSectionHeight;
  };

  // Add scroll listener and get the height of the hero section
  onMount(() => {
    // Get the hero section height
    const heroSection = document.querySelector('.hero-container');
    heroSectionHeight = heroSection ? heroSection.offsetHeight : 0;

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
</script>

<div class="navbar fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out" class:is-scrolled={isScrolled}>
  <!-- Left: Logo or Brand Name -->
  <div class="flex-1">
    <Link to="/" class="btn btn-ghost normal-case text-xl navbar-text">Max Aronheim</Link> <!-- Changed from <a> to <Link> -->
  </div>

  <!-- Right: Navigation Links -->
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      <li><Link to="/skills" class="navbar-text">Skills</Link></li> <!-- Changed from <a> to <Link> -->
      <li><Link to="/experiences" class="navbar-text">Experiences</Link></li> <!-- Changed from <a> to <Link> -->
      <li><Link to="/portfolio" class="navbar-text">Portfolio</Link></li> <!-- Changed from <a> to <Link> -->
    </ul>

    <!-- Theme Switcher (Imported from Theme.svelte) -->
    <ThemeController on:overlayToggle={handleOverlayToggle} />
  </div>
</div>

<style>
  /* Initial navbar styles */
  .navbar {
    background-color: transparent;
    animation: navbarSlideDown 1s ease-out forwards;
    backdrop-filter: blur(10px);
    color: white; /* Text is white in the hero section */
  }

  /* When the navbar is scrolled */
  .navbar.is-scrolled {
    background-color: var(--nav-bg-color); /* Dynamic color based on theme */
    color: var(--navbar-text-color); /* Switch text color based on theme */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  /* Theme-based text colors */
  :root[data-theme="dracula"] {
    --nav-bg-color: rgba(30, 30, 30, 0.9);
    --navbar-text-color: #fff; /* White text for Dracula theme */
  }

  :root[data-theme="coffee"] {
    --nav-bg-color: rgba(25, 16, 13, 0.9); /* Coffee theme's darker background */
    --navbar-text-color: #fff; /* White text for Coffee theme */
  }

  /* Apply the theme-based text color to navbar elements */
  .navbar-text {
    color: inherit; /* Inherit the color depending on scroll position */
  }

  /* Navbar Slide Animation */
  @keyframes navbarSlideDown {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }
</style>

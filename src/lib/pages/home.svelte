<script>
    import Hero from "../components/hero.svelte";
    import About from "../components/about.svelte";
    import Services from "../components/services.svelte";
    
    function toggleOverlay() {
      console.log("Toggling overlay");
    }
  </script>
  
  <Hero toggleOverlay={toggleOverlay} imagePath="/images/hero.JPG" applyZoom={true} />
  <About />
  <Services />
  
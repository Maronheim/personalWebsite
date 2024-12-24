<script>
    import Hero from "../components/hero.svelte";

    // Function to handle overlay toggle if needed
    function toggleOverlay() {
      console.log("Toggling overlay");
    }
</script>

<!-- Hero Section -->
<Hero toggleOverlay={toggleOverlay} imagePath="/images/portfolio.png" applyZoom={false} />

<!-- Portfolio Content -->
<div class="portfolio-content">
  <h2 class="text-4xl font-bold text-center mt-12">My Portfolio</h2>
  <p class="text-lg text-center mt-4">
    Explore my recent projects and creative works below.
  </p>
  <div class="portfolio-grid mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <!-- Portfolio Item 1 -->
    <div class="portfolio-item p-4 bg-gray-100 rounded-lg shadow-md">
      <img src="/images/project1.jpg" alt="Project 1" class="w-full h-auto rounded-md mb-4" />
      <h3 class="text-xl font-semibold">Project 1</h3>
      <p class="mt-2">A description of Project 1 showcasing my work in web development.</p>
    </div>
    <!-- Portfolio Item 2 -->
    <div class="portfolio-item p-4 bg-gray-100 rounded-lg shadow-md">
      <img src="/images/project2.jpg" alt="Project 2" class="w-full h-auto rounded-md mb-4" />
      <h3 class="text-xl font-semibold">Project 2</h3>
      <p class="mt-2">A description of Project 2, demonstrating my design skills in UI/UX.</p>
    </div>
    <!-- Add more portfolio items as needed -->
  </div>
</div>

<style>
  .portfolio-content {
    padding: 2rem;
    text-align: center;
  }

  .portfolio-grid {
    margin: 0 auto;
    max-width: 1200px;
  }

  .portfolio-item img {
    width: 100%;
    height: auto;
  }
</style>

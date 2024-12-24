<script>
    import Hero from "../components/hero.svelte";
  
    // Define toggleOverlay function (if needed for overlay animation)
    function toggleOverlay() {
      console.log("Toggling overlay");
    }
  </script>
  
  <Hero toggleOverlay={toggleOverlay} imagePath="/images/skills.JPG" />
  
  <div class="skills-content">
    <h2 class="text-4xl font-bold text-center mt-12">My Skills</h2>
    <p class="text-lg text-center mt-4">
      Below are the skills I've mastered over my professional journey.
    </p>
    <div class="skills-grid mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <!-- Add skill cards or icons here -->
      <div class="skill-card p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold">Skill 1</h3>
        <p class="mt-2">Description of skill 1.</p>
      </div>
      <div class="skill-card p-4 bg-gray-100 rounded-lg shadow-md">
        <h3 class="text-xl font-semibold">Skill 2</h3>
        <p class="mt-2">Description of skill 2.</p>
      </div>
      <!-- Add more skills as needed -->
    </div>
  </div>
  
  <style>
    .skills-content {
      padding: 2rem;
      text-align: center;
    }
  
    .skills-grid {
      margin: 0 auto;
      max-width: 1200px;
    }
  
    .skill-card {
      text-align: left;
    }
  </style>
  
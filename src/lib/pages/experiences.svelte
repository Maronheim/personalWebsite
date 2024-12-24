<script>
  import Hero from "../components/hero.svelte";

  // Define toggleOverlay function (if needed for overlay animation)
  function toggleOverlay() {
    console.log("Toggling overlay");
  }
</script>

<Hero toggleOverlay={toggleOverlay} imagePath="./images/experiences.JPG" />

<div class="experiences-content">
  <h2 class="text-4xl font-bold text-center mt-12">My Experiences</h2>
  <p class="text-lg text-center mt-4">
    Here is a collection of my professional experiences and accomplishments.
  </p>
  
  <!-- Timeline of experiences -->
  <ul class="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
    <li>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="timeline-start mb-10 md:text-end">
        <time class="font-mono italic">1984</time>
        <div class="text-lg font-black">First Macintosh computer</div>
        Description of the first Macintosh computer.
      </div>
      <hr />
    </li>
    <!-- Additional timeline items can be added similarly -->
    <li>
      <div class="timeline-middle">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
        </svg>
      </div>
      <div class="timeline-end mb-10">
        <time class="font-mono italic">1998</time>
        <div class="text-lg font-black">iMac</div>
        Description of the iMac product evolution.
      </div>
      <hr />
    </li>
  </ul>
</div>

<style>
  .experiences-content {
    padding: 2rem;
    text-align: center;
  }

  /* Timeline Styling */
  .timeline {
    margin-top: 4rem;
    list-style: none;
    padding-left: 0;
  }

  .timeline-start, .timeline-end {
    display: flex;
    flex-direction: column;
  }

  .timeline-middle {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  /* You can customize this to suit your timeline better */
  .timeline hr {
    border-color: #ddd;
    margin-top: 1rem;
  }
</style>

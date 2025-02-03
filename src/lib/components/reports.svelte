<script>
  import { onMount } from "svelte";
  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }
</script>

<section class="bg-base-200 py-16">
  <div class="container mx-auto px-4">
    <!-- Section Title -->
    <header class="text-center mb-12">
      <h2 class="text-5xl font-bold mb-4 text-primary">
        My Reports & Lectures
      </h2>
      <p class="m-7 ml-20 mr-20">
        The following resources provide a strong understanding of my approaches
        to research, communication, and instruction. The first two documents are
        original scientific reports that capture the research I performed in
        high school. The 3rd resource is a sample of a CU Boulder Leeds lecture
        that I instructed for a strategy course.
      </p>
    </header>

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <a
        href="/research_and_lecture/music_research_abstract_1.pdf"
        target="_blank"
        class="card bg-base-100 shadow-xl hover:bg-base-200 border-2 border-accent"
      >
        <div class="card-body items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-24 h-24 text-primary"
          >
            <path
              fill-rule="evenodd"
              d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13ZM13.25 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm-6.5 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm4-1.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-2xl font-bold mt-4 text-accent">
            Pattern Analysis 1 (2021)
          </h3>
          <p class="mt-2">
            Original research that merges music theory, mathematics, and modern
            statistical analysis to explore patterns in musical genres. The
            report adheres to the scientific research practices.
          </p>
        </div>
      </a>

      <!-- Card 2 -->
      <a
        href="/research_and_lecture/music_research_abstract_2.pdf"
        target="_blank"
        class="card bg-base-100 shadow-xl hover:bg-base-200 border-2 border-accent"
      >
        <div class="card-body items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-24 h-24 text-secondary"
          >
            <path
              fill-rule="evenodd"
              d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13Zm10.857 5.691a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 0 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z"
              clip-rule="evenodd"
            />
          </svg>
          <h3 class="text-2xl font-bold mt-4 text-accent">
            Pattern Analysis 2 (2022)
          </h3>
          <p class="mt-2">
            An extension of the previous report that explores the statistical
            patterns within music composition. By analyzing note values,
            intervals, rhythms, and qualitative data, the study identifies
            defining traits of musical genres. This process offers composers
            insights into crafting distinct yet genre-aligned music for greater
            impact.
          </p>
        </div>
      </a>

      <!-- Card 3 -->
      <button
        on:click={toggleModal}
        class="card bg-base-100 shadow-xl hover:bg-base-200 border-2 border-accent"
      >
        <div class="card-body items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="w-24 h-24 text-accent"
          >
            <path
              d="M3.25 4A2.25 2.25 0 0 0 1 6.25v7.5A2.25 2.25 0 0 0 3.25 16h7.5A2.25 2.25 0 0 0 13 13.75v-7.5A2.25 2.25 0 0 0 10.75 4h-7.5ZM19 4.75a.75.75 0 0 0-1.28-.53l-3 3a.75.75 0 0 0-.22.53v4.5c0 .199.079.39.22.53l3 3a.75.75 0 0 0 1.28-.53V4.75Z"
            />
          </svg>
          <h3 class="text-2xl font-bold mt-4 text-accent">How I Teach</h3>
          <p class="mt-2">
            A sample lecture of a CU Boulder Product Development course that I
            taught, and the perfect way to understand my communication style.
          </p>
        </div>
      </button>
    </div>
  </div>

  <!-- Modal -->
  {#if showModal}
    <div
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="rounded-lg p-8 w-3/4 max-w-3xl relative bg-base-300 shadow-lg"
      >
        <!-- Close Button -->
        <button
          on:click={toggleModal}
          class="absolute top-4 right-4 text-white bg-primary hover:bg-accent rounded-full p-4 focus:outline-none"
          aria-label="Close Modal"
        >
          &times;
        </button>

        <!-- Modal Content -->
        <h2 class="text-3xl font-bold mb-4">Presentation Resources</h2>

        <!-- YouTube Video Embed -->
        <div class="relative h-96 mb-4">
          <iframe
            class="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/9kQ9RKOF9io?start=2"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>

        <!-- PowerPoint Download Section -->
        <div>
          <p style="margin-top: 16px;">
            If the video doesn't load, 
            <a href="https://www.youtube.com/watch?v=9kQ9RKOF9io&t=2s" target="_blank" rel="noopener noreferrer" style="color: #007bff; text-decoration: underline;">
              Click here to watch on YouTube <br>
            </a>
          </p>
          <br>
          <button
            class="bg-primary text-white px-6 py-3 rounded-full focus:outline-none hover:bg-accent"
            on:click={() =>
              (window.location.href =
                "/research_and_lecture/max_aronheim_class_lecture.pptx")}
          >
            Download Slide Deck
          </button>
        </div>
      </div>
    </div>
  {/if}
</section>

<!-- Card 4 -->
<a
  href="/LFG%20Case%20Study--Omni%20Hotel.pptx"
  download
  class="card bg-base-100 shadow-xl hover:bg-base-200 border-2 border-accent"
>
  <div class="card-body items-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      class="w-24 h-24 text-primary"
    >
      <path
        fill-rule="evenodd"
        d="M3 3.5A1.5 1.5 0 0 1 4.5 2h6.879a1.5 1.5 0 0 1 1.06.44l4.122 4.12A1.5 1.5 0 0 1 17 7.622V16.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 3 16.5v-13ZM13.25 9a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm-6.5 4a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75Zm4-1.25a.75.75 0 0 0-1.5 0v2.5a.75.75 0 0 0 1.5 0v-2.5Z"
        clip-rule="evenodd"
      />
    </svg>
    <h3 class="text-2xl font-bold mt-4 text-accent">
      My PowerPoint Skills
    </h3>
    <p class="mt-2">
      A strategic case study analyzing the Omni Hotel business model, 
      market positioning, and key insights into customer experience improvements.
    </p>
  </div>
</a>

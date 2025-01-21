<script>
  // Add your image import or URL here
  let imageUrl = "../../images/profile-home.jpeg";
</script>

<div
  class="flex justify-center items-center min-h-screen px-4 md:px-8 bg-base-200">
  <div class="max-w-6xl w-full flex flex-col md:flex-row gap-12">
    <!-- Left Section (Image) -->
    <div class="flex-shrink-0 w-full md:w-1/2">
      <img
        src={imageUrl}
        alt="About Me"
        class="rounded-xl shadow-lg w-full h-auto object-cover"
        style="transform: scale(0.9);"
      />
    </div>

    <!-- Right Section (Text) -->
    <div class="flex-grow w-full md:w-1/2 flex flex-col justify-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
        Him: Max Aronheim
      </h1>
      <p class="text-white text-lg leading-relaxed mb-4">
        An Artist, An Analyst, A Developer.
      </p>
      <p class="text-white text-lg leading-relaxed">
        With his background in business, studies in technology, and hobbies
        within the arts, Max Aronheim has been able to utilize business
        analytics to drive leading projects forward.
      </p>
      <br />
      <p class="text-white text-lg leading-relaxed pl-8">
        At the age of 16, Max became the youngest to be hired at Ocean Prime a fine dining restaurant. <br /><br />
        At the age of 17, he worked at Northwestern Mutual, becoming one of the youngest to be hired at this Fortune 100 firm. <br /><br />
        At the age of 18, he became one of the youngest to work at SunLife Financial, serving their actuarial department. <br /><br />
      </p>
      
      <button
        class="btn btn-primary mt-8 w-64 text-left text-lg text-white"
        on:click={() => window.open('https://github.com/Maronheim/personalWebsite.git', '_blank')}
      >
        View the Web Code
      </button>
    </div>
  </div> <!-- Closing the second-level div -->
</div> <!-- Closing the top-level div -->


<style>
  /* Reduce the left and right margins to make image closer to the edge */

  .max-w-6xl {
    margin-left: auto;
    margin-right: auto;
  }

  /* Optional: Adjust image size */
  .rounded-xl {
    max-width: 100%;
  }
</style>

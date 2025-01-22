<script>
    let imageUrl = "../../images/contact.jpeg";
</script>

<div class="flex justify-center items-center min-h-screen px-4 md:px-8 bg-base-200">
  <div class="max-w-6xl w-full flex flex-col md:flex-row gap-12">
    <!-- Right Section (Text) -->
    <div class="flex-grow w-full md:w-1/2 flex flex-col justify-center">
        <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-primary">Contact Me</h1>
      <h3 class="text-2xl font-extrabold mb-6 text-accent">
        Looking for Results-Driven Expertise?
      </h3>
      <p class="text-lg leading-relaxed mb-4">
        I specialize in delivering high-impact solutions that drive results. With experience in diverse fields such as finance, technology, and business analysis, I’m equipped to help your team excel.
      </p>
      <p class="text-lg leading-relaxed">
        If you need someone who can analyze problems, craft strategic solutions, and develop the technical products to make them happen, I’m the professional you’ve been looking for.
      </p>
      <br />
      <p class="text-lg leading-relaxed">
        Together, we can move your business or project toward success. Let’s talk today!
      </p>
      
      <button
        class="btn btn-primary mt-8 w-64 text-left text-lg text-white"
        on:click={() => window.open('https://github.com/Maronheim/personalWebsite.git', '_blank')}
      >
        Contact Me
      </button>
    </div>

    <!-- Left Section (Image) -->
    <div class="flex-shrink-0 w-full md:w-1/2">
      <img
        src={imageUrl}
        alt="Max Aronheim"
        class="rounded-xl shadow-lg w-full h-auto object-cover"
        style="transform: scale(0.9);"
      />
    </div>
  </div>
</div>

<style>
  .max-w-6xl {
    margin-left: auto;
    margin-right: auto;
  }
  .rounded-xl {
    max-width: 100%;
  }
</style>

<script>
  let imageUrl = "../../images/contact.jpeg";
</script>

<div class="flex justify-center items-center min-h-screen px-4 bg-base-200">
  <div class="max-w-6xl w-full flex flex-col md:flex-row gap-12">
    <!-- Left Section (Contact Info) -->
    <div class="flex-grow w-full md:w-1/2 flex flex-col justify-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-6 text-primary text-center">Contact Me</h1>
      <h3 class="text-accent text-center bold text-xl">Looking for Results-Driven Expertise?</h3>
      <div class="p-10 bg-base-200">
        <!-- Contact Section -->
        <div class="space-y-6"> <!-- Use space-y-6 to add spacing between the sections -->
          <!-- Email Box -->
          <div class="bg-glass p-6 rounded-lg shadow-lg text-center">
            <h2 class="text-2xl text-secondary font-bold mb-2">Email</h2>
            <a href="mailto:maxaronheim@gmail.com" class="underline">
              maxaronheim@gmail.com
            </a>
          </div>

          <!-- Phone Box -->
          <div class="bg-glass p-6 rounded-lg shadow-lg text-center">
            <h2 class="text-2xl text-secondary font-bold mb-2">Phone</h2>
            <a href="tel:+34687099322" class="underline">
              +34 687-099-322
            </a>
          </div>
        </div>
      </div>

      <style>
        /* Optional custom styles for glass effect */
        .bg-glass {
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
        }
      </style>
    </div>

    <!-- Right Section (Image) -->
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

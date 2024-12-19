<script>
    // Add your image import or URL here
    let imageUrl = "../../images/profile-home.jpeg";
  </script>
  
  <div class="flex justify-center items-center min-h-screen px-4 md:px-8 bg-base-200">
    <div class="max-w-5xl w-full flex flex-col md:flex-row gap-8">
      <!-- Left Section (Image) -->
      <div class="flex-shrink-0 w-full md:w-1/3">
        <img src={imageUrl} alt="About Me" class="rounded-lg shadow-xl w-full h-auto object-cover" />
      </div>
  
      <!-- Right Section (Text) -->
      <div class="flex-grow w-full md:w-2/3">
        <h1 class="text-3xl md:text-4xl font-bold mb-4 text-primary">About Me</h1>
        <p class="text-base-content text-lg leading-relaxed mb-4">
          Hi there! I’m [Your Name], a passionate developer with a love for building elegant web applications. My journey started with...
        </p>
        <p class="text-base-content text-lg leading-relaxed">
          Over the years, I’ve honed my skills in various technologies, working on exciting projects that bring ideas to life. When I’m not coding, you’ll find me exploring...
        </p>
      </div>
    </div>
  </div>
  
  <style>
    /* Optional: Add custom styles here if needed */
  </style>
  
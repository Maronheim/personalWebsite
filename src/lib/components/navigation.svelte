<script>
  import { onMount } from 'svelte';

  // Theme controller logic
  let currentTheme = localStorage.getItem('theme') || 'dracula';

  const toggleTheme = () => {
    currentTheme = currentTheme === 'dracula' ? 'acid' : 'dracula';
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  };

  onMount(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
  });
</script>

<nav class="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <!-- Left: Logo or Name -->
    <a href="/" class="flex items-center">
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
        Max Aronheim
      </span>
    </a>

    <!-- Right: Navigation Links -->
    <div class="hidden md:block">
      <ul class="flex space-x-8">
        <li><a href="#skills" class="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Skills</a></li>
        <li><a href="#experiences" class="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Experiences</a></li>
        <li><a href="#portfolio" class="text-gray-900 dark:text-white hover:text-blue-700 dark:hover:text-blue-500">Portfolio</a></li>
      </ul>
    </div>

    <!-- Theme Toggle Button -->
    <button on:click={toggleTheme} class="btn btn-primary ml-4">
      Toggle Theme
    </button>
  </div>
</nav>

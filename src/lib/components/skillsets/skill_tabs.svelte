<script>
    import { skills } from "./skills_list.js"; // Import your reorganized skills list
  
    let activeIndex = 0; // Default to the first tab
  </script>
  
  <div class="p-10 bg-base-200">
    <!-- Header -->
    <h1 class="text-5xl md:text-5xl font-bold">
      Skills List
    </h1>
  
    <!-- Card Container -->
    <div class="card bg-base-100 shadow-lg rounded-box mt-6 p-6 border-4 border-accent">
      <!-- Tabs -->
      <div role="tablist" class="tabs tabs-boxed mb-6">
        {#each skills as skill, index}
          <a
            role="tab"
            class="tab {activeIndex === index ? 'tab-active text-white' : 'hover:glass hover:text-accent transition-all duration-200'}"
            on:click={() => (activeIndex = index)}
          >
            {skill.name}
          </a>
        {/each}
      </div>
  
      <!-- Content -->
      <div class="skills-content">
        <h2 class="text-3xl font-semibold mb-4 text-primary">
          {skills[activeIndex]?.name} Skills
        </h2>
  
        <!-- Recursive rendering for subskills -->
        <div class="skills-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {#each skills[activeIndex]?.subskills as subskill}
            <div>
              {#if subskill.subskills}
                <!-- If subskill has further subskills, render as nested list -->
                <div class="text-secondary font-semibold">{subskill.name}</div>
                <ul class="list-disc pl-4">
                  {#each subskill.subskills as subSubskill}
                    <li>{subSubskill}</li>
                  {/each}
                </ul>
              {:else}
                <!-- If no further subskills, just render the skill -->
                <div>{subskill}</div>
              {/if}
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  
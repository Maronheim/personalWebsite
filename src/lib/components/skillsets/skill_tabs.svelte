<script>
    import { skills } from './skills_list.js'; // Adjust the path to your file

    let activeIndex = 0; // Default to the first tab
</script>

<!-- Tabs -->
<div role="tablist" class="tabs tabs-boxed">
    {#each skills as skill, index}
        <a
            role="tab"
            class="tab {activeIndex === index ? 'tab-active' : ''}"
            on:click={() => (activeIndex = index)}
        >
            {skill.name}
        </a>
    {/each}
</div>

<!-- Content -->
<div class="skills-content mt-4">
    <h2 class="text-2xl font-semibold">{skills[activeIndex]?.name} Skills</h2>
    <div class="skills-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {@html skills[activeIndex]?.content}
    </div>
</div>

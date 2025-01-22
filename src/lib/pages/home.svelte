<script>
    import Hero from "../components/hero_sections/home_hero.svelte";
    import About from "../components/about.svelte";
    import Services from "../components/services.svelte";
    import Contact from "../components/contact.svelte";

    // Define toggleOverlay function
    function toggleOverlay() {
        console.log("Toggling overlay");
    }
</script>

<Hero {toggleOverlay} />
<About />
<Services />
<Contact />
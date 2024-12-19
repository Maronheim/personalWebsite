<script>
    import Hero from "../components/hero.svelte";
    import About from "../components/about.svelte";

    // Define toggleOverlay function
    function toggleOverlay() {
        console.log("Toggling overlay");
    }
</script>

<Hero {toggleOverlay} />
<About />
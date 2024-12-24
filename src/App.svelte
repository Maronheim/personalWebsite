<script>
  import { Router, Route } from 'svelte-routing'; // Import Router and Route from svelte-routing
  import Nav from './lib/components/navigation.svelte'; // Import your navigation bar component
  import Home from './lib/pages/home.svelte'; // Your home page component
  import Skills from './lib/pages/skills.svelte'; // Your skills page component
  import Experiences from './lib/pages/experiences.svelte'; // Your experiences page component
  import Portfolio from './lib/pages/portfolio.svelte'; // Your portfolio page component
  import Footer from './lib/components/footer.svelte';

  // We will pass applyZoom as true only for the home page
  function getApplyZoom() {
    return window.location.pathname === '/'; // Check if it's the homepage
  }
</script>

<Router>
  <Nav />
  
  <!-- Define your routes and pass the applyZoom flag -->
  <Route path="/" component={Home} let:props>
  <Hero {...props} applyZoom={getApplyZoom()} imagePath="/images/hero.JPG" />
  </Route>
  <Route path="/skills" component={Skills} />
  <Route path="/experiences" component={Experiences} />
  <Route path="/portfolio" component={Portfolio} />
</Router>

<Footer />

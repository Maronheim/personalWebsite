<script>
  import { Router, Route } from 'svelte-routing'; // Import Router and Route from svelte-routing
  import Nav from './lib/components/navigation.svelte'; // Import your navigation bar component
  import Home from './lib/pages/home.svelte'; // Your home page component
  import Skills from './lib/pages/skills.svelte'; // Your skills page component
  import Experiences from './lib/pages/experiences.svelte'; // Your experiences page component
  import Portfolio from './lib/pages/portfolio.svelte'; // Your portfolio page component
</script>

<Router>
  <Nav />

  <!-- Define your routes here -->
  <Route path="/" component={Home} />
  <Route path="/skills" component={Skills} />
  <Route path="/experiences" component={Experiences} />
  <Route path="/portfolio" component={Portfolio} />
</Router>

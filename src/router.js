import Home from "./pages/Home.svelte"
import AddContribution from "./pages/AddContribution.svelte"
import Contributors from "./pages/Contributors.svelte"
import NotFound from "./pages/NotFound.svelte"
const routes = {
    // Exact path
    '/': Home,
    "/contributors": Contributors,
    "/add": AddContribution,
    "*" : NotFound
    
}

export default routes;
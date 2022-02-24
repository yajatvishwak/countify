import Home from "./pages/Home.svelte"
import AddContribution from "./pages/AddContribution.svelte"
import Contributors from "./pages/Contributors.svelte"
import NotFound from "./pages/NotFound.svelte"
import Profile from "./pages/Profile.svelte"
const routes = {
    // Exact path
    '/': Home,
    "/contributors": Contributors,
    "/add": AddContribution,
    "/profile": Profile,
    "*" : NotFound
    
}

export default routes;
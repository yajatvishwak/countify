import Home from "./pages/Home.svelte"
import AddContribution from "./pages/AddContribution.svelte"
import Contributors from "./pages/Contributors.svelte"
import NotFound from "./pages/NotFound.svelte"
import Profile from "./pages/Profile.svelte"
import Process from "./pages/Process.svelte"
import Auth from "./pages/Auth.svelte"
const routes = {
    // Exact path
    '/home': Home,
    "/contributors": Contributors,
    "/add": AddContribution,
    "/profile": Profile,
    "/": Process,
    "/auth": Auth,
    "*" : NotFound
    
}

export default routes;
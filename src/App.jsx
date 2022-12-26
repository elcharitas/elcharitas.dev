import { createElement } from "react";
import useLocation from "wouter/use-location";
import pageRoutes from "~react-pages";

const App = () => {
    const [path] = useLocation();
    const [errorRoute, pageRoute] = pageRoutes.filter((route) => {
        return (
            route.path === path ||
            new RegExp(`^(\/+)${route.path}`).test(path) ||
            route.path === "404"
        );
    });

    const activeRoute = pageRoute || errorRoute;

    if (typeof activeRoute?.element === "object") {
        return createElement(activeRoute.element.type);
    }

    return null;
};

export default App;

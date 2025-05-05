import
{
    createBrowserRouter,
    Navigate,
} from "react-router";
import App from "./pages/App";
import AnotherPage from "./pages/Page2";
import { BrowseLayout } from "./pages/layouts/BrowseLayout";
import { SortLayout } from "./pages/layouts/SortLayout";

const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: (<Navigate to="/browse" replace />),
    },
    {
        Component: BrowseLayout,
        path: "browse",
        children: [
            {
                index: true,
                Component: AnotherPage
            },
            {
                path: "foo",
                Component: App
            },

        ]
    },
    {
        Component: SortLayout,
        path: "sort",
        children: [
            {
                index: true,
                Component: AnotherPage
            },
            {
                path: "foo",
                Component: App
            },

        ]
    },
]);

export default router;

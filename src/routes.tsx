import
{
    createBrowserRouter,
    Navigate,
} from "react-router";
import App from "./pages/App";
import AnotherPage from "./pages/Page2";
import { BrowseLayout } from "./pages/layouts/BrowseLayout";
import { SortLayout } from "./pages/layouts/SortLayout";
import { AddConnectionPage } from "./pages/AddConnectionPage";


const getData = async () => {
    const res = await fetch ('https://dummyjson.com/products/')
    const data = await res.json();
    return {data: data.products};
}

const router = createBrowserRouter([
    {
        path: "/",
        index: true,
        element: (<Navigate to="/browse" replace />),
    },
    {
        path: "browse",
        Component: BrowseLayout,
        children: [
            {
                index: true,
                loader: getData,
                Component: AnotherPage
            },
            {
                path: "foo",
                Component: App
            },

        ]
    },
    {
        path: "sort",
        Component: SortLayout,
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
        path: "setup",
        Component: AddConnectionPage,
    },
    {
        path: "api",
        children: [
            {
                path: "test",
                action: ({request}) => {console.log(JSON.stringify(request))}
            }
        ]
    }
]);

export default router;

import { ModeThemeProvider } from "@/components/ModeThemeProvider";
import { Layout } from "@/Layout";
import { Outlet } from "react-router";


export function BrowseLayout()
{
    ModeThemeProvider("browse")
    
    return (
        <Layout>
            <Outlet/>
        </Layout>
    )
}
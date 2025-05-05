import { ModeThemeProvider } from "@/components/ModeThemeProvider";
import { Layout } from "@/Layout";
import { Outlet } from "react-router";


export function SortLayout()
{
    ModeThemeProvider("sort")
    
    return (
        <Layout>
            <Outlet/>
        </Layout>
    )
}
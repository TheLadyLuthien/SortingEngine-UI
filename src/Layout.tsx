import { AppSidebar } from "./components/navigation/AppSidebar"
import { SearchForm } from "./components/search-form"
import { Separator } from "./components/ui/separator"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "./components/ui/sidebar"

import { unstable_ViewTransition as ViewTransition } from 'react';
import { ModeToggle } from "./components/UiModeToggle";

interface Props
{
    children: React.ReactNode
    className?: string
}

export function Layout(props: Props)
{
    return (
        <SidebarProvider className={props.className}>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="mr-2"/>
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    {/* <Breadcrumb>
                        <BreadcrumbList>
                        <BreadcrumbItem className="hidden md:block">
                        <BreadcrumbLink href="#">
                        Building Your Application
                        </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator className="hidden md:block" />
                        <BreadcrumbItem>
                        <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                        </BreadcrumbItem>
                        </BreadcrumbList>
                        </Breadcrumb> */}

                    <SearchForm />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <ModeToggle></ModeToggle>
                </header>
                <ViewTransition name="main-vt">
                    <main className="flex p-4">
                        {/* <SidebarTrigger /> */}
                        {props.children}
                    </main>
                </ViewTransition>
            </SidebarInset>
        </SidebarProvider>
    )
}

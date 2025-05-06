import { Check, ChevronsUpDown, GalleryVerticalEnd, Images, Pencil } from "lucide-react";
import { TabsList, TabsTrigger } from "../ui/tabs";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { matchPath, NavLink, useLocation, useNavigate } from "react-router";

import { unstable_ViewTransition as ViewTransition } from "react";
import { SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "../ui/sidebar";

// export function ModePickerButtons()
// {
//     return (
//         <SidebarMenu>
//             <SidebarMenuItem>
//                 {/* <DropdownMenu> */}
//                     {/* <DropdownMenuTrigger asChild> */}
//                     {/* <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"> */}
//                         {/* <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
//                                 <GalleryVerticalEnd className="size-4" />
//                             </div>
//                             <div className="flex flex-col gap-0.5 leading-none">
//                                 <span className="font-semibold">Documentation</span>
//                                 <span className="">Test</span>
//                             </div>
//                             <ChevronsUpDown className="ml-auto" /> */}

//                         <TabsList className="w-full grid grid-cols-2 h-12 text-sm group-data-[collapsible=icon]:p-0!">
//                             <TabsTrigger value="sort">Sort</TabsTrigger>
//                             <TabsTrigger value="browse">Browse</TabsTrigger>
//                         </TabsList>
//                     {/* </SidebarMenuButton> */}
//                     {/* </DropdownMenuTrigger> */}
//                     {/* <DropdownMenuContent
//                         className="w-[--radix-dropdown-menu-trigger-width]"
//                         align="start"
//                     >
//                         <DropdownMenuItem>
//                             Foo
//                         </DropdownMenuItem>
//                         <DropdownMenuItem>
//                             bar
//                         </DropdownMenuItem>
//                     </DropdownMenuContent> */}
//                 {/* </DropdownMenu> */}

//             </SidebarMenuItem>
//         </SidebarMenu>
//         // <TabsList className="w-full grid grid-cols-2">
//         //     <TabsTrigger value="sort">Sort</TabsTrigger>
//         //     <TabsTrigger value="browse">Browse</TabsTrigger>
//         // </TabsList>
//     )
// }

export function ModePicker()
{
    const navigate = useNavigate();
    const location = useLocation();

    function isBrowse()
    {
        return (location.pathname.startsWith("/browse"));
    }
    function isSort()
    {
        return (location.pathname.startsWith("/sort"));
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                                <ViewTransition name="sidebar-mode-picker-icon" share="zoom-back">
                                    {isSort() ? <Pencil className="size-4" /> : <Images className="size-4" />}
                                </ViewTransition>
                            </div>
                            <div className="flex flex-col gap-0.5 leading-none">
                                <span className="font-semibold">Sorting Engine</span>
                                <span className="">{isSort() ? "Sort" : "Browse"}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-full"
                        align="center"
                    >
                        <DropdownMenuItem onSelect={() => (!isSort()) && navigate("/sort")} className="w-full">
                            Sort {isSort() && <Check className="ml-auto inline-block" />}
                        </DropdownMenuItem>
                        <DropdownMenuItem onSelect={() => (!isBrowse()) && navigate("/browse")} className="w-full">
                            Browse {isBrowse() && <Check className="ml-auto inline-block" />}
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

            </SidebarMenuItem>
        </SidebarMenu >
        // <TabsList className="w-full grid grid-cols-2">
        //     <TabsTrigger value="sort">Sort</TabsTrigger>
        //     <TabsTrigger value="browse">Browse</TabsTrigger>
        // </TabsList>
    )
}
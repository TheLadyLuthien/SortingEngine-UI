// import { useEffect } from "react";
// import { matchPath, useLocation } from "react-router";

type Mode = "browse" | "sort" | null;

export function ModeThemeProvider(mode: Mode)
{
    // const location = useLocation();
    // useEffect((() => {
    const root = window.document.documentElement

    root.classList.remove("mode-soprt", "mode-browse")

    if (mode == "browse")
    {
        root.classList.add("mode-browse")
    }
    else if (mode == "sort")
    {
        root.classList.add("mode-sort")
    }
    // }), [location])
}

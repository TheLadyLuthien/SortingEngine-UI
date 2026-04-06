import { AddConnectionForm } from "@/components/AddConnectionForm";
import { ModeThemeProvider } from "@/components/ModeThemeProvider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Layout } from "@/Layout";
import { Server } from "lucide-react";
import { Outlet } from "react-router";

function ServerButton()
{
    return (
        <Button className="w-full" size="lg">
            <div className="flex aspect-square items-center justify-center rounded-lg">
                <Server className="size-6 text-card" />

            </div>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">Foo</span>
                <span className="truncate text-xs">Bar</span>
            </div>
        </Button>
    )
}

export function AddConnectionPage()
{
    return (
        <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
            <div className="w-full max-w-sm md:max-w-2xl">
                <Card className="overflow-hidden grid grid-cols-2">
                    <CardContent className="p-0">
                        <h1 className="text-center text-xl font-bold">Connect to Server</h1>
                        <AddConnectionForm></AddConnectionForm>
                    </CardContent>
                    <CardContent className="p-0">
                        <h1 className="text-center text-xl font-bold">Detected Servers</h1>
                        <div className="grid grid-cols-1 gap-2 p-6">
                            <ServerButton/>
                            <ServerButton/>
                            <ServerButton/>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
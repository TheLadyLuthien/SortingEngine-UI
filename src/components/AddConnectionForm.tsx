import { FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Form, FormProps } from "react-router";

export function AddConnectionForm({
    ...props
}: FormProps & React.RefAttributes<HTMLFormElement>)
{
    function onSubmit(e: FormEvent)
    {
        e.stopPropagation();
        e.preventDefault();

        
    }

    return (
        <form {...props} className="p-6 md:p-8" onSubmit={onSubmit} >
            <div className="flex flex-col gap-6">
                {/* <div className="flex flex-col items-center text-center">
                    <h1 className="text-2xl font-bold">Welcome back</h1>
                    <p className="text-balance text-muted-foreground">
                        Connect to a server
                    </p>
                </div> */}
                <div className="grid gap-2">
                    <Label htmlFor="hostname">Hostname</Label>
                    <Input
                        id="hostname"
                        type="text"
                        placeholder="localhost"
                        required
                    />
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="port">Port</Label>
                    </div>
                    <Input id="port" type="number" required min={4000} max={65534} autoComplete="none" />
                    {/* <Input id="password" type="password" required /> */}
                </div>
                <div className="grid gap-2">
                    <div className="flex items-center">
                        <Label htmlFor="key">API Key</Label>
                    </div>
                    <Input id="key" type="password" autoComplete="none" />
                    {/* <Input id="password" type="password" required /> */}
                </div>
                <Button type="submit" className="w-full">
                    Connect
                </Button>
            </div>
        </form>
    )
}
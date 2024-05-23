import * as React from "react"
 
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@custom-react-hooks/all"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"





  const LoginDialog = () => {
    const [open, setOpen] = React.useState(false)
    const isDesktop = useMediaQuery('(min-width: 768px)')
        
        // <Sheet>
        //         <SheetTrigger>Login</SheetTrigger>
        //         <SheetContent>
        //                 <SheetHeader>
        //                 <SheetTitle>Are you absolutely sure?</SheetTitle>
        //                 <SheetDescription>
        //                         This action cannot be undone. This will permanently delete your account
        //                         and remove your data from our servers.
        //                 </SheetDescription>
        //         </SheetHeader>
        //         </SheetContent>
        // </Sheet>

       
        if (isDesktop) {
          return (
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <p>Log in</p>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[450px]">
                <DialogHeader className="pt-2">
                  {/* <DialogTitle>Log in</DialogTitle>
                  <DialogDescription>
                    Save charging stations to favourites, plan routes, and more.
                  </DialogDescription> */}
                </DialogHeader>
                <ProfileForm />
              </DialogContent>
            </Dialog>
          )
        }
       
        return (
          <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <p>Log in</p>
            </DrawerTrigger>
            <DrawerContent className="px-8">
              <DrawerHeader className="text-left">
                {/* <DrawerTitle>Edit profile</DrawerTitle>
                <DrawerDescription>
                    Save charging stations to favourites, plan routes, and more.
                </DrawerDescription> */}
              </DrawerHeader>
              <ProfileForm className="" />
              <DrawerFooter className="pt-2 px-0">
                <DrawerClose asChild>
                  <Button variant="outline" className="mx-0">Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        )

  }

  function ProfileForm ({
    className,
    ...props
  }) {
    return (
    //     <form className={cn("grid items-start gap-4", className)}>
    //     <div className="grid gap-2">
    //       <Label htmlFor="email">Email</Label>
    //       <Input type="email" id="email" defaultValue="example@email.com" />
    //     </div>
    //     <div className="grid gap-2">
    //       <Label htmlFor="password">Password</Label>
    //       <Input type="password" id="password" defaultValue="" />
    //     </div>
    //     <Button type="submit">Log in</Button>
    //   </form>
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Log in</TabsTrigger>
        <TabsTrigger value="password">Sign up</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle>Log in</CardTitle>
            <CardDescription>
            Log in to save charging stations to favourites, plan routes, and more.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="example@email.com" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
          </CardContent>
            <Button className='w-full mt-6'>Log in</Button>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card className="border-0 shadow-none">
          <CardHeader>
            <CardTitle>Sign up</CardTitle>
            <CardDescription>
              Don't have an account? Sign up here.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">New email</Label>
              <Input id="current" type="email" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
            <Button className='w-full mt-6'>Sign up</Button>
        </Card>
      </TabsContent>
    </Tabs>
    )
  }

  export default LoginDialog;
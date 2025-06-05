import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  ChevronDown,
  LogIn,
  SendToBack,
  Telescope,
  ShoppingCart,
  Heart,
  User,
  CreditCard,
  Package,
  Gift,
  Bell,
  Tag,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="bg-black w-full shadow-md fixed px-6 py-3 z-50 top-0">
      <nav className="flex justify-between items-center mx-auto max-w-7xl">
        <Link href={"/"}>
          <Image src={"/logo.png"} alt="no-log" height={40} width={200} />
        </Link>
        <div className="flex justify-center gap-6">
          <SignedIn>
            <div>
              <Link href={"/orders"}>
                <Button
                  variant={"outline"}
                  className="h-10 hidden md:block lg:block"
                >
                  <div className="flex justify-between">
                    <SendToBack className="mr-2 mt-0.5" />
                    Your Orders
                  </div>
                </Button>
              </Link>
            </div>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="h-10" variant="outline">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    <span>Shop</span>
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Shopping Options</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    <span>My Cart</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Heart className="h-4 w-4 mr-2" />
                    <span>Wishlist</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Package className="h-4 w-4 mr-2" />
                    <span>Track Orders</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Tag className="h-4 w-4 mr-2" />
                    <span>Deals & Offers</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="h-4 w-4 mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <CreditCard className="h-4 w-4 mr-2" />
                    <span>Payment Methods</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Bell className="h-4 w-4 mr-2" />
                    <span>Notifications</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Gift className="h-4 w-4 mr-2" />
                    <span>Rewards</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SignedIn>
          <div>
            <SignedOut>
              <Link href={"/explore"} className="mr-3">
                <Button className="px-6 py-3" variant={"outline"}>
                  <Telescope />
                  Explore
                </Button>
              </Link>

              <SignInButton>
                <Button className="px-6 py-3" variant={"outline"}>
                  <LogIn />
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
          <div>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                    userButtonPopoverActionButton: DropdownMenu,
                    userButtonPopoverCard: "shadow-xl",
                  },
                }}
                afterSwitchSessionUrl="/"
              />
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

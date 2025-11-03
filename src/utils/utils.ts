import {
    Facebook,
    Instagram,
    Linkedin,
    Search,
    ShoppingBasket,
    Twitter,
    User,
} from "lucide-react";

export const maxDrinkPrice = 15000;

export const sortingMethods = [
    { method: "Sort by Default" },
    { method: "Sort by Popularity" },
    { method: "Sort by Latest" },
    { method: "Sort by Price: Low to High" },
    { method: "Sort by Price: High to Low" },
];

export const socials = [
    {
        icon: Facebook,
        label: "Facebook",
        link: "#",
    },
    {
        icon: Instagram,
        label: "Instagram",
        link: "#",
    },
    {
        icon: Linkedin,
        label: "Linkedin",
        link: "#",
    },
    {
        icon: Twitter,
        label: "X",
        link: "#",
    },
];

export const iconClasses =
    "text-primary-green text-base p-2 rounded-full box-content border-2 border-primary-green hover:text-white hover:border-white transition cursor-pointer";

export const headerIcons = [
    {
        icon: User,
        link: "#",
        tooltip: "Profile",
    },
    {
        icon: Search,
        link: "#",
        tooltip: "Find Coffee",
    },
    {
        icon: ShoppingBasket,
        link: "#",
        tooltip: "Cart",
    },
];

export const navLinks = [
    {
        label: "Home",
        link: "/home",
    },
    {
        label: "Drinks",
        link: "/drinks",
    },
];

export const liftSidebarPosition = () => {
    const productSidebar = document.getElementById("product-sidebar");
    productSidebar && productSidebar.classList.add("!top-36");
};

export const lowerSidebarPosition = () => {
    const productSidebar = document.getElementById("product-sidebar");
    productSidebar && productSidebar.classList.remove("!top-36");
};

export const addToCart = (_id: string) => {
    console.log(`product with id: ${_id} added to cart`);
};

import logo from "@/assets/images/logo.png";
import { headerIcons, navLinks, socials } from "@/utils/utils";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
    Navbar,
    Tooltip,
    TooltipProvider,
    NavbarCollapse,
    NavbarContainer,
    NavbarCollapseBtn,
    NavbarItem,
} from "keep-react";

const HomeHeader = () => {
    return (
        <>
            <header className="absolute top-0 right-0 left-0 z-20 container mx-auto px-8 xl:px-0">
                <nav className="flex items-center justify-between py-6">
                    <div className="hidden flex-1 items-center justify-start gap-3 lg:flex">
                        <p className="text-[1rem] text-white">Follow Us</p>
                        <hr className="w-4" />
                        <div className="flex items-center justify-between gap-2">
                            {/* {socials?.map((item, index) => (
                                <a href={item?.link} key={index}>
                                    {React.createElement(item?.icon, {
                                        className: iconClasses,
                                    })}
                                </a>
                            ))} */}

                            {socials?.map((social) => (
                                <a href={social?.link} key={social?.label}>
                                    <social.icon className={"icon"} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <Link href="/" className="">
                        <Image className="w-32" src={logo} alt="" />
                    </Link>

                    <div className="hidden flex-1 items-center justify-end sm:flex">
                        <div className="flex items-center justify-between gap-5">
                            {/* {user ? (
                                headerIcons?.map(({ icon, link, tooltip }, index) => (
                                    <Tooltip content={tooltip} style="light" key={index}>
                                        <Link to={link}>
                                            {React.createElement(icon, {
                                                className: iconClasses,
                                            })}
                                        </Link>
                                    </Tooltip>
                                ))
                            ) : (
                                <Tooltip content="Login" style="light">
                                    <Link to="/auth">
                                        <MdLogin className={iconClasses} />
                                    </Link>
                                </Tooltip>
                            )} */}

                            {headerIcons?.map((icon) => (
                                <TooltipProvider key={icon?.tooltip}>
                                    <Tooltip content={icon?.tooltip} style="light">
                                        <Link href={icon?.link}>
                                            <icon.icon className={"icon"} />
                                        </Link>
                                    </Tooltip>
                                </TooltipProvider>
                            ))}
                        </div>
                    </div>

                    <Navbar className="block bg-transparent p-0 pl-5 text-white lg:hidden">
                        <NavbarItem
                            openIcon={<Menu size={30} />}
                            className="block"
                        ></NavbarItem>

                        <NavbarCollapse
                            collapseType="sidebar"
                            className="fixed top-0 right-0 !w-full bg-white p-10"
                        >
                            <NavbarContainer
                                tag="nav"
                                className="text-secondary-black flex h-full flex-col justify-between"
                            >
                                <ul className="flex flex-col gap-5">
                                    {navLinks?.map((item) => (
                                        <Link
                                            className="text-sm font-bold"
                                            key={item?.label}
                                            href={item?.link}
                                        >
                                            {item?.label}
                                        </Link>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-5 pb-10">
                                    {headerIcons?.map((icon) => (
                                        <Tooltip
                                            content={icon?.tooltip}
                                            style="light"
                                            key={icon?.tooltip}
                                        >
                                            <Link href={icon?.link}>
                                                <icon.icon className={"icon"} />
                                            </Link>
                                        </Tooltip>
                                    ))}
                                    {/* {user ? (
                                        headerIcons?.map(
                                            ({ icon, link, tooltip }, index) => (
                                                <Tooltip
                                                    content={tooltip}
                                                    style="light"
                                                    key={index}
                                                >
                                                    <Link to={link}>
                                                        {React.createElement(icon, {
                                                            className: iconClasses,
                                                        })}
                                                    </Link>
                                                </Tooltip>
                                            )
                                        )
                                    ) : (
                                        <Tooltip content="Login" style="light">
                                            <Link to="/auth">
                                                <MdLogin className={iconClasses} />
                                            </Link>
                                        </Tooltip>
                                    )} */}
                                </div>
                            </NavbarContainer>
                        </NavbarCollapse>
                    </Navbar>
                </nav>

                <nav className="hidden items-center justify-center gap-10 pt-4 lg:flex">
                    {navLinks?.map((item) => (
                        <Link
                            className="text-sm font-bold text-white"
                            key={item?.label}
                            href={item?.link}
                        >
                            {item?.label}
                        </Link>
                    ))}
                </nav>
            </header>
        </>
    );
};

export default HomeHeader;

import logo from "@/assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Tooltip } from "keep-react";
import { FaBars } from "react-icons/fa6";
import { MdLogin } from "react-icons/md";
import useAuth from "../../hooks/useAuth/useAuth";

const HomeHeader = () => {
    const { headerIcons, navLinks } = useUtils();
    const { user } = useAuth();

    return (
        <>
            <header className="absolute top-0 right-0 left-0 z-20 container mx-auto px-8 xl:px-0">
                <nav className="flex items-center justify-between py-6">
                    <div className="hidden flex-1 items-center justify-start gap-3 lg:flex">
                        <p className="text-[1rem] text-white">Follow Us</p>
                        <hr className="w-4" />
                        <div className="flex items-center justify-between gap-2">
                            {socials?.map((item, index) => (
                                <a href={item?.link} key={index}>
                                    {React.createElement(item?.icon, {
                                        className: iconClasses,
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>

                    <Link to="/" className="">
                        <img className="w-32" src={logo} alt="" />
                    </Link>

                    <div className="hidden flex-1 items-center justify-end sm:flex">
                        <div className="flex items-center justify-between gap-5">
                            {user ? (
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
                            )}
                        </div>
                    </div>

                    <Navbar className="block bg-transparent p-0 pl-5 text-white lg:hidden">
                        <Navbar.Toggle
                            openIcon={<FaBars size={30} />}
                            className="block"
                        ></Navbar.Toggle>

                        <Navbar.Collapse
                            collapseType="sidebar"
                            className="fixed top-0 right-0 !w-full bg-white p-10"
                        >
                            <Navbar.Container
                                tag="nav"
                                className="text-secondary-black flex h-full flex-col justify-between"
                            >
                                <ul className="flex flex-col gap-5">
                                    {navLinks?.map((item) => (
                                        <NavLink
                                            className="text-sm font-bold"
                                            key={item?.link}
                                            to={item?.link}
                                        >
                                            {item?.label}
                                        </NavLink>
                                    ))}
                                </ul>

                                <div className="flex items-center gap-5 pb-10">
                                    {headerIcons?.map(
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
                                        ),
                                    )}
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
                            </Navbar.Container>
                        </Navbar.Collapse>
                    </Navbar>
                </nav>

                <nav className="hidden items-center justify-center gap-10 pt-4 lg:flex">
                    {navLinks?.map((item) => (
                        <NavLink
                            className="text-sm font-bold text-white"
                            key={item?.link}
                            to={item?.link}
                        >
                            {item?.label}
                        </NavLink>
                    ))}
                </nav>
            </header>
        </>
    );
};

export default HomeHeader;

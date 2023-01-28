import  { useEffect, useState } from "react";

const useNav = () => {
    const [scrollY, setScrollY] = useState<number>(0);
    const [showNav, setShowNav] = useState<boolean>(true);

    const handleScroll = () => {
    if (typeof window !== "undefined") {
        if (window.scrollY > scrollY) {
        setShowNav(false);
        } else {
        setShowNav(true);
        }

        setScrollY(window.scrollY);
    }
    };

    useEffect(() => {
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", handleScroll);

        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }
    }, [scrollY]);

    return [showNav];
};

export default useNav;

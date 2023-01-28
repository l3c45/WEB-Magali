import  { useState } from "react";

const useMenu = () => {
    const [isOpenMenu, setIsOpenMenu] = useState<Boolean>(false);

    const handleMenu = () => {
        
        setIsOpenMenu((prev) => !prev);
    };

    return { isOpenMenu, handleMenu };
};

export default useMenu;

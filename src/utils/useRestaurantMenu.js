import { useEffect, useState } from "react";
import { MENU_URL } from "../common/constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(()=> {
        fetchData();
    },[resId]);

    const fetchData = async () => {
        const res = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${resId}`);
        const result = await res.json();
        console.log("first")
        setResInfo(result.data);
    };
    return resInfo;
};

export default useRestaurantMenu;
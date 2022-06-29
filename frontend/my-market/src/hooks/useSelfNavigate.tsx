
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";


const useSelfNavigate = () => {

    const navigate = useNavigate();

    const navigatePage = useCallback((url: string) => navigate(url),[navigate]);

    return [navigatePage];
}

export default useSelfNavigate;
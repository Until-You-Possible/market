
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

// 关于跳转hooks

const useSelfNavigate = () => {

    const navigate = useNavigate();

    const navigatePage = useCallback((url: string) => {
        return navigate(url);
    }, [navigate]);

    return [navigatePage];
}

export default useSelfNavigate;
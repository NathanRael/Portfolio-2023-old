import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const seeAnyway = urlParams.get('seeAnyway');

        if (seeAnyway !== 'true') {
            window.location.href = 'https://nathanrael.vercel.app/';
        }
    }, []);
};

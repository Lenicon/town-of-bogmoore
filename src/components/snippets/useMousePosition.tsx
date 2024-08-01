import { useEffect, useState } from 'react';


const useMousePosition = ( includeTouch = false ) => {
    const [
        mousePosition,
        setMousePosition
    ] = useState<any>({ x: null, y: null });

    useEffect(() => {
        const updateTouchPosition = (ev: TouchEvent) => {
            let x, y;
            const touch = ev.touches[0];
            [x, y] = [touch.clientX, touch.clientY];
            setMousePosition({ x, y });
        }

        const updateMousePosition = (ev: { clientX: any; clientY: any; }) => {
            let x, y;
            [x, y] = [ev.clientX, ev.clientY];
            setMousePosition({ x, y });
        };



        window.addEventListener('mousemove', updateMousePosition);
        if (includeTouch) {
            window.addEventListener('touchmove', updateTouchPosition);
        }

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            if (includeTouch) {
                window.removeEventListener('touchmove', updateTouchPosition);
            }
        };
    }, []);
    return mousePosition;
};
export default useMousePosition;
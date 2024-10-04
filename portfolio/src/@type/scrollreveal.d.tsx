declare namespace ScrollReveal {
    interface ScrollRevealConfig {
        origin?: string;
        distance?: string;
        duration?: number;
        delay?: number;
        easing?: string;
        opacity?: number;
        scale?: number;
        reset?: boolean;
        useDelay?: string;
        viewFactor?: number;
        viewOffset?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    }
}

declare function ScrollReveal(config?: ScrollReveal.ScrollRevealConfig): {
    reveal: (target: string | HTMLElement, options?: any) => void;
    clean: (target: string | HTMLElement) => void;
    sync: () => void;
    destroy: () => void;
};

export default ScrollReveal;
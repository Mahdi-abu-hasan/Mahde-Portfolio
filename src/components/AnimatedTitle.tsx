import React from "react";
import SplitText from "../../animations/splittext";
const handleAnimationComplete = () => {
    console.log('All letters have animated!');
};

export default function AnimatedTitle({ text, className }: { text: string, className: string }) {
    const [key, setKey] = React.useState(0);
    React.useEffect(() => {
        const interval = setInterval(() => {
            setKey((prev) => prev + 1);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <SplitText
            key={key}
            text={text}
            delay={100}
            duration={0.7}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.3}
            rootMargin="-100px"
            textAlign="center"
            onLetterAnimationComplete={handleAnimationComplete}
            className={className}
        />
    );
}
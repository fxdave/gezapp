import React from 'react';

export default function Loader() {
    const [dotCount, setDotCount] = React.useState(0)

    React.useEffect(() => {
        const inter = setTimeout(
            () => setDotCount(dotCount + 1),
            100
        )
        return () => clearInterval(inter)
    })

    return "loading" + "...".slice(3 - dotCount % 4)
}
import { useEffect, useState } from "react";

export function useOnMounted() {
    const [mounted, setMounted] = useState(false)

    useEffect(()=> {
        if(mounted) return

        setMounted(true)
    }, [])

    return mounted
}

export function formatSeconds(seconds: number) {
    const mins = Math.floor(seconds / 60)
    const hrs = Math.floor(mins / 60)
    const secs = seconds % 60

    const hrStr = `${hrs}`.padStart(2, "0")
    const minStr = `${mins}`.padStart(2, "0")
    const secStr = `${secs}`.padStart(2, "0")

    return `${hrStr}:${minStr}:${secStr}`
}
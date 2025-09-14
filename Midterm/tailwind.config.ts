import type { Config } from "tailwindcss";

const config: Config = {
    content: [
    ],
    theme: {
        extend: {
            colors: {
                skyblue: "rgba(var(--skyblue))",
                tc: "rgba(var(--tc))"
            },
        },
    },
    plugins: [],
};
export default config
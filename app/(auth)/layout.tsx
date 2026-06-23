import { ReactNode } from "react";

export default function({children}: {
    children: ReactNode
}){
    return <div>
        <div>AUTH HEADER</div>
        {children}
        <div>AUTH FOOTER</div>
    </div>
}
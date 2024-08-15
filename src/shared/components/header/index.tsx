import {ReactNode} from "react";

export const Header = ({pageName, children}: {pageName: string, children?: ReactNode}) => {
    return(
        <div style={{width: '100vw', backgroundColor: '#c0c0c0', padding: '20px', display: 'flex', gap: '32px'}}>
            <h1 style={{color: '#fff', fontSize: '32px'}}>{pageName}</h1>
            {children}
        </div>
    )
}
type ButtonProps = {
    text?: number | string | Array<string>;
}

export function Button(props: ButtonProps){
    return(
        <button>{props.text || 'Default'}</button>
    )
}

//named export function
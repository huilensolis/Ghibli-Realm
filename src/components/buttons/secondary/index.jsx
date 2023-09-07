const SecondaryBtn = ({ children, onClick, disabled }) => {
    const defaultStyles =
        'flex gap-2 items-center justify-center bg-transparent py-2 px-10 border-2 border-cm-tomato text-cm-tomato font-bold w-max rounded-md hover:bg-cm-tomato hover:text-white hover:scale-105 transition-all delay-75'
    const disabledStyles = `${defaultStyles} brightness-75`
    return (
        <button
            className={disabled ? disabledStyles : defaultStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}
export default SecondaryBtn

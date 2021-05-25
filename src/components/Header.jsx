import classes from './Header.module.css'

function Header() {
    return (
        <header className={classes.header}>
            <img
                src={"data:image/png;base64,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"}/>
        </header>
    )
}

export default Header;
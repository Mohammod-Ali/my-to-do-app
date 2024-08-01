
const Header = () => {
    return (
        <nav className="py-6 md:py-8 fixed top-0 w-full !bg-[#191D26] z-50">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
            <a href="/">
                <img
                    className="h-[45px]"
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Microsoft_To-Do_icon.png/1103px-Microsoft_To-Do_icon.png?20200320172308'}
                    alt="Lws"
                />
            </a>
        </div>
    </nav>
    );
};

export default Header;
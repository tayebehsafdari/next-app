import Link from "next/link";
import Headercss from "./Header.module.scss";

const Header = () => {
    return (
        <>
            {/*<style global jsx>
                {``}
            </style>*/}
            <ul className={Headercss.ul}>
                <li className={Headercss.li}>
                    <Link href="/">
                        <a className={Headercss.a}>home</a>
                    </Link>
                </li>
                <li className={Headercss.li}>
                    <Link href="/articles">
                        <a className={Headercss.a}>articles</a>
                    </Link>
                </li>
                <li className={Headercss.li}>
                    <Link href="/aboutUs">
                        <a className={Headercss.a}>aboutUs</a>
                    </Link>
                </li>
                <li className={Headercss.li}>
                    <Link href="/contactUs">
                        <a className={Headercss.a}>contactUs</a>
                    </Link>
                </li>
            </ul>
        </>
    );
}

export default Header;
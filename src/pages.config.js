import Components from './pages/Components';
import Docs from './pages/Docs';
import IconKit from './pages/IconKit';
import Kits from './pages/Kits';
import KitsStandard from './pages/KitsStandard';
import LandingKit from './pages/LandingKit';
import Home from './pages/Home';
import __Layout from './Layout.jsx';

export const PAGES = {
    "Components": Components,
    "Docs": Docs,
    "IconKit": IconKit,
    "Kits": Kits,
    "KitsStandard": KitsStandard,
    "LandingKit": LandingKit,
    "Home": Home,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
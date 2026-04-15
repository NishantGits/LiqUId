import Components from './pages/Components';
import Docs from './pages/Docs';
import IconKit from './pages/IconKit';
import Kits from './pages/Kits';
import KitsStandard from './pages/KitsStandard';
import LandingKit from './pages/LandingKit';
import Home from './pages/Home';
import Contribution from './pages/Contribution';
import __Layout from './Layout.jsx';

export const PAGES = {
    "components": Components,
    "docs": Docs,
    "kits/icon": IconKit,
    "kits": Kits,
    "kits/standard": KitsStandard,
    "landing": LandingKit,
    "home": Home,
    "contribution": Contribution,
}

export const pagesConfig = {
    mainPage: "home",
    Pages: PAGES,
    Layout: __Layout,
};
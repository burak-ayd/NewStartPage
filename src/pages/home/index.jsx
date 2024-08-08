import { useEffect } from "react";
import PropTypes from "prop-types";
import { useModal } from "~/stores/modal/hooks";
import { useTheme, useBackgroundImage } from "~/stores/general/hooks";
import useColorScheme from "~/hooks/use-color-scheme";
import Header from "~/components/header";
import BookmarkPanel from "~/components/bookmarkPanel";
import Modal from "~/modals";

function Home() {
    const theme = useTheme();
    const backgroundImage = useBackgroundImage();
    const { colorScheme } = useColorScheme();
    const modal = useModal();

    // useEffect(() => {
    //     if (backgroundImage) {
    //         document.body.style.backgroundImage = `url(${backgroundImage})`;
    //         document.body.className = "background bg-cover bg-center";
    //     } else {
    //         document.body.style.backgroundImage = "";
    //         if (theme === "default") {
    //             document.body.className = colorScheme;
    //         } else {
    //             document.body.className = theme;
    //         }
    //     }
    // }, [theme, colorScheme, backgroundImage]);

    return (
        <div>
            {modal && <Modal />}
            <Header />
            <BookmarkPanel />
        </div>
    );
}

Home.propTypes = {};

export default Home;

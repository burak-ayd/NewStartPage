import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useBookmarks } from "~/stores/general/hooks";
import { setBookmarks } from "~/stores/general/actions";
import { RiDeleteBin6Line } from "react-icons/ri";

const BookmarkItem = () => {
    const _bookmarks = useBookmarks();

    const [bookmarks, setBookmark] = useState(_bookmarks);

    useEffect(() => {
        setBookmark(_bookmarks);
    }, [_bookmarks]);

    const deleteBookmark = (id) => {
        setBookmark((prevBookmarks) =>
            prevBookmarks.filter((bm) => bm.id !== id)
        );
    };

    useEffect(() => {
        setBookmarks(bookmarks);
    }, [bookmarks]);

    console.log("Bookmark: ", bookmarks);
    return bookmarks && bookmarks.length > 0 ? (
        <div className="grid grid-cols-13 w-full h-full">
            {bookmarks.map((bookmark, index) => (
                <div key={index} className="group relative hover:shadow-lg">
                    <a
                        href={bookmark.url}
                        className=" w-36 h-36 flex flex-col items-center justify-center gap-y-2 bg-blue-gray-100/50 rounded-lg mb-2 last:mb-0"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={bookmark.icon}
                            alt={bookmark.name}
                            className="w-24 h-24 bg-white rounded-lg bg-cover bg-center"
                        />
                        <span className="text-md ">{bookmark.name}</span>
                    </a>
                    <RiDeleteBin6Line
                        className="group-hover:visible invisible h-5 bg-blue-gray-500 border-none text-white cursor-pointer absolute top-2 right-1 font-bold text-lg transition-all hover:scale-110"
                        onClick={() => deleteBookmark(bookmark.id)}
                    />
                </div>
            ))}
        </div>
    ) : (
        <div className="flex items-center justify-center w-full h-full">
            <span className="text-sm text-white">No bookmarks</span>
        </div>
    );
};
BookmarkItem.propTypes = {
    name: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
};
export default BookmarkItem;

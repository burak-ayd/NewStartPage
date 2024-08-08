import PropTypes from "prop-types";
import { useState } from "react";
import classnames from "classnames";
import { setBookmarks } from "~/stores/general/actions";
import { useBookmarks } from "~/stores/general/hooks";
import { v4 as uuidv4 } from "uuid";

const BookmarkModal = () => {
    const [url, setUrl] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(false);
    const [urlError, setUrlError] = useState(false);

    var bookmarks = useBookmarks();

    const handleAddBookmark = (e) => {
        e.preventDefault();

        // URL ve isim kontrolü
        if (url && name) {
            setError(false);
            setUrlError(!validateUrl(url));
        } else {
            setError(true);
            return;
        }

        if (!validateUrl(url)) {
            setUrlError(true);
            return;
        }

        if (url && name && validateUrl(url)) {
            const newBookmark = {
                id: uuidv4(),
                name: name,
                url: url,
                icon:
                    "https://www.google.com/s2/favicons?sz=64&domain_url=" +
                    url +
                    "&sz=48",
            };

            const updatedBookmarks = [...bookmarks, newBookmark]; // Global state'deki bookmarks ile yeni bookmark ekleniyor

            setBookmarks(updatedBookmarks); // Global state güncelleniyor

            setName("");
            setUrl("");
        }
    };

    const validateUrl = (url) => {
        const regex =
            /^(https?:\/\/)?([\w\d-]+\.){1,2}([a-zA-Z]{2,63})(\/.*)?$/;
        return regex.test(url);
    };

    return (
        <div className="modal-content mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg text-center">
                <h1 className="text-2xl font-bold sm:text-3xl text-white">
                    Add Bookmark
                </h1>
            </div>

            <form action="#" className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <div className="relative">
                        <input
                            type="text"
                            value={name}
                            className={classnames(
                                "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
                                {
                                    "relative block rounded-md border-2 border-red-800 shadow-lg":
                                        error,
                                }
                            )}
                            placeholder="Enter Bookmark Name"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>

                <div>
                    <div className="relative">
                        <input
                            type="text"
                            onChange={(e) => setUrl(e.target.value)}
                            value={url}
                            className={classnames(
                                "w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm",
                                {
                                    "relative block rounded-md border-2 border-red-800 shadow-lg":
                                        error || urlError,
                                }
                            )}
                            placeholder="Enter Bookmark URL"
                        />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <span>
                        {error && (
                            <p className="text-red-500 text-md">
                                Please fill in all fields
                            </p>
                        )}
                        {urlError && (
                            <p className="text-red-500 text-md">
                                Please enter a valid URL
                            </p>
                        )}
                    </span>
                    <button
                        type="submit"
                        onClick={handleAddBookmark}
                        className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookmarkModal;

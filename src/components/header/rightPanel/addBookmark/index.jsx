import { CgAddR } from "react-icons/cg";

function AddBookmark() {
    return (
        <div className="add-bookmark flex items-center justify-center w-full h-full">
            <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-700/50 hover:bg-zinc-200 transition-colors"
                type="button"
                // onClick={() => {
                //     setModal("add-bookmark");
                // }}
            >
                <span className="add-bookmark-icon">
                    <CgAddR size={24} />
                </span>
            </button>
        </div>
    );
}

export default AddBookmark;

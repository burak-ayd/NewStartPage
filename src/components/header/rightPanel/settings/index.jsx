import { IoSettingsOutline } from "react-icons/io5";

function Settings() {
    return (
        <div className="settings flex items-center justify-center w-full h-full">
            <button
                className="flex items-center justify-center w-9 h-9 rounded-full bg-transparent dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-500 dark:hover:bg-zinc-700/50 hover:bg-zinc-200 transition-colors"
                type="button"
                // onClick={() => {
                //     setModal("settings");
                // }}
            >
                <span className="settings-icon">
                    <IoSettingsOutline size={24} />
                </span>
            </button>
        </div>
    );
}

export default Settings;

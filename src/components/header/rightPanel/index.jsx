import AddBookmark from "./addBookmark";
import Settings from "./settings";

export default function RightPanel() {
    return (
        <div className="flex items-center justify-center">
            <AddBookmark />
            <Settings />
        </div>
    );
}

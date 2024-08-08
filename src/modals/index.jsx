import modals from "~/routes/modals";
import { useModal } from "~/stores/modal/hooks";
import { removeModal } from "~/stores/modal/actions";

export default function Modal() {
    const modal = useModal();

    const currentModal = modals.find((m) => m.name === modal.name);
    const durum = (e) => {
        if (!e.target.closest(".modal-content")) {
            removeModal();
        }
    };
    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#5b7083]/40"
            onClick={durum}
        >
            <div className="bg-[#2c313a] w-[700px] max-h-[90vh] h-[600px] overflow-auto rounded-2xl">
                {currentModal && <currentModal.component />}
            </div>
        </div>
    );
}

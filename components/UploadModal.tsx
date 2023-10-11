"use client";

import useUploadModal from "@/hooks/useUploadModal";

import Modal from "./Modal";

const UploadModal = () => {
    const uploadModal = useUploadModal();

    const onChange = (open: boolean) => {
        if (!open) {
            // Reset the form
            uploadModal.onClose();
        }
    }

    return ( 
        <Modal
            title="Upload modal title"
            description="Upload modal desc"
            isOpen={uploadModal.isOpen}
            onChange={onChange}
        >
            Upload Contents
        </Modal>
     );
}
 
export default UploadModal;
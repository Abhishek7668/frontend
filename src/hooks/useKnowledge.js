import { useState } from "react";
import { uploadKnowledge } from "../api/knowledge";

export default function useKnowledge() {

    const [selectedFile, setSelectedFile] = useState(null);

    const [uploading, setUploading] = useState(false);

    const [error, setError] = useState("");

    const [success, setSuccess] = useState("");

    const [result, setResult] = useState(null);

    // ===============================
    // Select PDF
    // ===============================

    const chooseFile = (file) => {

        setError("");
        setSuccess("");
        setResult(null);

        if (!file) return;

        if (file.type !== "application/pdf") {

            setError("Only PDF files are allowed.");

            return;

        }

        setSelectedFile(file);

    };

    // ===============================
    // Upload PDF
    // ===============================

    const upload = async () => {

        if (!selectedFile) {

            setError("Please choose a PDF.");

            return;

        }

        try {

            setUploading(true);

            setError("");

            setSuccess("");

            const formData = new FormData();

            formData.append("file", selectedFile);

            const res = await uploadKnowledge(formData);

            setResult(res.data);

            setSuccess(res.data.message);

        } catch (err) {

            console.error(err);

            setError(

                err.response?.data?.detail ||

                "Upload failed."

            );

        } finally {

            setUploading(false);

        }

    };

    return {

        selectedFile,

        uploading,

        error,

        success,

        result,

        chooseFile,

        upload

    };

}
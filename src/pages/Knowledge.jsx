import { Upload, FileText, CheckCircle, AlertCircle } from "lucide-react";
import MainLayout from "../layouts/MainLayout";
import useKnowledge from "../hooks/useKnowledge";

export default function Knowledge() {

    const {

        selectedFile,

        uploading,

        error,

        success,

        result,

        chooseFile,

        upload

    } = useKnowledge();

    return (

        <MainLayout>

            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-8">

                {/* Header */}

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-white">

                        Knowledge Base

                    </h1>

                    <p className="mt-2 text-slate-400">

                        Upload company manuals and PDF documents to improve AI responses.

                    </p>

                </div>

                {/* Upload Card */}

                <div className="mx-auto max-w-3xl rounded-3xl border border-slate-700 bg-slate-900/70 p-8 shadow-xl backdrop-blur-xl">

                    <div className="flex flex-col items-center">

                        <Upload
                            size={70}
                            className="mb-5 text-cyan-400"
                        />

                        <h2 className="text-2xl font-bold text-white">

                            Upload PDF

                        </h2>

                        <p className="mt-2 text-center text-slate-400">

                            Select a PDF document to upload into the AI Knowledge Base.

                        </p>

                        {/* Choose File */}

                        <label className="mt-8 cursor-pointer rounded-xl border border-cyan-500 bg-cyan-500/10 px-6 py-3 text-cyan-400 transition hover:bg-cyan-500/20">

                            Choose PDF

                            <input

                                type="file"

                                accept=".pdf"

                                className="hidden"

                                onChange={(e) =>

                                    chooseFile(e.target.files[0])

                                }

                            />

                        </label>

                        {/* Selected File */}

                        {selectedFile && (

                            <div className="mt-8 w-full rounded-2xl border border-slate-700 bg-slate-800/60 p-5">

                                <div className="flex items-center gap-3">

                                    <FileText className="text-red-400" />

                                    <div>

                                        <p className="font-semibold text-white">

                                            {selectedFile.name}

                                        </p>

                                        <p className="text-sm text-slate-400">

                                            {(selectedFile.size / 1024 / 1024).toFixed(2)} MB

                                        </p>

                                    </div>

                                </div>

                            </div>

                        )}

                        {/* Error */}

                        {error && (

                            <div className="mt-6 flex w-full items-center gap-3 rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-400">

                                <AlertCircle />

                                {error}

                            </div>

                        )}

                        {/* Success */}

                        {success && (

                            <div className="mt-6 flex w-full items-center gap-3 rounded-xl border border-emerald-500 bg-emerald-500/10 p-4 text-emerald-400">

                                <CheckCircle />

                                {success}

                            </div>

                        )}

                        {/* Upload Button */}

                        <button

                            onClick={upload}

                            disabled={uploading}

                            className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-50"

                        >

                            {

                                uploading

                                    ? "Uploading..."

                                    : "Upload Knowledge"

                            }

                        </button>

                    </div>

                </div>

                {/* Upload Result */}

                {result && (

                    <div className="mx-auto mt-8 max-w-3xl rounded-3xl border border-emerald-500 bg-emerald-500/10 p-8">

                        <h3 className="mb-5 text-2xl font-bold text-white">

                            Upload Summary

                        </h3>

                        <div className="grid gap-4 md:grid-cols-3">

                            <div className="rounded-xl bg-slate-900 p-5">

                                <p className="text-slate-400">

                                    Filename

                                </p>

                                <p className="mt-2 font-semibold text-white">

                                    {result.filename}

                                </p>

                            </div>

                            <div className="rounded-xl bg-slate-900 p-5">

                                <p className="text-slate-400">

                                    Pages

                                </p>

                                <p className="mt-2 text-2xl font-bold text-cyan-400">

                                    {result.pages}

                                </p>

                            </div>

                            <div className="rounded-xl bg-slate-900 p-5">

                                <p className="text-slate-400">

                                    Chunks

                                </p>

                                <p className="mt-2 text-2xl font-bold text-cyan-400">

                                    {result.chunks}

                                </p>

                            </div>

                        </div>

                    </div>

                )}

            </div>

        </MainLayout>

    );

}
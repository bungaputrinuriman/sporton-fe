"use client";

import { useState, useRef } from "react";
import { FiUploadCloud, FiImage, FiTrash2 } from "react-icons/fi";

type TFileUploadProps = {
  onFileSelect?: (file: File | null) => void;
};

const FileUpload = ({ onFileSelect }: TFileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (selectedFile?: File) => {
    if (!selectedFile) return;
    setFile(selectedFile);
    onFileSelect?.(selectedFile);
  };

  const removeFile = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onFileSelect?.(null);
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        handleFileChange(droppedFile);
      }}
      className="flex flex-col justify-center items-center w-full py-6 border border-dashed border-primary bg-primary/5 rounded-lg cursor-pointer min-h-[150px]"
    >
      <input
        type="file"
        className="hidden"
        ref={fileInputRef}
        onChange={(e) => handleFileChange(e.target.files?.[0])}
        accept="image/*"
      />

      {!file ? (
        <div className="text-center">
          <FiUploadCloud className="text-primary mx-auto text-3xl" />
          <p className="text-xs mt-2">Upload Your Payment Receipt here</p>
        </div>
      ) : (
        <div className="text-center w-full px-4">
          <FiImage 
            className="text-primary mx-auto mb-4" 
            size={28} 
          />
          <p className="text-sm text-primary font-medium truncate max-w-[200px] mx-auto">
            {file.name}
          </p>
          <p className="text-sm text-gray-400">
            {(file.size / 1024).toFixed(1)} KB
          </p>
          <button
            onClick={removeFile}
            className="flex gap-2 bg-primary/90 text-white mx-auto rounded mt-4 px-2 py-1 items-center text-xs hover:bg-primary transition-colors"
          >
            <FiTrash2 className="self-center" size={14} />
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
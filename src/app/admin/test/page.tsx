'use client'
import React, {useState} from 'react';

const Page = () => {
    const [file, setFile] = useState<File | null>(null);
    const [imageKey, setImageKey] = useState<string | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    async function handleUpload() {
        if (!file) return;

        const res = await fetch("/api/s3/upload", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ filename: file.name, contentType: file.type }),
        });
        const { url, fields, key, error } = await res.json();
        if (error) return alert(error);

        const form = new FormData();
        Object.entries(fields).forEach(([k, v]) => form.append(k, v as string));
        form.append("file", file);

        const s3res = await fetch(url, { method: "POST", body: form });
        if (s3res.ok) {
            setImageKey(key);
            alert("업로드 완료!");
        } else {
            alert("업로드 실패");
        }
    }

    async function fetchViewUrl() {
        if (!imageKey) return;
        const res = await fetch(`/api/s3/view?key=${encodeURIComponent(imageKey)}`);
        const { url } = await res.json();
        setPreviewUrl(url);
    }

    return (
        <main style={{ padding: 24 }}>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <button onClick={handleUpload} disabled={!file}>업로드</button>

            {imageKey && (
                <>
                    <p>object key: {imageKey}</p>
                    <button onClick={fetchViewUrl}>이미지 보기 URL 받기</button>
                </>
            )}

            {previewUrl && (
                <div style={{ marginTop: 16 }}>
                    <img src={previewUrl} alt="preview" style={{ maxWidth: 400 }} />
                </div>
            )}
        </main>
    );
}

export default Page;
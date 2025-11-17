import { NextRequest, NextResponse } from "next/server";
import { s3 } from "@/lib/s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { v4 as uuid } from "uuid";
import mime from "mime";

const BUCKET = process.env.S3_BUCKET!;
const BASE = process.env.S3_BASE_PREFIX ?? "";

export async function POST(req: NextRequest) {
    const { filename, contentType } = await req.json();

    const ext = mime.getExtension(contentType) || "bin";
    const key = `${BASE}${uuid()}.${ext}`;

    const { url, fields } = await createPresignedPost(s3, {
        Bucket: BUCKET,
        Key: key,
        Conditions: [
            ["content-length-range", 0, 5 * 1024 * 1024],
            ["starts-with", "$Content-Type", contentType.split("/")[0]],
        ],
        Fields: {
            "Content-Type": contentType,
            "x-amz-server-side-encryption": "AES256",
        },
        Expires: 60,
    });

    return NextResponse.json({ url, fields, key });
}

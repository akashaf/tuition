"use client";

import PDFViewer from "@/components/PDFViewer";
import { useSearchParams } from "next/navigation";

export default function ByUuid() {
  const router = useSearchParams();
  return (
    <PDFViewer
      fileUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tuition/mathematic/form-5/${router.get(
        "name"
      )}`}
    />
  );
}

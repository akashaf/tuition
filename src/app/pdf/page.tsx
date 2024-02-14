"use client";

import PDFViewer from "@/components/PDFViewer";
import { useSearchParams } from "next/navigation";

export default function ByUuid() {
  const router = useSearchParams();
  return (
    <PDFViewer
      fileUrl={`https://qjrdgypcggkbyebgevgd.supabase.co/storage/v1/object/public/tuition/mathematic/form-5/${router.get(
        "name"
      )}`}
    />
  );
}

"use client";

import PDFViewer from "@/components/PDFViewer";

export default function ByUuid({ params }: { params: { slug: string } }) {
  return (
    <PDFViewer
      fileUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tuition/mathematic/form-5/${params.slug}`}
    />
  );
}

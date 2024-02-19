"use client";

import PDFViewer from "@/components/PDFViewer";
import Breadcrumbs from "@/components/header/Breadcrumb";

export default function ByUuid({ params }: { params: { slug: string } }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { title: "Dashboard", href: "/" },
          { title: params.slug, href: `/${params.slug}` },
        ]}
      />
      <PDFViewer
        fileUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tuition/mathematic/form-5/${params.slug}`}
      />
    </>
  );
}

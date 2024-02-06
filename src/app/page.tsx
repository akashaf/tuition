import PDFViewer from "@/components/PDFViewer";
// import { supabase } from "@/utils/supabase";

export default function Home() {
  // const { data, error } = await supabase.storage.listBuckets();

  return <PDFViewer fileUrl="/dummy.pdf" />;
}

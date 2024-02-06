
import PDFViewer from "@/components/PDFViewer";
import { supabase } from "@/utils/supabase";

import Dashboard from "@/components/dashboard";

export default async function Home() {
  const { data } = await supabase.storage
    .from("tuition")
    .list("mathematic/form-5", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  return <Dashboard {...{data}} />;
  // return <PDFViewer fileUrl="/dummy.pdf" />;
}

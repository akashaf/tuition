import Dashboard from "@/components/dashboard";
import { supabase } from "@/utils/supabase";

export default async function Home() {
  const { data } = await supabase.storage
    .from("tuition")
    .list("mathematic/form-5", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });
  return <Dashboard {...{data}} />;
}

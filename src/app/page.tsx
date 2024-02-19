import Dashboard from "@/components/dashboard";
import Breadcrumbs from "@/components/header/Breadcrumb";
import { supabase } from "@/utils/supabase";

export default async function Home() {
  const { data } = await supabase.storage
    .from("tuition")
    .list("mathematic/form-5", {
      limit: 100,
      offset: 0,
      sortBy: { column: "name", order: "asc" },
    });

  return (
    <>
      <Breadcrumbs items={[{ title: "Dashboard", href: "#" }]} />
      <Dashboard {...{ data }} />
    </>
  );
}

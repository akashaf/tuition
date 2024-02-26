import Breadcrumbs from "@/components/header/Breadcrumb";
import { Title } from "@mantine/core";

export default function AssessmentByUuidPage({
  params,
}: {
  params: { uuid: string };
}) {
  return (
    <>
      <Breadcrumbs
        items={[
          { title: "Dashboard", href: "/" },
          { title: params.uuid, href: `/${params.uuid}` },
        ]}
      />
      <Title
        classNames={{
          root: "capitalize text-center pb-4",
        }}
        order={1}
      >
        {params.uuid}
      </Title>
      Assesment Page {params.uuid}
    </>
  );
}
import { Breadcrumbs as $Breadcrumbs, Anchor, Space } from "@mantine/core";
import Link from "next/link";

export default function Breadcrumbs({
  items,
}: {
  items: { title: string; href: string }[];
}) {
  return (
    <>
      <$Breadcrumbs
        classNames={{
          root: "hidden lg:block lg:mt-12",
        }}
      >
        {items.map((item, index) => (
          <Anchor
            component={Link}
            href={item.href}
            key={index}
            underline="never"
            className="text-black"
          >
            {item.title}
          </Anchor>
        ))}
      </$Breadcrumbs>
      <Space className="hidden lg:block" h="lg" />
    </>
  );
}

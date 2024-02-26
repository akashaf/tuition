"use client";

import PDFViewer from "@/components/PDFViewer";
import Breadcrumbs from "@/components/header/Breadcrumb";
import { ActionIcon, Anchor, Box, Menu, Title } from "@mantine/core";
import { IconDotsVertical } from "@tabler/icons-react";
import Link from "next/link";

export default function ByUuid({ params }: { params: { slug: string } }) {
  return (
    <>
      <Breadcrumbs
        items={[
          { title: "Dashboard", href: "/" },
          { title: params.slug, href: `/${params.slug}` },
        ]}
      />
      <Title
        classNames={{
          root: "capitalize text-center pb-4",
        }}
        order={1}
      >
        {params.slug}
      </Title>
      <Box pos="relative">
        <PDFViewer
          fileUrl={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/tuition/mathematic/form-5/${params.slug}`}
        />
        <Box pos="absolute" bottom={40} right={40}>
          <Menu
            position="top"
            offset={8}
            transitionProps={{
              transition: "pop-bottom-left",
              duration: 400,
              timingFunction: "ease",
            }}
          >
            <Menu.Target>
              <ActionIcon color="blue" radius="xl" size={40}>
                <IconDotsVertical stroke={1.5} size={30} />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Menu.Item key={i}>
                    <Anchor
                      component={Link}
                      href={`/assessment/${i}`}
                      key={i}
                      underline="never"
                      className="text-black"
                    >
                      Assessment {i}
                    </Anchor>
                  </Menu.Item>
                ))}
            </Menu.Dropdown>
          </Menu>
        </Box>
      </Box>
    </>
  );
}

'use client';

import { List } from "@mantine/core";

export default function Dashboard({data}:{data: Record<string, any>[] | null}) {
  return (
    <List>
      {data?.map((file) => (
        <List.Item key={file.id}>{file.name}</List.Item>
      ))}
    </List>
  );
}

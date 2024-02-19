"use client";

import { Button, Grid, Paper, Space, Text, Title } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Dashboard({
  data,
}: {
  data: Record<string, any>[] | null;
}) {
  const router = useRouter();
  return (
    <>
      <Title order={1}>Mathematics</Title>
      <Space h="lg" />
      <Grid>
        {data?.map((item) => (
          <Grid.Col
            key={item.id}
            span={{
              lg: 3,
              sm: 6,
            }}
          >
            <Paper shadow="lg" radius="md" p="xl">
              <Text fw="bold">{item.name}</Text>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => router.push(`/${item.name}`)}
              >
                <Text>Navigate</Text>
              </Button>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
}

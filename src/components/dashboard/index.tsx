"use client";

import { Button, Card, Center, Grid } from "@mantine/core";
import { useRouter } from "next/navigation";

export default function Dashboard({
  data,
}: {
  data: Record<string, any>[] | null;
}) {
  const router = useRouter();
  return (
    <Center h='100vh'>
      <Grid>
        {data?.map((item) => (
          <Grid.Col key={item.id} span={3}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              classNames={{
                section: "p-4 text-center cap font-bold text-lg",
              }}
            >
              <Card.Section>{item.name}</Card.Section>

              <Button
                color="blue"
                fullWidth
                mt="md"
                radius="md"
                onClick={() => router.push(`/pdf?name=${item.name}`)}
              >
                Navigate
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Center>
  );
}

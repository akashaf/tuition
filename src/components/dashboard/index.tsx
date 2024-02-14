"use client";
import { Badge, Button, Card, Center, Grid, Group, Image, Text } from "@mantine/core";
import PDFViewer from "../PDFViewer";

export default function Dashboard({
  data,
}: {
  data: Record<string, any>[] | null;
}) {
  return (
    <>
    <Center>
      <Grid>
        {data?.map((item) => (
          <Grid.Col key={item.id} span={3}>
            <Card shadow="sm" padding="lg" radius="md" withBorder classNames={{
              section: 'p-4'
            }}>
              <Card.Section>{item.name}</Card.Section>

              <Button color="blue" fullWidth mt="md" radius="md">
                Open
              </Button>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Center>
    </>
  );
}
/* <PDFViewer
              fileUrl={
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/tuition/mathematic/form-5/" +
                item.name
              }
            /> */

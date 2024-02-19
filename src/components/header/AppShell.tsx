'use client';

import { AppShell as $AppShell, Container, Group, Text } from "@mantine/core";

//   const mockdata = [
//     {
//       icon: IconCode,
//       title: "Open source",
//       description: "This Pokémon’s cry is very loud and distracting",
//     },
//     {
//       icon: IconCoin,
//       title: "Free for everyone",
//       description: "The fluid of Smeargle’s tail secretions changes",
//     },
//     {
//       icon: IconBook,
//       title: "Documentation",
//       description: "Yanma is capable of seeing 360 degrees without",
//     },
//     {
//       icon: IconFingerprint,
//       title: "Security",
//       description: "The shell’s rounded shape and the grooves on its.",
//     },
//     {
//       icon: IconChartPie3,
//       title: "Analytics",
//       description: "This Pokémon uses its flying ability to quickly chase",
//     },
//     {
//       icon: IconNotification,
//       title: "Notifications",
//       description: "Combusken battles with the intensely hot flames it spews",
//     },
//   ];

export default function AppShell({ children }: { children: React.ReactNode }) {
  // const theme = useMantineTheme();
  // const links = mockdata.map((item) => (
  //     <UnstyledButton className={classes.subLink} key={item.title}>
  //       <Group wrap="nowrap" align="flex-start">
  //         <ThemeIcon size={34} variant="default" radius="md">
  //           <item.icon style={{ width: '22rem', height: '22rem' }} color={theme.colors.blue[6]} />
  //         </ThemeIcon>
  //         <div>
  //           <Text size="sm" fw={500}>
  //             {item.title}
  //           </Text>
  //           <Text size="xs" c="dimmed">
  //             {item.description}
  //           </Text>
  //         </div>
  //       </Group>
  //     </UnstyledButton>
  //   ));
  return (
    <$AppShell
      padding="md"
      classNames={{
        header: "hidden lg:block",
      }}
    >
      <$AppShell.Header>
        <Container>
          <Group
            justify="space-between"
            h="100%"
            classNames={{
              root: "p-2",
            }}
          >
            <Text>logo here</Text>

            {/* TODO: To be prepared when menu confirm, we can use the following code: */}
            {/* <Group h="100%" gap={0} visibleFrom="sm">
              <a href="#" className={classes.link}>
                Home
              </a>
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Features
                      </Box>
                      <IconChevronDown
                        style={{ width: "1rem", height: "1rem" }}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={classes.link}>
                Learn
              </a>
              <a href="#" className={classes.link}>
                Academy
              </a>
            </Group>

            <Group visibleFrom="sm">
              <Button variant="default">Log in</Button>
              <Button>Sign up</Button>
            </Group> */}
          </Group>
        </Container>
      </$AppShell.Header>
      <$AppShell.Main>
        <Container>{children}</Container>
      </$AppShell.Main>
    </$AppShell>
  );
}

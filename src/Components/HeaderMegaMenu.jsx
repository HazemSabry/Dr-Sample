import React from "react";
import {
  createStyles,
  Header,
  Group,
  Button,
  UnstyledButton,
  Text,
  ThemeIcon,
  Burger,
  rem,
} from "@mantine/core";
import { MantineLogo } from "@mantine/ds";
import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
} from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: "#FFFFFF",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "24px",

    [theme.fn.smallerThan("sm")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.gray[0]
          : theme.colors.dark[6],
    }),
  },

  subLink: {
    width: "117px",
    height: "54px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "15px 28px",
    gap: "10px",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "24px",
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const navigate = useNavigate();

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <Header
      height={60}
      px="md"
      style={{ position: "fixed", backgroundColor: "#0D0D0D", border: "none" }}
    >
      <Group position="apart" sx={{ height: "100%" }}>
        <p
          style={{
            color: "#FFFFFF",
            font: "18px",
            fontWeight: "500",
            lineHeight: "24px",
          }}
        >
          Dr. Simple
        </p>

        <Group
          sx={{ height: "100%" }}
          spacing={0}
          className={classes.hiddenMobile}
        >
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/Chat" className={classes.link}>
            Chat
          </Link>
          <Link to="/Contact" className={classes.link}>
            Contact Us
          </Link>
        </Group>

        <Group className={classes.hiddenMobile}>
          <Button
            style={{
              background: "transparent",
              border: "none",
              color: "#FFFFFF",
              font: "18px",
              fontWeight: "500",
              lineHeight: "24px",
            }}
            onClick={() => navigate("/auth")}
            variant="default"
          >
            Log in
          </Button>
          <Button
            style={{
              backgroundImage: "linear-gradient(to right,#9B51E0,#3081ED)",
              border: "none",
              font: "16px",
              fontWeight: "500",
              lineHeight: "24px",
            }}
            onClick={() => navigate("/auth")}
          >
            Sign up
          </Button>
        </Group>

        <Burger
          opened={drawerOpened}
          onClick={toggleDrawer}
          className={classes.hiddenDesktop}
        />
      </Group>
    </Header>
  );
}

export default HeaderMegaMenu;

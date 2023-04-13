import React from "react";
import styled from "styled-components";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import SectionDecoration from "../SectionDecoration";

const ContactUsSection = () => {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <>
      <SectionDecoration left={0} />
      <SectionContainer>
        <form onSubmit={form.onSubmit(() => {})}>
          <Title
            order={2}
            size="h1"
            sx={(theme) => ({ color: "#FFFFFF" })}
            weight={900}
            align="left"
          >
            Contact Us
          </Title>

          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="xl"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps("message")}
          />

          <Group position="center" mt="xl">
            <Button
              style={{
                backgroundImage: "linear-gradient(to right,#9B51E0,#3081ED)",
              }}
              type="submit"
              size="md"
            >
              Send message
            </Button>
          </Group>
        </form>
      </SectionContainer>
    </>
  );
};

const SectionContainer = styled.div`
  height: 100vh;
  padding: 0 20%;
`;

export default ContactUsSection;

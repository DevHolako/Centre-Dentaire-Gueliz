import { CodeBlock } from "@phosphor-icons/react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import ActeForm from "@/components/ActeForm";
type Props = {
  id: number;
};

function EditPatients({ id }: Props) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        centered
        size="auto"
        transitionProps={{
          transition: "fade",
          duration: 600,
          timingFunction: "linear",
        }}
        keepMounted={false}
        radius={"sm"}
        overlayProps={{
          color:
            theme.colorScheme === "light"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <ActeForm method="Modifier" id={id} />
      </Modal>
      <CodeBlock size={29} className="pointer" onClick={open} />
    </>
  );
}

export default EditPatients;

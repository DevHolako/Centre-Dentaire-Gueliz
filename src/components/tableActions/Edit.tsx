import { CodeBlock } from "@phosphor-icons/react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, useMantineTheme } from "@mantine/core";
import ActeForm from "@/components/ActeForm";
import ReceForm from "@/components/ReceForm";
import DocFrom from "../DocForm";
type Props = {
  id: number;
  type: number;
};

function Edit({ id, type }: Props) {
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
        {type === 1 ? (
          <ActeForm method="Modifier" id={id} />
        ) : type === 2 ? (
          <ReceForm method="Modifier" id={id} />
        ) : (
          <DocFrom method="Modifier" id={id} />
        )}
      </Modal>
      <CodeBlock size={29} className="pointer" onClick={open} />
    </>
  );
}

export default Edit;

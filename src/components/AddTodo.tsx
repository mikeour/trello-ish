import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@/styles";
import Stack from "@/components/Stack";
import Avatar from "@/components/Avatar";
import { PlusIcon, CloseIcon } from "@/icons";

type AddTodoProps = {
  name: string;
  column: number;
  addCardToColumn: (text: string, column: number) => void;
};

function AddTodo({ name, column, addCardToColumn }: AddTodoProps) {
  const [userInput, setUserInput] = useState("");

  function handleOpenChange(isOpen: boolean) {
    const isClosingDialog = isOpen === false;

    if (isClosingDialog) {
      setUserInput("");
    }
  }

  function handleSave() {
    const hasUserInput = userInput.length > 0;

    if (hasUserInput) {
      addCardToColumn(userInput, column);
    }
  }

  return (
    <DialogRoot onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <AddTodoButton>
          <PlusIcon />
        </AddTodoButton>
      </DialogTrigger>
      <DialogOverlay />
      <DialogContent>
        <Stack type="column" gap={0}>
          <DialogTitle>
            Add to <ColumnName>{name}</ColumnName>
          </DialogTitle>
          <DialogDescription>
            Create new cards here. Click save when you're done.
          </DialogDescription>
        </Stack>

        <Textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <Stack type="row" gap={0} css={{ justifyContent: "space-between" }}>
          <Avatar user="M" />

          <DialogClose asChild>
            <Button onClick={handleSave}>Save</Button>
          </DialogClose>
        </Stack>

        <DialogClose asChild>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </DialogClose>
      </DialogContent>
    </DialogRoot>
  );
}

export default AddTodo;

const AddTodoButton = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  position: "absolute",
  bottom: "1.5%",
  right: "50%",
  transform: "translate(50%, 50%)",
  bg: "$indigo9",
  color: "$indigo1",
  size: "3.5rem",
  br: "$round",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  p: "$1",
  boxShadow: "0 2px 6px $colors$indigo6",
  cursor: "pointer",
  transition: "background 300ms ease-in-out",

  "&:hover": {
    bg: "$indigo10",
  },

  "&:focus": { outline: "3px solid $colors$indigo11", outlineOffset: "2px" },

  svg: {
    size: "100%",
    display: "block",
    fill: "white",
  },
});

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const contentShow = keyframes({
  "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
  "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
});

const DialogRoot = styled(Dialog.Root, {});

const DialogTrigger = styled(Dialog.Trigger, {});

const DialogOverlay = styled(Dialog.Overlay, {
  backgroundColor: "$blackA10",
  position: "fixed",
  inset: 0,
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  "@supports (backdrop-filter: blur(4px))": {
    backdropFilter: "blur(4px)",
  },
});

const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bg: "white",
  br: "$2",
  display: "grid",
  width: "min(90%, 450px)",
  justifyContent: "flex-start",
  alignItems: "center",
  gtc: "minmax(0, 1fr)",
  gridGap: "$4",
  boxShadow:
    "0px 10px 38px -10px hsl(206 22% 7% / 35%), 0px 10px 20px -15px hsl(206 22% 7% / 20%)",
  p: "$4",

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: "transform",
  },
  "&:focus": { outline: "none" },
});

const DialogTitle = styled(Dialog.Title, {
  fontSize: "$3",
  color: "$mauve12",
});

const DialogDescription = styled(Dialog.Description, {
  color: "$mauve11",
  marginTop: "0.5rem",
});

const DialogClose = styled(Dialog.Close, {});

const Button = styled("button", {
  all: "unset",
  boxSizing: "border-box",
  display: "inline-flex",
  alignSelf: "flex-end",
  justifySelf: "flex-end",
  bg: "$indigo9",
  color: "$indigo3",
  alignItems: "center",
  justifyContent: "center",
  br: "$1",
  px: "$3",
  py: "$0",
  fontWeight: "600",
  height: "2.5rem",
  "&:hover": { bg: "$indigo10" },
  "&:focus": { boxShadow: `0 0 0 2px $colors$indigo7` },
});

const Textarea = styled("textarea", {
  all: "unset",
  display: "inline-flex",
  width: "100%",
  flex: "1",
  borderRadius: 4,
  boxSizing: "border-box",
  padding: "10px",
  color: "$indigo11",
  height: "5.4rem",
  boxShadow: `0 0 0 2px $colors$indigo4`,

  "&:focus": { boxShadow: `0 0 0 2px $colors$indigo8` },
});

const ColumnName = styled("span", {
  bg: "$indigo3",
  color: "$indigo9",
  fontSize: "$3",

  br: "$1",
  padding: "0.1rem 0.5rem",
});

const IconButton = styled("button", {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  size: "1rem",
  padding: "0.5rem",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fill: "$indigo11",
  position: "absolute",
  top: "3%",
  right: "2%",

  svg: {
    size: "100%",
    display: "block",
  },

  "&:hover": { bg: "$colors$indigo4" },
  "&:focus": { boxShadow: `0 0 0 2px $colors$indigo7` },
});

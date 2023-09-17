import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon, Pencil1Icon } from "@radix-ui/react-icons";
import { ReactNode, useState } from "react";

export default function Modal({
  open,
  setOpen,
  children,
}: {
  open?: boolean;
  setOpen?: (open: boolean) => void;
  children: ReactNode;
}) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      {children}
    </Dialog.Root>
  );
}

function ModalContent({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className=" fixed inset-0 bg-slate-300/50 data-[state=closed]:animate-[dialog-overlay-hide_200ms] data-[state=open]:animate-[dialog-overlay-show_200ms]" />
      <Dialog.Content className="fixed left-1/2 top-1/2 bg-black/50 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-md bg-white shadow p-8 text-gray-900 data-[state=closed]:animate-[dialog-content-hide_200ms] data-[state=open]:animate-[dialog-content-show_200ms] ">
        <div className="flex items-center justify-between">
          <Dialog.Title className="test-xl">{title}</Dialog.Title>
          <Dialog.Close className="text-gray-400 hover:text-gray-500">
            <Cross1Icon />
          </Dialog.Close>
        </div>
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

Modal.Button = Dialog.Trigger;
Modal.Content = ModalContent;
Modal.Close = Dialog.Close;

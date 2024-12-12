"use client";

import { Button } from "@/app/_components/_ui/button";
import UpsertEventDialog from "@/app/_components/UpsertEventDialog";
import { Event } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditEventButtonProps {
  event: Event;
}

const EditEventButton = ({ event }: EditEventButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertEventDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...event,
        }}
        eventId={event.id}
      />
    </>
  );
};

export default EditEventButton;
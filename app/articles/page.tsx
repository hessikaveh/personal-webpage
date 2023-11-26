"use client";
import React, { useEffect, useState } from "react";
import {
  DndContext,
  DragEndEvent,
  UniqueIdentifier,
  useDraggable,
  Modifiers,
  DragOverEvent,
} from "@dnd-kit/core";

import { Droppable, Draggable, DraggableOverlay } from "../components";
import dynamic from "next/dynamic";
import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import "highlight.js/styles/github.css";

hljs.registerLanguage("python", python);

const DraggableOverlaytWithNoSSR = dynamic(
  () => Promise.resolve(DraggableOverlay),
  {
    ssr: false,
  }
);
export default function Page() {
  const containers = ["A", "B"];
  const colors = ["green", "lightblue"];
  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [highlight, setHighlight] = useState<string>(colors[1]);
  const draggableMarkup = <DraggableItem label="label" />;
  useEffect(() => {
    hljs.highlightAll();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <h1>Python Async</h1>
        <p>
          Here are some insights into topics about the async programming in
          python
        </p>
        <pre className="mockup-code">
          <code className="language-python">import numpy as np</code>
        </pre>
      </article>

      <DndContext
        onDragStart={() => {
          setIsDragging(true);
        }}
        onDragEnd={handleDragEnd}
      >
        <div
          className="card w-96 bg-base-100 shadow-xl m-4"
          style={{ backgroundColor: highlight }}
        >
          <div className="card-body">
            <h2 className="card-title"> Here are the items you can drag:</h2>

            {parent === null ? draggableMarkup : null}
          </div>
        </div>
        {containers.map((id) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id} dragging={isDragging}>
            {parent === id ? draggableMarkup : id}
          </Droppable>
        ))}
        <DraggableOverlaytWithNoSSR />
      </DndContext>
    </main>
  );
  function handleDragEnd(event: DragOverEvent) {
    const { over } = event;

    // If the item is dropped over a container, set it as the parent
    // otherwise reset the parent to `null`
    setParent(over ? over.id : null);
    if (over && over.id === "A") {
      setHighlight(colors[0]);
    } else {
      setHighlight(colors[1]);
    }
  }
  interface DraggableProps {
    label?: string;
  }
  function DraggableItem({ label }: DraggableProps) {
    const { isDragging, setNodeRef, listeners } = useDraggable({
      id: "draggable-item",
    });

    return (
      <Draggable
        dragging={isDragging}
        ref={setNodeRef}
        listeners={listeners}
        label={label}
        style={{
          opacity: isDragging ? 0 : undefined,
        }}
      />
    );
  }
}

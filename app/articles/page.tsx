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
  const colors = ["lightgreen", "lightblue"];
  const [isDragging, setIsDragging] = useState(false);
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const [highlight, setHighlight] = useState<string>(colors[1]);
  const draggableMarkup = <DraggableItem label="label" />;

  useEffect(() => {
    hljs.highlightAll();
  });

  const code_first = `import asyncio

  @async_timeit
  async def factorial(name, number):
      f = 1
      for i in range(2, number + 1):
          print(f"Task {name}: Compute factorial({number}), currently i={i}...")
          await asyncio.sleep(1)
          f *= i
      print(f"Task {name}: factorial({number}) = {f}")
      return f
  
  @async_timeit
  async def main():
      # Schedule three calls *concurrently*:
      L = await asyncio.gather(
          factorial("A", 2),
          factorial("B", 3),
          factorial("C", 4),
      )
      print(L)
  
  asyncio.run(main())`;
  const bash_first = `  Task A: Compute factorial(2), currently i=2...
  Task B: Compute factorial(3), currently i=2...
  Task C: Compute factorial(4), currently i=2...
  Task A: factorial(2) = 2
  func:'factorial' args:[('A', 2), {}] took: 1.0011 sec
  Task B: Compute factorial(3), currently i=3...
  Task C: Compute factorial(4), currently i=3...
  Task B: factorial(3) = 6
  func:'factorial' args:[('B', 3), {}] took: 2.0125 sec
  Task C: Compute factorial(4), currently i=4...
  Task C: factorial(4) = 24
  func:'factorial' args:[('C', 4), {}] took: 3.0248 sec
  [2, 6, 24]
  func:'main' args:[(), {}] took: 3.0248 sec`;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="prose lg:prose-xl prose-img:mx-auto">
        <h1>Python Async</h1>
        <p>
          Here are some insights into topics about the async programming in
          python
        </p>
        <pre>
          <code className="language-python">{code_first}</code>
        </pre>
        <p> And the output in the shell will look like the following:</p>
        <pre>
          <code className="language-bash">{bash_first}</code>
        </pre>

        <DndContext
          onDragStart={() => {
            setIsDragging(true);
          }}
          onDragEnd={handleDragEnd}
        >
          <div className="flex flex-col w-full m-1">
            <div
              className="grid flex-grow card bg-base-300 rounded-box place-items-center"
              style={{ backgroundColor: highlight }}
            >
              <div className="card-body">
                <h2 className="card-title">
                  {" "}
                  Here are the items you can drag:
                </h2>

                {parent === null ? draggableMarkup : null}
              </div>
            </div>

            <div className="divider divider-vertical "></div>
            <div className="grid  flex-grow card bg-base-300 rounded-box place-items-center">
              {containers.map((id) => (
                // We updated the Droppable component so it would accept an `id`
                // prop and pass it to `useDroppable`
                <Droppable key={id} id={id} dragging={isDragging}>
                  {parent === id ? draggableMarkup : id}
                </Droppable>
              ))}
            </div>
          </div>

          <DraggableOverlaytWithNoSSR />
        </DndContext>
      </article>
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

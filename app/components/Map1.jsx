"use client";
import { useState } from "react";
import { useCallback } from "react";
import { Background, Controls } from "reactflow";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "1",
    connectable: false,
    data: { label: "Address 1" },
    position: {
      x: Math.floor(Math.random() * 600),
      y: Math.floor(Math.random() * 600),
    },
  },

  {
    id: "2",
    data: { label: "Address 2" },
    position: {
      x: Math.floor(Math.random() * 600),
      y: Math.floor(Math.random() * 600),
    },
  },
  {
    id: "3",
    data: { label: "Address 3" },
    position: {
      x: Math.floor(Math.random() * 600),
      y: Math.floor(Math.random() * 600),
    },
  },
  {
    id: "4",
    data: { label: "Address 4" },
    position: {
      x: Math.floor(Math.random() * 600),
      y: Math.floor(Math.random() * 600),
    },
  },
];

const initialEdges = [
  { id: "e1-3", source: "1", target: "3", animated: true },
  { id: "e2-4", source: "2", target: "4", animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  //   function handleChange() {
  //     setNodes((prevNodes) => [
  //       ...prevNodes,
  //       {
  //         id: "4",
  //         data: { label: <div>Default Node</div> },
  //         position: { x: 100, y: 125 },
  //       },
  //     ]);
  //     setEdges((prevEdges) => [
  //       ...prevEdges,
  //       { id: "e3-4", source: "3", target: "4", animated: true },
  //     ]);
  //   }

  return (
    <>
      <ReactFlow
        style={{
          width: "75%",
          minHeight: "500px",
          backgroundColor: "#303030",
        }}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />
        <Background />
      </ReactFlow>
    </>
  );
}

export default Flow;

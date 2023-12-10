"use client";
import { useState } from "react";
import { useCallback } from "react";
import { Background, Controls } from "reactflow";
import ReactFlow, { applyEdgeChanges, applyNodeChanges } from "reactflow";
import "reactflow/dist/style.css";
import Navbar from "../components/Navbar";

interface Node {
  id: string;
  connectable: boolean;
  data: { label: string };
  position: { x: number; y: number };
}

interface Edge {
  id: string;
  source: string;
  target: string;
  animated: boolean;
}

const initialNodes: Node[] = [
  {
    id: "1",
    connectable: false,
    data: { label: "Address 1" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },

  {
    id: "2",
    connectable: false,
    data: { label: "Address 2" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },
  {
    id: "3",
    connectable: false,
    data: { label: "Address 3" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },
  {
    id: "4",
    connectable: false,
    data: { label: "Address 4" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },
  {
    id: "5",
    connectable: false,
    data: { label: "Address 5" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },
  {
    id: "6",
    connectable: false,
    data: { label: "Address 6" },
    position: {
      x: Math.floor(Math.random() * 1000),
      y: Math.floor(Math.random() * 1000),
    },
  },
];

const initialEdges: Edge[] = [
  { id: "e1-3", source: "1", target: "4", animated: true },
  { id: "e2-4", source: "2", target: "6", animated: true },
  { id: "e3-5", source: "3", target: "5", animated: true },
];

function Flow() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: any[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes: any[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  //   function handleChange() {
  //     setNodes((prevNodes) => [
  //       ...prevNodes,
  //       {
  //         id: "4",
  //         data: { label: <div>Default Node</div> },
  //         position: { x: 1000, y: 125 },
  //       },
  //     ]);
  //     setEdges((prevEdges) => [
  //       ...prevEdges,
  //       { id: "e3-4", source: "3", target: "4", animated: true },
  //     ]);
  //   }

  return (
    <div className="bg-black h-screen">
      <Navbar />
      <div className="h-5/6 mt-5 flex items-center justify-center rounded-xl">
        <ReactFlow
          style={{
            width: "100%",
            backgroundColor: "#18181B",
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
      </div>
    </div>
  );
}

export default Flow;

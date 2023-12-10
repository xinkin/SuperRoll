"use client";
import React, { FC, ReactElement, useEffect, useMemo, memo } from "react";
import ReactFlow, { Controls, Background, useNodesState, useEdgesState, addEdge, Position } from "reactflow";
import "reactflow/dist/style.css";
import { ethers } from "ethers";

export enum StreamStatus {
  Active,
  Inactive,
}

interface Edge {
  id: string;
  source: string;
  target: string;
  label?: string;
  animated?: boolean;
}

interface Node {
  id: string;
  position: { x: number; y: number };
  data: { label: ReactElement };
  flowRate?: string;
  sourcePosition?: Position;
}

const Map: FC = (): ReactElement => {
  const generateNodeId = (index: number) => `node-${index}`;

  // Generate 6 nodes with positions forming pairs
  const initialNodes: Node[] = Array.from({ length: 6 }, (_, index) => ({
    id: generateNodeId(index),
    position: { x: index * 150, y: index % 2 === 0 ? 100 : 300 },
    data: {
      label: (
        <div>
          <p>User {index + 1}</p>
        </div>
      ),
    },
  }));

  // Generate initial edges connecting nodes in pairs
  const initialEdges: Edge[] = [];
  for (let i = 0; i < 6; i += 2) {
    initialEdges.push({
      id: `edge-${i}-${i + 1}`,
      source: generateNodeId(i),
      target: generateNodeId(i + 1),
      animated: true,
    });
  }

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds));

  useEffect(() => {
    // Simulate data fetching with dummy data
    const dummyData = {
      incomingStreams: [
        { sender: "dummySender1", currentFlowRate: ethers.parseEther("1.5"), tokenSymbol: "ETH" },
        { sender: "dummySender2", currentFlowRate: ethers.parseEther("0.8"), tokenSymbol: "DAI" },
        // Add more dummy data as needed
      ],
      outgoingStreams: [
        { receiver: "dummyReceiver1", currentFlowRate: ethers.parseEther("2.0"), tokenSymbol: "USDC" },
        { receiver: "dummyReceiver2", currentFlowRate: ethers.parseEther("1.2"), tokenSymbol: "BTC" },
        // Add more dummy data as needed
      ],
    };

    const incomingNodeList = dummyData.incomingStreams.map((stream, i) => ({
      id: `dummyIncomingNode-${i}`,
      position: { x: (i + 1) * 150, y: 100 },
      data: {
        label: (
          <div>
            <p>Sender: {stream.sender}</p>
            <p>Flow Rate: {stream.currentFlowRate.toString()}</p>
          </div>
        ),
      },
      flowRate: `${stream.currentFlowRate.toString()}/Mo  ${stream.tokenSymbol}`,
      sourcePosition: Position.Bottom,
    }));

    const outgoingNodeList = dummyData.outgoingStreams.map((stream, i) => ({
      id: `dummyOutgoingNode-${i}`,
      position: { x: (i + 1) * 150, y: 300 },
      data: {
        label: (
          <div>
            <p>Receiver: {stream.receiver}</p>
            <p>Flow Rate: {stream.currentFlowRate.toString()}</p>
          </div>
        ),
      },
      flowRate: `${stream.currentFlowRate.toString()}/Mo  ${stream.tokenSymbol}`,
      sourcePosition: Position.Top,
    }));

    const incomingEdgeList: Edge[] = incomingNodeList.map((node) => ({
      id: `dummyIncomingEdge-${node.id}`,
      label: node.flowRate,
      source: node.id,
      target: "dummyReceiver", // Replace with your desired target node ID
      animated: true,
    }));

    const outgoingEdgeList: Edge[] = outgoingNodeList.map((node) => ({
      id: `dummyOutgoingEdge-${node.id}`,
      label: node.flowRate,
      source: "dummySender", // Replace with your desired source node ID
      target: node.id,
      animated: true,
    }));

    setNodes([...incomingNodeList, ...outgoingNodeList]);
    setEdges([...incomingEdgeList, ...outgoingEdgeList]);
  }, []); // Removed accountAddress from dependencies

  return (
    <ReactFlow
      style={{
        width: "100%",
        minHeight: "500px",
        backgroundColor: "#303030",
      }}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
};

export default memo(Map);

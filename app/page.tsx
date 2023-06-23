"use client"
import TreeComponent, { data } from "../src/components/Rectangle/Rectangle";
// import NodeCard from '../src/components/nodeCard/nodeCard';
// import MyComponent from "./awsAPI";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 m-0">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm p-0 m-0">
      <TreeComponent {...data} />
      </div>
{/*       <NodeCard /> */}
    </main>
  )
}

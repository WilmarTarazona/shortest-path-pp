// src/components/Node.js
import React from 'react';
import './Node.css';

const Node = ({ node, onMouseDown, onMouseEnter, onMouseUp }) => {
  const { row, col, isStart, isFinish, isVisited, isWall, isShortestPath } = node;

  let nodeClass = 'node';

  if (isStart) {
    nodeClass += ' node-start';
  } else if (isFinish) {
    nodeClass += ' node-finish';
  } else if (isShortestPath) {
    nodeClass += ' node-shortest-path';
  } else if (isVisited) {
    nodeClass += ' node-visited';
  } else if (isWall) {
    nodeClass += ' node-wall';
  }

  return (
    <div
      id={`node-${row}-${col}`}
      className={nodeClass}
      onMouseDown={() => onMouseDown(row, col)}
      onMouseEnter={() => onMouseEnter(row, col)}
      onMouseUp={() => onMouseUp()}
    >
      {/* Customize content inside each node */}
      {isStart}
      {isFinish}
    </div>
  );
};

export default Node;

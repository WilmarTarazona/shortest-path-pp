import React from 'react';
import './Grid.css';

class Grid extends React.Component {
  render() {
    const { grid } = this.props;

    return (
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${cell === 'W' ? 'wall' : ''}`}
              >
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Grid;

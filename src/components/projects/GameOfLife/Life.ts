export class Cell {
  public isAlive: boolean;

  constructor(
    public x: number,
    public y: number,
    chance?: number
  ) {
    const { random } = Math;
    if (chance) this.isAlive = random() >= chance;
    else this.isAlive = random() >= 0.75;
  }
}

export interface CellOptions {
  size: number;
  aliveFill: string;
  aliveStroke: string;
  deadFill: string;
  deadStroke: string;
}

export function createCells(n: number, chance: number): Cell[][] {
  const { sqrt } = Math;
  const colCount: number = ~~sqrt(n);
  const cells: Cell[][] = [];

  for (let y = 0; y < colCount; y++) {
    const row: Cell[] = [];
    for (let x = 0; x < colCount; x++) row.push(new Cell(x, y));
    cells.push(row);
  }

  return cells;
}

export function getNextCells(cells: Cell[][]): Cell[][] {
  function countLivingNeighbors(x: number, y: number): number {
    const origins: [number, number][] = [
      [-1, -1],[0, -1],[1, -1],
      [-1, 0],[1, 0],
      [-1, 1],[0, 1],[1, 1]
    ];
    let count: number = 0;

    for (let origin of origins) {
      if (cells[y + origin[1]] && cells[y + origin[1]][x + origin[0]]) {
        const cell: Cell = cells[y + origin[1]][x + origin[0]];
        if (cell.isAlive) count++;
      }
    }

    return count;
  }

  const newCells: Cell[][]= [];

  for (let y = 0; y < cells.length; y++) {
    const row: Cell[] = [];

    for (let x = 0; x < cells[y].length; x++) {
      const cell: Cell = cells[y][x];
      const count: number = countLivingNeighbors(x, y);
      let newCell: Cell = new Cell(x, y);

      if ((cell.isAlive && (count >= 2 && count <= 3)) || (!cell.isAlive && count === 3)) {
        newCell.isAlive = true;
      } else {
        newCell.isAlive = false;
      }

      row.push(newCell);
    }

    newCells.push(row);
  }

  return newCells;
}

export function renderCells(ctx: CanvasRenderingContext2D, cells: Cell[][], options: CellOptions): void {


  function renderCell(cell: Cell): void {
    const { x, y, isAlive } = cell;
    const { aliveFill, aliveStroke, deadFill, deadStroke, size } = options;
    ctx.beginPath();
    ctx.save();
    ctx.fillStyle = isAlive ? aliveFill : deadFill;
    ctx.strokeStyle = isAlive ? aliveStroke : deadStroke;
    ctx.translate(x * size, y * size);
    ctx.rect(1, 1, size - 2, size - 2);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    ctx.closePath();
  }
  
  for (let y = 0; y < cells.length; y++) {
    for (let x = 0; x < cells[y].length; x++) renderCell(cells[y][x]);
  }
  console.log(`RENDERED CELLS ${new Date().getTime()}`);
}
# ConwayGameOfLife

This is a build for computer science.

## Background
John Conway devised the Game of Life in 1970. THe game requires no input after the initial state is set. 

[Per Wikipedia](https://en.wikipedia.org/wiki/Conway's_Game_of_Life) the exists on a two-dimensional grid. Each grid space has two stats, live or dead. Each grid cell interacts with the eight neighboring cells. 

The game is seeded with "live" cells as an initial condition, then the game continues without any additional input.

For each time-step in the game, the rules are:

    1. Any live cell with fewer than two live neighbors dies, as if by underpopulated.

    2. Any live cell with two or three live neighbors lives on to the next generation.

    3.  Any live cell with more than three live neighbors dies, as if by overpopulation.

    4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.

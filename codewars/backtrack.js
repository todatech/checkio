/*
root(P): return the partial candidate at the root of the search tree.
reject(P,c): return true only if the partial candidate c is not worth completing.
accept(P,c): return true if c is a solution of P, and false otherwise.
first(P,c): generate the first extension of candidate c.
next(P,s): generate the next alternative extension of a candidate, after the extension s.
output(P,c): use the solution c of P, as appropriate to the application.

procedure bt(c) is
    if reject(P, c) then return
    if accept(P, c) then output(P, c)
    s ← first(P, c)
    while s ≠ NULL do
        bt(s)
        s ← next(P, s)


*/

updateMove(x, y) {
    if (this.isValidMove(x, y) && this.isSafeMove(x, y)) {
      //update current position;
      this.coord = [x, y];
      return this.isAnExit(x, y);
    } else {
      return undefined;
    }
  }

  // updateMove return true if you reach exit 
  // or undefined if it's an invalid move
  goDown = (x, y) => this.updateMove(x, y + 1);
  goUp = (x, y) => this.updateMove(x, y - 1);
  goLeft = (x, y) => this.updateMove(x - 1, y);
  goRight = (x, y) => this.updateMove(x + 1, y);


  startTracking() {
    this.currentDistance = 0;
    this.resultDistances = [];

    this.resultMaps = [];
    this.createEmptyTrackMap();

    this.moveSequence = [];
    this.resultSequences = [];

    this.backTrack(this.startCoord[0], this.startCoord[1]);
  }

  backTrack(x, y) {
    this.trackMap[y][x] = true;
    
    for (let i = 0; i < 4; i++) {
      const goFunc = [this.goDown, this.goRight, this.goUp, this.goLeft];
      const result = goFunc[i].apply(this, [x, y]);
      if (result !== undefined) {     // not a valid move
        this.currentDistance += 1;
        this.moveSequence.push(i);    //record sequence of move
        if (result) {                 // found exit

          this.resultDistances.unshift(this.currentDistance);

          const resultMap = deepCopy(this.trackMap);
          this.resultMaps.unshift(resultMap);

          const resultSeq = deepCopy(this.moveSequence);
          this.resultSequences.unshift(resultSeq);
          return;

        } else { // did not hit an exit but was a good move
          // if we able to move up/down/left/right, the current coord will recorded.
          this.backTrack(this.coord[0], this.coord[1]);
        }
      }
    }

    this.currentDistance -= 1;
    this.moveSequence.pop();
    this.trackMap[y][x] = undefined;
  }
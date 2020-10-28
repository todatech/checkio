while (cursor < nElem ** 2) {
    for (j = vStart; j < vEnd; j++) {
      if (hDir > 0) {
        for (i = hStart; i < hEnd; i++) {
          // result.push(arr[j][i]);
          log(j.toString() + i.toString())
          // log('v: ', vDir, 'h: ', hDir);
          cursor++;
        }
        i--;
        hDir = -hDir;
      } else {
        log(j.toString() + i.toString())
        // log('v: ', vDir, 'h: ', hDir);
        cursor++;
      }
    }
    hDir = -hDir;
  }
  vDir = -vDir;
  return result;


          // result.push(arr[j][i]);



  const result = [];
  let top = 0, left = 0;
  let bottom = nElem, right = nElem;
  let hStart, hEnd, vStart, vEnd, hDir, vDir;
  let cursor = 0;
  let i, j = 0;

  hStart = left;
  hEnd = right;
  vStart = top;
  vEnd = bottom;
  hDir = 1; // or -1 for flowing bacwards;
  vDir = 1;

      // for (j = vStart; j < vEnd; j += 1) {
    //   if (hDir > 0) {
    //     for (i = hStart; i < hEnd; i += 1) {
    //       log(j.toString() + i.toString())
    //       cursor++;
    //     }
    //     i--;
    //     hDir = - hDir;

    //   } else {
    //     log(j.toString() + i.toString())
    //     cursor++;
    //   }
    // }
    // vDir = - vDir
    // j--;


  // 00 10 20
  // 01 11 21
  // 02 12 22 


  const asdf = function () {
    const result = [];
    let top = 0, left = 0;
    let bottom = nElem, right = nElem;
    let hStart, hEnd, vStart, vEnd, hDir, vDir;
    let cursor = 0;
    let i, j;
  
    hStart = left;
    hEnd = right;
    vStart = top;
    vEnd = bottom;
    hDir = 1; // or -1 for flowing bacwards;
    vDir = 1;
    dirX = true; // false dirY
  
    while (cursor < nElem ** 2) {
      for (j = vStart; j < vEnd; j += vDir) {
        if (dirX) {
          for (i = hStart; i < hEnd; i += hDir) {
            result.push(arr[j][i]);
            cursor++;
          }
          if (hDir > 0) {
            [hStart, hEnd] = [hEnd, hStart]
          } else {
            [hStart, hEnd] = [hEnd - 1, hStart - 1]
          }
          hDir = - hDir;
          dirX = false;
          i--;
        } else {
          result.push(arr[j][i]);
          cursor++;
        }
      }
      if (hDir > 0) {
        [vStart, vEnd] = [vEnd, vStart]
      } else {
        [vStart, vEnd] = [vEnd - 1, vStart - 1]
      }
      vDir = - vDir
      dirX = true;
      j--;
    }
  
    return result;
  }




    // YX
  // 00 01 02
  // 10 11 12
  // 20 21 22

  // XY
  // 00 10 20
  // 01 11 21
  // 02 12 22 

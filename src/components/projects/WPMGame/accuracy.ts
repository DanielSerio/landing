
export default function getAccuracy(text: string, compareText: string): number {
  let longer: string = text;
  let shorter: string = compareText;
  if (text.length < compareText.length) {
    longer = compareText;
    shorter = text;
  }
  let longerLength: number = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(`${longerLength}`);
}

function editDistance(text: string, compareText: string): number {
  text = text.toLowerCase();
  compareText = compareText.toLowerCase();

  let costs = new Array();
  for (let i = 0; i <= text.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= compareText.length; j++) {
      if (i === 0)
        costs[j] = j;
      else {
        if (j > 0) {
          let newValue = costs[j - 1];
          if (text.charAt(i - 1) !== compareText.charAt(j - 1))
            newValue = Math.min(Math.min(newValue, lastValue),
              costs[j]) + 1;
          costs[j - 1] = lastValue;
          lastValue = newValue;
        }
      }
    }
    if (i > 0) costs[compareText.length] = lastValue;
  }
  return costs[compareText.length];
}
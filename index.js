class sum {
    static pi = 3.14159;
  
    static square(x) {
      return x * x;
    }

    static circum(radius) {
      return 2 * sum.pi * radius;
    }
  }
  
  console.log(sum.pi);

  const total = sum.square(5);
  console.log(total);
  
  const circumferenceResult1 = sum.circum(4);
  console.log(circumferenceResult1);

  class DescriptiveStatistics {
    static mean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    static median(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      const middle = Math.floor(sortedNumbers.length / 2);
      return sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
        : sortedNumbers[middle];
    }
  
    static mode(numbers) {
        const myMap = new Map();

        numbers.forEach((ar) => {
        myMap.set(ar, (myMap.get(ar) || 0) + 1);
        });

        let frqNum = 0;
        let modes = [];
        myMap.forEach((frq, num) => {
        if (frq > frqNum) {
            frqNum = frq;
            modes = [num];
        } else if (frq === frqNum) {
            modes.push(num);
        }
        });
        console.log(`The mode is ${modes}`);
    }
  
    static range(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
    }
  
    static variance(numbers) {
      const meanValue = DescriptiveStatistics.mean(numbers);
      const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
      return DescriptiveStatistics.mean(squaredDifferences);
    }
  
    static standardDeviation(numbers) {
      return Math.sqrt(DescriptiveStatistics.variance(numbers));
    }
  }
  

  const datasets = [12, 15, 8, 10, 5, 14, 7, 15, 9];
  class sum1 {
    static pi = 3.14159;
  
    static square(x) {
      return x * x;
    }

    static circum(radius) {
      return 2 * sum.pi * radius;
    }
  }
  
  console.log(sum.pi);

  const result = sum.square(5);
  console.log(result);
  
  const circumferenceResult = sum.circum(4);
  console.log(circumferenceResult);

  class DescriptiveStatistic {
    static mean(numbers) {
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }
  
    static median(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      const middle = Math.floor(sortedNumbers.length / 2);
      return sortedNumbers.length % 2 === 0
        ? (sortedNumbers[middle - 1] + sortedNumbers[middle]) / 2
        : sortedNumbers[middle];
    }
  
    static mode(numbers) {
        const myMap = new Map();

        numbers.forEach((ar) => {
        myMap.set(ar, (myMap.get(ar) || 0) + 1);
        });

        let frqNum = 0;
        let modes = [];
        myMap.forEach((frq, num) => {
        if (frq > frqNum) {
            frqNum = frq;
            modes = [num];
        } else if (frq === frqNum) {
            modes.push(num);
        }
        });
        console.log(`The mode is ${modes}`);
    }
  
    static range(numbers) {
      const sortedNumbers = numbers.sort((a, b) => a - b);
      return sortedNumbers[sortedNumbers.length - 1] - sortedNumbers[0];
    }
  
    static variance(numbers) {
      const meanValue = DescriptiveStatistics.mean(numbers);
      const squaredDifferences = numbers.map((num) => (num - meanValue) ** 2);
      return DescriptiveStatistics.mean(squaredDifferences);
    }
  
    static standardDeviation(numbers) {
      return Math.sqrt(DescriptiveStatistics.variance(numbers));
    }
  }
  

  const dataset = [12, 15, 8, 10, 5, 14, 7, 15, 9];
  console.log(`the mean is = ${DescriptiveStatistics.mean(dataset)}`);
  console.log(`the median is = ${DescriptiveStatistics.median(dataset)}`);
  console.log(`the range is = ${DescriptiveStatistics.range(dataset)}`);
  console.log(`the mode is = ${DescriptiveStatistics.mode(dataset)}`);
  console.log(`the standardDeviation is = ${DescriptiveStatistics.standardDeviation(dataset)}`);
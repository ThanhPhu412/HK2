interface CacheStrategy {
    shouldCache(...args: any[]): boolean;
  }
  function Cacheable(strategy: CacheStrategy) {
    return function (
      target: any,
      propertyKey: string,
      descriptor: PropertyDescriptor
    ) {
      const originalMethod = descriptor.value;
      const cache = new Map<string, any>();
  
      descriptor.value = function (...args: any[]) {
        const key = JSON.stringify(args);
  
        if (cache.has(key)) {
          console.log(`Cache hit for key: ${key}`);
          return cache.get(key);
        }
  
        console.log(`Cache miss for key: ${key}`);
        const result = originalMethod.apply(this, args);
  
        if (strategy.shouldCache(...args)) {
          cache.set(key, result);
        }
  
        return result;
      };
  
      return descriptor;
    };
  }
  class AlwaysCacheStrategy implements CacheStrategy {
    shouldCache(...args: any[]): boolean {
      return true;
    }
  }
  class Example3 {
    @Cacheable(new AlwaysCacheStrategy())
    public computeSum(a: number, b: number): number {
      console.log(`Computing sum of ${a} and ${b}`);
      return a + b;
    }
  }
  class PositiveResultCacheStrategy implements CacheStrategy {
    shouldCache(...args: any[]): boolean {
      return args.every((arg) => typeof arg === "number" && arg > 0);
    }
  }
  
  class ExampleWithPositiveCache {
    @Cacheable(new PositiveResultCacheStrategy())
    public computeSum(a: number, b: number): number {
      console.log(`Computing sum of ${a} and ${b}`);
      return a + b;
    }
  }
  // Kiểm tra với AlwaysCacheStrategy
  const example = new Example3();
  console.log(example.computeSum(1, 2)); // "Computing sum of 1 and 2", 3
  console.log(example.computeSum(1, 2)); // "Cache hit for key: [1,2]", 3
  console.log(example.computeSum(3, 4)); // "Computing sum of 3 and 4", 7
  console.log(example.computeSum(3, 4)); // "Cache hit for key: [3,4]", 7
  
  // Kiểm tra với PositiveResultCacheStrategy
  const examplePositive = new ExampleWithPositiveCache();
  console.log(examplePositive.computeSum(1, 2)); // "Computing sum of 1 and 2", 3
  console.log(examplePositive.computeSum(1, 2)); // "Cache hit for key: [1,2]", 3
  console.log(examplePositive.computeSum(-1, 2)); // "Computing sum of -1 and 2", 1
  console.log(examplePositive.computeSum(-1, 2)); // "Computing sum of -1 and 2", 1
// breadthFirstSearch.ts

type Graph = {
    [key: string]: string[];
  };
  
  export function breadthFirstSearch(graph: Graph, startNode: string): string[] {
    const queue: string[] = [];
    const visited: string[] = [];
    
    queue.push(startNode);
  
    while (queue.length > 0) {
      const node = queue.shift()!;
      visited.push(node);
  
      for (const neighbor of graph[node]) {
        if (!visited.includes(neighbor) && !queue.includes(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  
    return visited;
  }
  
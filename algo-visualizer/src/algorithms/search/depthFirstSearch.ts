// depthFirstSearch.ts

type Graph = {
    [key: string]: string[];
  };
  
  export function depthFirstSearch(graph: Graph, startNode: string): string[] {
    const visited: string[] = [];
    
    function dfs(node: string) {
      visited.push(node);
      
      for (const neighbor of graph[node]) {
        if (!visited.includes(neighbor)) {
          dfs(neighbor);
        }
      }
    }
  
    dfs(startNode);
    return visited;
  }
  
import componentsImg from './src/assets/components.png';
import propsImg from './src/assets/config.png';
import jsxImg from './src/assets/jsx-ui.png';
import stateImg from './src/assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Dynamic Programing',
    description:
      'DP or Dynamic Programming is a problem-solving technique that involves breaking down complex problems into smaller, simpler sub-problems and memorizing them.',
  },
  {
    image: jsxImg,
    title: 'Linked Lists',
    description:
      'Linked lists offer efficiency in dynamic memory allocation, employing nodes that store data along with references to next node.',
  },
  {
    image: propsImg,
    title: 'Trees',
    description:
      'A hierarchically organized data structure that contains nodes, representing elements. Every node is interconnected with edges such that there is only one path between any two nodes.',
  },
  {
    image: stateImg,
    title: 'Graphs',
    description:
      'A collection of nodes that are connected through edges. In a graph a node can have 0 or n number of edges.',
  },
];

export const EXAMPLES = {
  dynamicprograming: {
    title: 'Dynamic Programing',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    representation:' ',
      code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  linkedlist: {
    title: 'LinkedList',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    representation:' ',  
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  trees: {
    title: 'Trees',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
      representation:' ',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  graphs: {
    title: 'Graphs',
    description:
      'Graphs are non-linear data structures comprising a set of nodes or vertices interconnected by a set of edges. Generally graphs are represented as G(V,E) where V signifies the set of vertices/nodes and E represents the set of edges. Graphs are useful in various real-time scenarios such as social media networking, route finding in maps, computer networks, and more. Every tree is a graph.',
    representation:'Graphs can be represntated in two ways, Adjacency Matrix and Adjacency List. As the name suggests, Adjacency matrix is used to represent a graph in the form of 0 and 1. If we consider a graph of N nodes, the graph is represented as matrixArray[N][N]. When there is an edge between u and v nodes, matrixArray[u][v] is set to 1. There is a lot of memory wastage in Adjacency Matrix as 0 is denoted to determine that there is no edge between the nodes. To optimize this, we often use Adjacency List. Adjacency List contains an array denoting each node and each element in this array is a list, which contains the connected nodes to the node',
    code: `
    public static void main(String ar[]){
      Scanner scanner=new Scanner(System.in);
      //Getting number of nodes and edges from the user.
      int numberOfNodes = scanner.nextInt();
      int numberOfEdges = scanner.nextInt();
      //Creating a Adjacency List for represnting graph
      //Initializing the array of lists.
      ArrayList<Integer>[] graph=new ArrayList[numberOfNodes+1];
      for(int i=0; i<= numberOfNodes; i++){
        graph[i]=new ArrayList<Integer>();
      }
      //given a pair (u,v) determines that there exists an 
      //edge between nodes u and v and vice versa.
      for(int i=0; i<numberOfEdges; i++){
        int intialNode = scanner.nextInt();
        int finalNode = scanner.nextInt();
        graph[intialNode].add(finalNode);
        graph[finalNode].add(intialNode);
      }
    }
    `,
  },
};
export default function NeighborhoodsList {
  constructor() {
    this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
    this.addNeighborhood = (newNeighborhood) => {
      this.sanFranciscoNeighborhoods.push(newNeighborhood);
      return this.sanFranciscoNeighborhoods;
    };
  }
}

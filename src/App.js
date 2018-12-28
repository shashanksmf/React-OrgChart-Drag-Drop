import React, { Component } from "react";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import "font-awesome/css/font-awesome.min.css";
import Branch from "./component/branch";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      treeData: {
        title: "Root",
        number: 10,
        children: [
          {
            title: "P1",
            number: 4,
            children: [
              {
                title: "C1",
                number: "x",
              },
              {
                title: "C2",
                number: "x"
              },
              {
                title: "C3",
                number: "x"
              },
              {
                title: "C4",
                number: "x"
              }
            ]
          },
          {
            title: "P2",
            number: 1,
            children: [
              {
                title: "C2-1",
                number: "x"
              }
            ]
          },
          {
            title: "O1",
            number: "x",
            children: []
          },
          {
            title: "O2",
            number: "x",
            children: []
          },
          {
            title: "O3",
            number: "x",
            children: []
          }
        ]
      },
      dragItem: null,
      dragOverItem: null
    };
    this.dragItem = null;
    this.dragOverItem = null;
  }

  searchChildren(children) {
    let dragIndex = null, dropOverIndex = null;
    for (let k = 0; k < children.length; k++) {
      if (children[k].title === this.dragItem) {
        dragIndex = k;
      }
      if (children[k].title === this.dragOverItem) {
        dropOverIndex = k;
      }
    }
    if (dragIndex == null || dropOverIndex == null) {
      for (let kj = 0; kj < children.length; kj++) {
        if (children[kj] && children[kj].children) {
          this.searchChildren(children[kj].children);
        }
      }
    }
    else {
      let newDragData = children[dropOverIndex];
      children[dropOverIndex] = children[dragIndex];
      children[dragIndex] = newDragData;
    }
  }

  onDrop() {
    const { treeData } = this.state;
    this.searchChildren(treeData.children);
    this.setState({
      treeData
    })
  }


  drag(node) {
    this.dragItem = node.title;
  }

  dragOver(event, node) {
    event.preventDefault();
    this.dragOverItem = node.title;
  }

  render() {
    const { treeData } = this.state;

    const MyNodeComponent = ({ node }) => {
      return <div
        onDrop={() => this.onDrop()}
        onDragOver={(event) => this.dragOver(event, node)}
        draggable="true"
        onDragStart={() => this.drag(node)}>
        <Branch data={node} />
      </div>;
    };

    return (
      <div className="App">
        <OrgChart tree={treeData} NodeComponent={MyNodeComponent} />
      </div>
    );
  }
}

export default App;

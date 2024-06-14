class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Pentagon extends Shape {
    render() {
      return `<polygon points="150, 0 200, 70 175, 150 125, 150 100, 70" fill="${this.color}" />`;
    }
  }
  
  export { Triangle, Circle, Square, Pentagon };
















// class Shape {
//   // color = ''
//   constructor() {
    
//   }
//   setColor(colorStr) {
//     this.color = colorStr
//   }
  
//   // precondition: you have called setColor already
//   render() {
//     console.log(this.color)
//     return '...'
//   }
// }

// class Triangle extends Shape {
//   render() {
//     const shape = `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
//     return shape
//   }
// }
// class Circle extends Shape {
//   // precondition: you must have called setColor before
//   // returns a string to put in an svg file
//   render() {
//     const shape = `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
//     return shape
//   }
// }
// class Square extends Shape {
//   render() {
//     const centerX = 150
//     const halfWidth = 80
//     const leftX = centerX - halfWidth
//     const centerY = 100
//     const halfHeight = 80
//     const topY = centerY - halfHeight
//     const shape = `<rect x="${leftX}" y="${topY}" width="160" height="160" fill="${this.color}" />`
//     return shape
//   }
// }

// // const name = "hello"
// // const myObj = { name } // { name: name }
// module.exports = { Triangle, Circle, Square };
// import { Triangle, Circle } from ''


// module.exports = Circle
// import Triangle from ''













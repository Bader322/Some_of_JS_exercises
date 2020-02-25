class Board {
    
    

    constructor() {
      this.tiles = [];

    }
    
  }

  
  class Tile {
    constructor() {
      this.square = 0;
    }
    constructor(square_content, x,y) {
        this.square = square_content;
        this.x_index = x;
        this.y_index = y;
      }

    set_x(x) {
        x_index = x;
      }
    get_x() {
        return this.x_index;
      }
    set_y(y) {
        y_index = y;
      }
    get_y() {
        return this.y_index;
      }
    set_square(square){
        square = square_content;
    }
    get_square(){
        return this.square;
    }

    



  }




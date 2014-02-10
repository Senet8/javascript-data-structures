var makeStack = function () {
	var size = 0,
		stack = {},
		storage = {};
	
	stack.push = function(){
		storage[size++] = value;
	}

	stack.pop = function(){
		if(size){
			var tmp = storage[size -1];
			return (delet storage[size--]) && tmp;
		}
	}

	stack.size = function(){
	  return size;
	}
	
	return stack;
 
}


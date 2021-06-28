

class ControllerCalculadora{
	constructor(){ 
		
	}
	
	soma(){
		return async(req,res) => {
			res.setHeader('Content-Type', 'application/json');
			res.json({result: req.body.num1 + req.body.num2})
		}
	}
	sub(){
		return async(req,res) => {
			res.setHeader('Content-Type', 'application/json');
			res.json({result: req.body.num1 - req.body.num2})
		}
	}
	multi(){
		return async(req,res) => {
			var cont = 0;
			var acc = 0;
			while(cont < req.body.num1){
				acc = acc + req.body.num2;
				cont += 1;
			}
			res.setHeader('Content-Type', 'application/json');
			res.json({result:acc});
		}
	}
	div(){
		return async(req,res) => {
			var cont = 0;
			var n1 = req.body.num1;
			while(n1 >= req.body.num2){
				n1 = n1 - req.body.num2;
				cont += 1;
			}
			res.setHeader('Content-Type', 'application/json');
			res.json({result:cont});
		}
	}
}

module.exports = ControllerCalculadora;
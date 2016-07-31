export class Init {
	load(){
		if(localStorage.getItem('todos') == null || localStorage.getItem('todos') == undefined){
			console.log('No Todos Found...Creating...');

			var todos = [
			{
				text: 'Pick Kids up from School'
			},
			{
				text: 'Meeting with Boss'
			},
			{
				text: 'Dinner With Wife'
			}];

			localStorage.setItem('todos', JSON.stringify(todos));
			return
		} else {
			console.log('found Todos');
		}
	}
}
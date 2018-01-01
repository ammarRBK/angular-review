var app = angular.module('app', []);

app.controller('main', function($scope,$http) {

})

app.component('index',{
	template: `<div>
					<h1>Welcome to our website</h1>
					<form action="/trying">
						<button class="btn btn-success">press me</button>
					</form>
				</div>`
})
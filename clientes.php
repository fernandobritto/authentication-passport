<!DOCTYPE html>
<html lang="pt-br">
<head>
	<meta charset="UTF-8">	
	<meta name="description" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Lista dos Desejos</title>
	<link rel="shortcut icon" href="img/lampada.jpg" type="image/x-icon"/>
	<link rel="stylesheet" href="css/estilo.css" type="text/css" />
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">
	
</head>
<body ng-app="mainModule" ng-controller="mainController">	
	<div class="container">

	<!-- 		Inicio do Cabeçalho do Menu de Navegação 			  -->
		<nav class="navbar navbar-default navbar-fixed-top" style="height:65px;">
		<div class="navbar-inner">
			<div class="container-fluid">
				<div class="navbar-header">
					<button class="navbar-toggle collapsed" data-toggle="collapse" data-target="#barra">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="index.html" class="navbar-brand">Lista de Desejos</a>
				</div>
				<div class="collapse navbar-collapse" id="barra">
					<ul class="nav navbar-nav pull-right">
						<li><a href="clientes.php">Clientes</a></li>
						<li><a href="produtos.php">Produtos</a></li>
					</ul>
				</div>
			</div></div>
		</nav>
					<!-- 			Fim do Cabeçalho do Menu de Navegação 				 -->

			<div class="well" style="margin-top:75px;">			
				<input type="text" ng-model="termoBusca" placeholder="Filtrar lista" class="form-control">
			</div>

			<table class="table table-striped table-bordered">
				<thead>
					<tr>
						<th><a href ng-click="ordenar('nome')">Nome</a></th>											
						<th>Email</th>
						<th>CPF</th>	
						<th>Ações</th>
					</tr>
				</thead>
				<tbody>
					<tr ng-repeat="pessoa in lista | filter:termoBusca">
						<td>{{pessoa.nome}}</td>
						<td>{{pessoa.email}}</td>
						<td>{{pessoa.cpf}}</td>						
						<td>
							<button ng-click="remover(pessoa)" class="btn btn-danger">Remover</button>
							<button ng-click="editar(pessoa)" class="btn btn-success">Editar</button>
						</td>
					</tr>
				</tbody>		
			</table>
		<div id="divMain">
		<form ng-submit="salvar()" method="POST">
			<div class="form-group">
			<label for="nome" class="control-label">Nome</label>
			<input ng-model="pessoa.nome" type="text" class="form-control" name="nome" value="" id="nome">
			</div>

			<div class="form-group">
			<label for="email" class="control-label">Email</label>
			<input ng-model="pessoa.email" type="text" class="form-control" name="email" value="" id="email">
			</div>	

			<div class="form-group">
			<label for="cidade" class="control-label">CPF</label>
			<input ng-model="pessoa.cpf" type="text" class="form-control" name="cpf" value="" id="cpf">
			</div>

			<div class="form-group">
			<label for="cidade" class="control-label">Digite seus Desejos</label>
			<textarea ng-model="pessoa.desejos" type="text" class="form-control" name="desejos" value="" id="desejos"
			 rows="5"></textarea>
			</div>
			
			
			<button class="btn btn-primary" onclick="ajaxPost('produtos.php', '#divDestino');">Salvar</button>

		</form>
		</div>

		<div id="divDestino"></div>	

		</div>	

<br>			<br>			<br>
			

									<!-- 			Inicio do rodape 		 -->
<footer class="footer">
      <div class="container">

        <p class="pull-right">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467688.89495119266!2d-46.5952992!3d-23.6824124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2sS%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1429657849102"></iframe>
        </p>
       
        <p>O aplicativo <b>Lista de Desejos</b> tem o objetivo de listar os dados e três desejos dos clientes, permitindo a visualização e a inserção de novos clientes, assim que você clicar na lâmpada magica você verá o nosso formulários, onde está os nossos clientes e na página de produtos está listado seus respectivos desejos.
		Esta aplicativos foi desenvolvido utilizando o framework JavaScript , Angular JS e o Bootstrap para ativar os recursos de responsivos.
         </p>        
        <p><a href="https://angularjs.org/">Angular JS</a> &nbsp; &nbsp;
        <a href="http://getbootstrap.com/">Bootstrap</a> </p>		
		<div class="validator">
			<p>
			<a href="http://jigsaw.w3.org/css-validator/check/referer">
   			 <img style="border:0;width:88px;height:31px"
       			 src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        		alt="CSS válido!" />
   			 </a>
			</p>
		</div>

        <ul class="footer-links navbar-header">
          <li><a href="https://pt-br.facebook.com/" target="_blank">
          <img src="img/facebook.png" alt="Facebook" style="width:30px; height:30px;"></a></li>
          <li class="muted">&middot;</li>
          <li><a href="https://twitter.com/?lang=pt" target="_blank">
          <img src="img/twitter.png" alt="Twitter" style="width:30px; height:30px;"></a></li>
          <li class="muted">&middot;</li>
          <li><a href="https://www.youtube.com/" target="_blank">
          <img src="img/youtube.png" alt="Youtube" style="width:30px; height:30px;"></a></li>
          <li class="muted">&middot;</li>
          <li><a href="https://www.google.com.br/" target="_blank">
          <img src="img/googleplus.png" alt="Gooogle+" style="width:30px; height:30px;"></a></li>
          <li class="muted">&middot;</li>
          <li><a href="https://br.linkedin.com/" target="_blank">
          <img src="img/linkedin.png" alt="Linkedin" style="width:30px; height:30px;"></a></li>
        </ul>
      </div>
    </footer>
 												   <!-- Final do rodape padrão -->
	 	


	
		

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js"></script>
	<script src="js/app.js" type="text/javascript"></script>
</body>
</html>
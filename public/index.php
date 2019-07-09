<?php
require __DIR__. '/../vendor/autoload.php';


$url = substr($_SERVER['REQUEST_URI'], 1);
$url = explode('/', $url);

$controller = isset($url[0]) && $url[0] ? $url[0] : 'page';
$action = isset($url[1]) && $url[1] ? $url[1] : 'index';

if(!class_exists($controller = "Code\Controller\\".ucfirst($controller). 'Controller')):
	die("404 - Pagina não encontrada");
endif;


$response = call_user_func_array([new $controller,$action], []);

//$execute = new PageController();
//print $execute->index();

print $response;



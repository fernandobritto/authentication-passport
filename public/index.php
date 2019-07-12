<?php

require __DIR__ . '/../vendor/autoload.php';

$url = substr($_SERVER['REQUEST_URI'], 1);
$url = explode('/', $url);

$controller = isset($url[0]) && $url[0] ? $url[0] : 'page';
$action     = isset($url[1]) && $url[1] ? $url[1] : 'index';


$controller = ucfirst($controller).'Controller';

print 'Controller Default: '.$controller;
print "<br>";
print 'Metodo Default: '.$action;
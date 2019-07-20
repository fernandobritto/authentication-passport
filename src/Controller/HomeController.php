<?php

namespace Infoenter\Controller;

use Infoenter\View\View;

class HomeController
{
	public function index()
	{
		$view = new View('site/index.phtml');
		return $view->render();
	}
}

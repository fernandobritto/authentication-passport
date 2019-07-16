<?php

namespace Infoenter\Controller;

use Infoenter\View\View;

class PageController
{
	public function index()
	{
		$view = new View('site/index.phtml');

		return $view->render();
	}
}

<?php

namespace Infoenter\Controller;

use Infoenter\View\View;

class AboutController
{
	public function index()
	{
		$view = new View('site/about.phtml');

		return $view->render();
	}
}

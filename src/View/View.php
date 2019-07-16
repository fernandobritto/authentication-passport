<?php

namespace Infoenter\View;

class View
{
	private $view;
	private $data = [];

	public function __construct($view)
	{
		$this->view = $view;
	}

	public function __set($index, $value)
	{
		$this->data[$index] = $value;
	}

	public function __get($index)
	{
		$this->data[$index];
	}


	public function render()
	{
		ob_start();
		require VIEWS_PATH . $this->view;
		return ob_get_clean();
	}



}
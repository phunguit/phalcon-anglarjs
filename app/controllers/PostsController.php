<?php

class PostsController extends \Phalcon\Mvc\Controller
{

	private $_posts = array();
    public function getAction() {
    	//if($this->request->isGet()) {
        if($this->request->isPost()) {
            
            // $data = $this->request->getJsonRawBody();
            // $robot = new Posts();
            // $robot->title   = $data->data1;
            // $robot->content = 'Astro Boy';
            // $robot->img     = 1952;
            // $robot->date    = date('yyyy-mm-dd');
            // $robot->save();

    		$posts = Posts::find();
    		foreach ($posts as $key => $value) {
    			$this->_posts[] = $value;
    		}
    		$this->response->setJsonContent(array("posts" => $this->_posts));
    		$this->response->setStatusCode(200, "Success");
    		$this->response->send();
    	} else {
			$this->response->setStatusCode(404, "Not Found");
    	}
    	$this->view->disable();
    }

    function insertAction() {
        // $robot = new Posts();
        // $robot->title   = 'aa';
        // $robot->content = 'bbb';
        // $robot->img     = 'aaa';
        // $robot->save();

        $robot = new Posts();
        $robot->title = 'mechanical';
        $robot->content = 'Astro Boy';
        $robot->img = 1952;
        $robot->date = date('yyyy-mm-dd');
        if ($robot->save() == false) {
            echo "Umh, We can't store robots right now ";
            foreach ($robot->getMessages() as $message) {
                    echo $message;
            }
        } else {
            echo "Great, a new robot was saved successfully!";
        }
        $this->view->disable();
    }

}


<?php
// print_r($_FILES['fileUpload']);
// $file = $_REQUEST['file'];
// print_r($file);

// 5.6以后需要配置HTTP_RAW_POST_DATA的支持
$postdata = base64_decode(file_get_contents("php://input"));
// echo __FILE__;
$basedir = dirname(__File__);
if($postdata) {
  $handle = fopen($basedir."/avatar-uploaded.jpg", "w+");
  fwrite($handle, $postdata);
  fclose($handle);
}

?>

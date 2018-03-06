<?php

header('Content-type: application/javascript');

$callback = $_GET['callback'];

$book = json_encode([
    'title' => 'Third-party JavaScript',
    'authors' => ['Anton', 'Ben'],
    'publisher' => 'Manning',
], JSON_PRETTY_PRINT);

echo '$callback($book);';
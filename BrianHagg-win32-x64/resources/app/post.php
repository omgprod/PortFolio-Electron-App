<?php

if (isset($_POST) && isset($_POST["email"]) && isset($_POST["message"]) && isset($_POST["subject"])) {
    $to = "brian.haggery@epitech.eu";
    $subject = htmlspecialchars($_POST['subject']);
    $message="<html><head></head><body>From: " . htmlspecialchars($_POST['email']) ."\nMessage :\n" . htmlspecialchars($_POST['message']) . "</body></html>";
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
    mail($to, $subject, $message, $headers);
    header('Location: http://brian-haggerty.net/index.html');
}else {
    echo "<script>
            alert('Erreur Survenu');
            </script>";
}
?>
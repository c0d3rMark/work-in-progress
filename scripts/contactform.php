<?php

if (isset($_POST['submit'])) {
    $name = htmlspecialchars(stripslashes(trim($_POST['name'])));
    $mailFrom = htmlspecialchars(stripslashes(trim($_POST['email'])));
    $message = nl2br(htmlspecialchars(stripslashes(trim($_POST['message']))));
    $honeypot = htmlspecialchars(stripslashes(trim($_POST['firstname'])));
    $mailTo = "contact@avido.com.au"."\r\n";
    $enquiry = "From: ".$mailFrom."\r\n".
                "Message from: ".$name."\r\n".
                $message."\r\n";
    $headers = "Avido enquiry from: ".$name."\r\n";
    $email = "From: ".$mailFrom."\r\n";
}

if (empty($honeypot) && filter_var($mailFrom, FILTER_VALIDATE_EMAIL) && (!empty($name)) && (!empty($mailFrom)) && (!empty($message))) {
        mail($mailTo, $headers, $email, $enquiry);
        header("Location: https://www.avido.com.au/form-submission.html");
        exit();
} elseif (!filter_var($mailFrom, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://www.avido.com.au/e-mail-error.html");
        exit();
} elseif ((empty($name)) || (empty($mailFrom)) || (empty($message))) {
        header("Location: https://www.avido.com.au/missing-information-error.html");
        exit();
} else {
        header("Location: https://www.avido.com.au");
        exit();
}

?>
<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // reCAPTCHA secret key
    $secret = '6LfgIj4rAAAAAIxsCp18dWJucoYOs8qMAtbT7NFY';  // Replace with your real secret key
    $response = $_POST['6LfgIj4rAAAAAIxBjLT2xR2wRw3lony3iCnGQoJC'];

    // Validate reCAPTCHA
    $verify = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret={$secret}&response={$response}");
    $captcha = json_decode($verify);

    if (!$captcha->success) {
        echo "Captcha verification failed.";
        exit;
    }

    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['nameFooter']));
    $email = filter_var(trim($_POST['emailFooter']), FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($_POST['subjectFooter']));
    $message = htmlspecialchars(trim($_POST['messageFooter']));

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email address.";
        exit;
    }

    // Email details
    $to = "ashisswain330@gmail.com"; // Replace with your own email
    $email_subject = "Contact Form: $subject";
    $email_body = "Name: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Send email
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Please try again.";
    }
}
?>

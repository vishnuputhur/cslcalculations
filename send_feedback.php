<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $rating = $_POST['rating'];
    $comments = $_POST['comments'];
    $name = $_POST['name'];
    $email = $_POST['email'];

    $to = "vishnuputhur@yahoo.com"; // നിങ്ങളുടെ ഇമെയിൽ വിലാസം
    $subject = "New Feedback Received";
    $message = "You have received new feedback:\n\n";
    $message .= "Rating: $rating\n";
    $message .= "Comments: $comments\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Feedback sent successfully!";
    } else {
        echo "Failed to send feedback. Please try again.";
    }
} else {
    echo "Invalid request.";
}
?>
